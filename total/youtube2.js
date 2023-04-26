const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// ----------------------------------------------
//상태확인을 위한 인덱스를 하나 설정

//예를들어 index=0과 1로 이루어짐
//0은 속성이 없는 상태
//1은 속성이 있는 상태라고 하면

//1.타이머 설정


//2.타이머가 반복될때마다 css에 animate 속성지움
//이때 타이머가 시작시 index=0일시 index=1로 바꿔줌
//


