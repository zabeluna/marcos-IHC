import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera, renderer } from "./scene.js";

export const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance   = 3;
controls.maxDistance   = 20;
controls.maxPolarAngle = Math.PI / 2 + 0.1;
controls.target.set(0, 0.6, 0);
controls.update();
