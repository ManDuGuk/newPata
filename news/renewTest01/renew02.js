const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelectorAll("ul.marquee-content");

// console.log(marqueeContent[0]);

// 처음시작시 
let width = window.innerWidth;
let height = (window.innerHeight/10);

console.log(height);

root.style.setProperty("--marquee-height",height+"rem");

// 창크기가 변할시
window.onresize = function(){
    width = window.innerWidth;
    height = (window.innerHeight/10);

    console.log(height);
    root.style.setProperty("--marquee-height",height+"rem");
}

root.style.setProperty("--marquee-elements", marqueeContent[0].children.length);

function start(){
    
}

for(let j =0; j < marqueeContent.length; j++){

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent[j].appendChild(marqueeContent[j].children[i].cloneNode(true));
    }
}

