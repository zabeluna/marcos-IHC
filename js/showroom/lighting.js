import * as THREE from "three";
import { scene } from "./scene.js";

const ambientLight = new THREE.AmbientLight(0x9aaabb, 1.2);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xfff8e8, 3.5);
keyLight.position.set(8, 12, 6);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.near   = 0.5;
keyLight.shadow.camera.far    = 60;
keyLight.shadow.camera.left   = -10;
keyLight.shadow.camera.right  =  10;
keyLight.shadow.camera.top    =  10;
keyLight.shadow.camera.bottom = -10;
keyLight.shadow.bias = -0.001;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xaad4ff, 1.8);
fillLight.position.set(-6, 5, -8);
scene.add(fillLight);

const bounceLight = new THREE.DirectionalLight(0xffe0b0, 0.8);
bounceLight.position.set(0, -4, 0);
scene.add(bounceLight);

const spotLight = new THREE.SpotLight(
  0xc9a84c,
  5.0,
  30,
  Math.PI / 6,
  0.4,
  1.5
);
spotLight.position.set(0, 14, 4);
spotLight.target.position.set(0, 0, 0);
spotLight.castShadow = true;
spotLight.shadow.mapSize.set(1024, 1024);
scene.add(spotLight);
scene.add(spotLight.target);
