const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelectorAll("ul.marquee-content");

// console.log(marqueeContent[0]);

root.style.setProperty("--marquee-elements", marqueeContent[0].children.length);

for(let j =0; j < marqueeContent.length; j++){

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent[j].appendChild(marqueeContent[j].children[i].cloneNode(true));
    }
}