import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { scene } from "./scene.js";
import { controls } from "./controls.js";


const DRACO_DECODER_PATH =
  "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/libs/draco/";

/**
 * Loads any GLTF model from the given path.
 * @param {string} modelPath - relative path to the scene.gltf file
 * @param {HTMLElement} loaderBarEl - progress bar element
 * @returns {Promise<THREE.Group>} the loaded model
 */
export function loadModel(modelPath, loaderBarEl) {
  return new Promise((resolve, reject) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(DRACO_DECODER_PATH);

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(
      modelPath,

      (gltf) => {
        const model = gltf.scene;

        const boundingBox  = new THREE.Box3().setFromObject(model);
        const center       = boundingBox.getCenter(new THREE.Vector3());
        const size         = boundingBox.getSize(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z);
        const uniformScale = 4.5 / maxDimension;

        model.scale.setScalar(uniformScale);
        model.position.sub(center.multiplyScalar(uniformScale));

        const adjustedBox = new THREE.Box3().setFromObject(model);
        model.position.y -= adjustedBox.min.y;

        model.traverse((node) => {
          if (!node.isMesh) return;

          node.castShadow    = true;
          node.receiveShadow = true;

          const mat = node.material;
          if (!mat) return;
          if (mat.map)         mat.map.colorSpace        = THREE.SRGBColorSpace;
          if (mat.emissiveMap) mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
        });

        scene.add(model);

        const finalBox  = new THREE.Box3().setFromObject(model);
        const carHeight = finalBox.max.y - finalBox.min.y;
        controls.target.set(0, carHeight * 0.4, 0);
        controls.update();

        resolve(model);
      },

      (progressEvent) => {
        if (progressEvent.lengthComputable && loaderBarEl) {
          const percent = (progressEvent.loaded / progressEvent.total) * 100;
          loaderBarEl.style.width = `${percent.toFixed(0)}%`;
        }
      },

      (error) => {
        console.error("Erro ao carregar o modelo GLTF:", error);
        if (loaderBarEl) {
          loaderBarEl.style.background = "#c0392b";
          loaderBarEl.style.width      = "100%";
        }
        reject(error);
      }
    );
  });
}
