import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'OrbitControls';
import * as THREE from 'three';

//장면을 만들고
let scene = new THREE.Scene();
//브라우저에 렌더링
let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 0, 5);

scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);

//OrbitControls 추가 카메라 설정뒤에 해줘야 한다고 한다.
let controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 2;
controls.maxDistance = 6;
controls.update();

let loader = new GLTFLoader();
loader.load('shiba/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);

    //애니메이션 레퍼
    var rollAni;
    var obitAni;

    let hover = document.getElementById("canvas");
    hover.addEventListener("mouseover", function (event) {
        cancelAnimationFrame(rollAni);
        animateObit();
    });

    hover.addEventListener("mouseout", function (event) {
        cancelAnimationFrame(obitAni);
        animateRoll();
    });

    function animateRoll() {
        rollAni = requestAnimationFrame(animateRoll)
        gltf.scene.rotation.y -= 0.05;
        renderer.render(scene, camera);
    }
    function animateObit() {
        obitAni = requestAnimationFrame(animateObit)
        controls.update();
        renderer.render(scene, camera);
    }

    animateRoll();
});