
// renew02.js
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelectorAll("ul.marquee-content");

// 모바일용 100vh 재설정 상단바때문에 화면밀림
const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
};
window.addEventListener('resize', setVh);
setVh();


// console.log(marqueeContent[0]);

// 처음시작시 
let width = document.documentElement.clientWidth;
let height = (document.documentElement.clientHeight / 10);


console.log("window.innerWidth 너비 " + width);
console.log("window.innerHeight 높이 " + height * 10);

console.log("document.documentElement.clientHeight " + document.documentElement.clientHeight);
console.log("document.documentElement.clientWidth " + document.documentElement.clientWidth);


// if (width > 1024) {
//     new Pageable("#container", {
//         animation: 1000,

//         freeScroll: true,

//         events: {
//             wheel: true, // enable / disable mousewheel scrolling
//             mouse: false, // enable / disable mouse drag scrolling
//             touch: true, // enable / disable touch / swipe scrolling
//             keydown: false, // enable / disable keyboard navigation
//         },
//     });
// }

new Pageable("#container", {
    animation: 1000,

    freeScroll: true,

    events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: false, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: false, // enable / disable keyboard navigation
    },
});


root.style.setProperty("--marquee-height", height + "rem");

// 창크기가 변할시
window.onresize = function () {
    width = document.documentElement.clientWidth;
    height = (document.documentElement.clientHeight / 10);

    console.log(height);
    root.style.setProperty("--marquee-height", height + "rem");
}

root.style.setProperty("--marquee-elements", marqueeContent[0].children.length);

function start() {

}

for (let j = 0; j < marqueeContent.length; j++) {

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent[j].appendChild(marqueeContent[j].children[i].cloneNode(true));
    }
}

// renew03.js 
const slider = document.getElementsByName("slider");
console.log(slider[0]);
console.log(slider[1]);
console.log(slider[2]);
console.log(slider[3]);
console.log(slider[4]);

let index = 2;

document.querySelector(".leftbtn").onclick = function () {

    console.log("index false" + index);
    slider[index].checked = false;
    index -= 1;
    slider[index].checked = true;
    console.log("index true" + index);
    if (index < 0) {
        index = 1
    }
};

document.querySelector(".rightbtn").onclick = function () {
    index += 1;
    console.log("index " + index);
};
// const slider = document.getElementsByName("slider");
// for (let radio of slider)
// {
//     if (radio.checked) {
//         console.log(radio.index);
//     }
// }

// renew05.js
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

        gltf.scene.rotation.y -= 0.02;

        renderer.render(scene, camera);
    }
    function animateObit() {
        obitAni = requestAnimationFrame(animateObit)
        controls.update();
        renderer.render(scene, camera);
    }

    animateRoll();
});

// renew06.js

const modalTriggerButtons = document.querySelectorAll("[data-modal-target");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {

    elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));

});

modalCloseButtons.forEach(elem => {

    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));

});

modals.forEach(elem => {

    elem.addEventListener("click", event => {
        // 1번방법
        // if(event.target.classList.contains("modal")){
        //     toggleModal();
        // }

        // 2번방법
        if (event.currentTarget == event.target) toggleModal(event.currentTarget.id);
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && document.querySelector(".modal.modal-show")) {
        toggleModal(document.querySelector(".modal.modal-show").id);
    }
});

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);

    if (window.getComputedStyle(modal).display === "flex") {
        modal.classList.add("modal-hide");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("modal-show", "modal-hide");
            document.body.style.overflow = "initial";

        }, 500);
    }
    else {
        modal.style.display = "flex";
        modal.classList.add("modal-show");
        document.body.style.overflow = "hidden";
    }
}