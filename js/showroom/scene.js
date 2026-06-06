import * as THREE from "three";

export const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace    = THREE.SRGBColorSpace;
renderer.toneMapping         = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.6;
renderer.shadowMap.enabled   = true;
renderer.shadowMap.type      = THREE.PCFSoftShadowMap;

document.getElementById("showroom-canvas-container").appendChild(renderer.domElement);

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080808);
scene.fog        = new THREE.FogExp2(0x080808, 0.035);

export const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.set(6, 2.5, 8);
