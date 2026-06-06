import * as THREE from "three";
import { renderer, scene, camera } from "./scene.js";
import "./lighting.js";
import { controls } from "./controls.js";
import { loadModel } from "./loader.js";
import { initUI, revealUI, registerResizeHandler, updateCarInfo } from "./ui.js";

// ─── Ground & Glow ───────────────────────────────────────────────────────────
const groundGeometry = new THREE.CircleGeometry(12, 80);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x0a0a0a,
  roughness: 0.9,
  metalness: 0.05,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x    = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const glowGeometry = new THREE.CircleGeometry(4, 60);
const glowMaterial = new THREE.MeshBasicMaterial({
  color: 0xc9a84c,
  transparent: true,
  opacity: 0.04,
});
const glowDisc = new THREE.Mesh(glowGeometry, glowMaterial);
glowDisc.rotation.x = -Math.PI / 2;
glowDisc.position.y = 0.01;
scene.add(glowDisc);

// ─── State ────────────────────────────────────────────────────────────────────
let currentModel    = null;
let isTransitioning = false;
let animationId     = null;
let isInitialized   = false;
let carsCache       = null;
const loaderBarEl   = document.getElementById("showroom-loader-bar");

// ─── Switch Car ───────────────────────────────────────────────────────────────
async function switchCar(carConfig) {
  if (isTransitioning) return;
  isTransitioning = true;

  document.documentElement.style.setProperty("--accent", carConfig.accentColor || "#c9a84c");

  const accentHex = parseInt((carConfig.accentColor || "#c9a84c").replace("#", ""), 16);
  glowMaterial.color.setHex(accentHex);

  if (currentModel) {
    await fadeOutModel(currentModel);
    scene.remove(currentModel);
    disposeModel(currentModel);
    currentModel = null;
  }

  const loaderEl = document.getElementById("showroom-loader");
  loaderEl.classList.remove("hidden");
  loaderBarEl.style.width    = "0%";
  loaderBarEl.style.background = "";

  if (carConfig.cameraPosition) {
    const [x, y, z] = carConfig.cameraPosition;
    camera.position.set(x, y, z);
  }

  try {
    currentModel = await loadModel(carConfig.modelPath, loaderBarEl);
    updateCarInfo(carConfig);

    setTimeout(() => {
      loaderEl.classList.add("hidden");
      isTransitioning = false;
    }, 600);
  } catch (err) {
    console.error("Falha ao trocar modelo:", err);
    isTransitioning = false;
  }
}

function fadeOutModel(model) {
  return new Promise((resolve) => {
    const duration = 400;
    const start    = performance.now();

    model.traverse((node) => {
      if (node.isMesh && node.material) {
        if (Array.isArray(node.material)) {
          node.material.forEach((m) => { m.transparent = true; });
        } else {
          node.material.transparent = true;
        }
      }
    });

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      model.traverse((node) => {
        if (node.isMesh && node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach((m) => { m.opacity = 1 - t; });
          } else {
            node.material.opacity = 1 - t;
          }
        }
      });
      if (t < 1) { requestAnimationFrame(tick); } else { resolve(); }
    }
    requestAnimationFrame(tick);
  });
}

function disposeModel(model) {
  model.traverse((node) => {
    if (node.isMesh) {
      node.geometry.dispose();
      if (Array.isArray(node.material)) {
        node.material.forEach((m) => m.dispose());
      } else {
        node.material.dispose();
      }
    }
  });
}

// ─── Animation loop ───────────────────────────────────────────────────────────
function animate() {
  animationId = requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

/** Pause the render loop (called when modal closes). */
export function pauseShowroom() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

/** Resume the render loop (called when modal reopens). */
export function resumeShowroom() {
  if (animationId === null) animate();
}

// ─── Public init — called lazily on first openShowroom() ─────────────────────
/**
 * Initialises the Three.js scene and loads the requested car.
 * Safe to call multiple times — subsequent calls just switch the car.
 * @param {string} carId  - car id from cars.json (e.g. "porsche_911_930_turbo")
 */
export async function initShowroom(carId) {
  if (!isInitialized) {
    isInitialized = true;

    try {
      const res  = await fetch("cars.json", { cache: "no-store" });
      carsCache  = await res.json();
    } catch (err) {
      console.error("Falha ao carregar cars.json:", err);
      isInitialized = false;
      return;
    }

    initUI(carsCache, switchCar);

    // Load the requested car (or first as fallback)
    const startCar = (carId && carsCache.find((c) => c.id === carId)) || carsCache[0];
    document.documentElement.style.setProperty("--accent", startCar.accentColor || "#c9a84c");
    const accentHex = parseInt((startCar.accentColor || "#c9a84c").replace("#", ""), 16);
    glowMaterial.color.setHex(accentHex);

    currentModel = await loadModel(startCar.modelPath, loaderBarEl);
    updateCarInfo(startCar);
    revealUI();
    registerResizeHandler();
    animate();
    return;
  }

  // Already initialised — just switch to the requested car
  if (carId && carsCache) {
    const car = carsCache.find((c) => c.id === carId);
    if (car) await switchCar(car);
  }

  resumeShowroom();
}
