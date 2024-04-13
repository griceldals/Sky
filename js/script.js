CustomEase.create("cubic", "0.83, 0, 0.17, 1");
let isAnimating = false;

function splitTextIntoSpans(selector){
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
        .split("")
        .map(function (char){
            return `<span>${char = " " ? "&nbsp;&nbsp;" : char}</span>`;

        })
        .join("");
     element.innerHTML = splitText;
    });
}

function initializeCards(){
    let cards = Array.from(document.querySelectorAll(".card"));
    gsap.to(cards, {
        y: (i) => -15 + 15 * i + "%",
        z: (i) => 15 * i,
        duration: 1,
        ease: "cubic",
        stagger: -0.1,
    });
}

document.addEventListener("DOMContentLoaded", function (){
    splitTextIntoSpans(".copy h1");
    initializeCards();

    gsap.set("h1 span", {y: -200});
    gsap.set(".slider .card:last-child h1 span", {y: 0});
});