<template>
  <div id="model"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
let sensor1;
let sensor2;
let sensor3;

export default {
  mounted: async function () {
    if (process.browser) {
      let container;
      let camera;
      let controls;
      let renderer;
      let scene;
      let mesh;

      async function init() {
        container = document.getElementById("model");

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x051026); //black background
        // scene.background = new THREE.Color(0x000000); //black background

        createCamera();
        createControls();
        createLights();
        createRenderer();
        createSensorObject();
        createObject();

        renderer.setAnimationLoop(() => {
          render();
        });

        // document.body.appendChild( VRButton.createButton( renderer ) );
      }

      function createCamera() {
        camera = new THREE.PerspectiveCamera(
          70, //FOV
          container.clientWidth / container.clientHeight, // aspect ratio
          1, // near clipping plane
          1000 //far clipping plane
        );
        camera.position.set(20, 0, 0);
        // camera.position.set( 20, 5, 0 );
      }

      function createControls() {
        controls = new OrbitControls(camera, container);
      }

      function createLights() {
        const rightLight = new THREE.DirectionalLight(0xffffff, 3);
        const leftLight = new THREE.DirectionalLight(0xffffff, 3);
        const frontLight = new THREE.DirectionalLight(0xffffff, 3);
        const backLight = new THREE.DirectionalLight(0xffffff, 3);
        const topLight = new THREE.DirectionalLight(0xffffff, 3);
        const bottomLight = new THREE.DirectionalLight(0xffffff, 3);
        rightLight.position.set(0, 0, -100);
        leftLight.position.set(0, 0, 100);
        frontLight.position.set(100, 0, 0);
        backLight.position.set(-100, 0, 0);
        topLight.position.set(0, 100, 0);
        bottomLight.position.set(0, -100, 0);
        scene.add(
          rightLight,
          leftLight,
          frontLight,
          backLight,
          topLight,
          bottomLight
        );
      }

      function createRenderer() {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaFactor = 2.2;
        renderer.gammaOutput = true;
        renderer.physicallyCorrectLights = true;
        container.appendChild(renderer.domElement);
      }

      async function createObject() {
        const loader = new GLTFLoader();
        // loader.setMeshoptDecoder(MeshoptDecoder);
        // loader.load("model.glb", (data) => {
        loader.load("model5.gltf", (data) => {
          const gltf = data;
          // console.log(gltf);
          const obj = gltf.scene;
          for (let i = 0; i < obj.children.length; i++) {
            const mesh = obj.children[i];
          }
          obj.position.set(0, 5, 0); // set position of object
          obj.rotation.set(0, 40, 0); // set rotation of object y=95 y=40
          // obj.scale.set( 0.15, 0.15, 0.15) // set scale
          const group = new THREE.Group();
          group.add(obj);
          group.add(sensor1);
          group.add(sensor2);
          group.add(sensor3);
          group.scale.set(0.15, 0.15, 0.15);
          group.rotation.set(0, 0, -0.2);
          group.position.set(1, 3, 0);
          scene.add(group); // add object in scene
        });

        // const axis = new THREE.AxesHelper(1000);
        // scene.add(axis)
      }

      function createSensorObject() {
        const geometry1 = new THREE.TorusGeometry(9.8, 1.2, 30, 100, 6.3);
        const material1 = new THREE.MeshBasicMaterial({
          color: 0xff737c,
          opacity: 0,
          // opacity: 1,
          transparent: true,
        });

        sensor1 = new THREE.Mesh(geometry1, material1);
        sensor1.position.set(-19, 1, -36);
        // sensor1.position.set( -17, 1, -38 );
        sensor1.rotation.x = -0.4;
        // sensor1.rotation.x = -0.5;
        sensor1.rotation.y = 0.5;
        // sensor1.rotation.y = 0.5;
        sensor1.rotation.z = 0;
        // scene.add( sensor1 );

        const geometry2 = new THREE.TorusGeometry(5.5, 2.5, 30, 100, 6.3);
        const material2 = new THREE.MeshBasicMaterial({
          color: 0x3076f0,
          opacity: 0,
          // opacity: 1,
          transparent: true,
        });

        sensor2 = new THREE.Mesh(geometry2, material2);
        sensor2.position.set(-19, 1, -36);
        sensor2.rotation.x = -0.4;
        sensor2.rotation.y = 0.5;
        sensor2.rotation.z = 0;

        const geometry3 = new THREE.TorusGeometry(1, 1.2, 30, 100, 6.3);
        const material3 = new THREE.MeshBasicMaterial({
          color: 0x30f043,
          opacity: 0,
          // opacity: 1,
          transparent: true,
        });

        sensor3 = new THREE.Mesh(geometry3, material3);
        sensor3.position.set(-19, 1, -36);
        sensor3.rotation.x = -0.4;
        sensor3.rotation.y = 0.5;
        sensor3.rotation.z = 0;
      }

      function render() {
        renderer.render(scene, camera);
      }

      init();
    }
  },
  data() {
    return {
      sensorColor: 0,
    };
  },
};
</script>

<style>
#model {
  margin: 0;
  height: 100%;
}
canvas {
  border-radius: 8px;
  width: 100% !important;
}
</style>
