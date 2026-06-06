import { camera, renderer } from "./scene.js";

// ─── UI element refs (all prefixed with "showroom-" in index.html) ──────────
const loaderEl     = document.getElementById("showroom-loader");
const headerEl     = document.getElementById("showroom-header");
const infoPanel    = document.getElementById("showroom-info-panel");
const specsPanel   = document.getElementById("showroom-specs-panel");
const controlsHint = document.getElementById("showroom-controls-hint");
const accentLine   = document.getElementById("showroom-accent-line");
const selectorEl   = document.getElementById("showroom-car-selector");

let activeCar = null;

/**
 * Initialises the car selector nav from cars array.
 * @param {Array}    cars      - array from cars.json
 * @param {Function} switchCar - callback to switch the active car
 */
export function initUI(cars, switchCar) {
  selectorEl.innerHTML = "";

  cars.forEach((car) => {
    const item = document.createElement("button");
    item.className = "selector-item";
    item.id = `car-btn-${car.id}`;
    item.setAttribute("aria-label", `Selecionar ${car.year} ${car.id.replace(/_/g, " ")}`);

    item.innerHTML = `
      <span class="selector-year">${car.year}</span>
      <span class="selector-name">${car.name.replace("<br>", " ")}</span>
    `;

    item.addEventListener("click", () => {
      if (activeCar === car.id) return;
      setActiveSelectorItem(car.id);
      switchCar(car);
    });

    selectorEl.appendChild(item);
  });

  if (cars.length > 0) setActiveSelectorItem(cars[0].id);
}

function setActiveSelectorItem(carId) {
  activeCar = carId;
  document.querySelectorAll(".selector-item").forEach((btn) => {
    btn.classList.toggle("active", btn.id === `car-btn-${carId}`);
  });
}

/**
 * Updates the info and specs panels with the given car's data.
 */
export function updateCarInfo(carConfig) {
  const yearEl     = infoPanel.querySelector(".car-year");
  const nameEl     = infoPanel.querySelector(".car-name");
  const subtitleEl = infoPanel.querySelector(".car-subtitle");

  if (yearEl)     yearEl.textContent    = carConfig.year;
  if (nameEl)     nameEl.innerHTML      = carConfig.name;
  if (subtitleEl) subtitleEl.textContent = carConfig.subtitle;

  const specItems = specsPanel.querySelectorAll(".spec-item");
  if (carConfig.specs) {
    carConfig.specs.forEach((spec, i) => {
      if (specItems[i]) {
        const valEl   = specItems[i].querySelector(".spec-value");
        const labelEl = specItems[i].querySelector(".spec-label");
        if (valEl)   valEl.textContent   = spec.value;
        if (labelEl) labelEl.textContent = spec.label;
      }
    });
  }

  document.documentElement.style.setProperty("--accent", carConfig.accentColor || "#c9a84c");
  setActiveSelectorItem(carConfig.id);
}

export function revealUI() {
  const loaderBar = document.getElementById("showroom-loader-bar");
  loaderBar.style.width = "100%";

  setTimeout(() => {
    loaderEl.classList.add("hidden");

    setTimeout(() => {
      headerEl.classList.add("visible");
      infoPanel.classList.add("visible");
      specsPanel.classList.add("visible");
      controlsHint.classList.add("visible");
      accentLine.classList.add("visible");
      selectorEl.classList.add("visible");

      initControlsHintAutofade();
    }, 200);
  }, 600);
}

function initControlsHintAutofade() {
  let fadeTimer = setTimeout(fadeHint, 5000);

  function fadeHint() { controlsHint.classList.add("fade-out"); }

  function resetTimer() {
    controlsHint.classList.remove("fade-out");
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(fadeHint, 3000);
  }

  renderer.domElement.addEventListener("pointerdown", resetTimer);
  renderer.domElement.addEventListener("wheel", resetTimer);
}

export function registerResizeHandler() {
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}
