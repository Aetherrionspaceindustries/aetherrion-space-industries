// ======================
// Aetherrion Website V4
// script.js
// ======================

// Animated Counter

function animateCounter(id, target) {

```
let count = 0;

const element = document.getElementById(id);

const speed = target / 100;

const updateCounter = () => {

    if (count < target) {

        count += speed;

        element.innerText = Math.floor(count);

        requestAnimationFrame(updateCounter);

    } else {

        element.innerText = target;

    }
};

updateCounter();
```

}

// เริ่มนับเมื่อโหลดเว็บ

window.addEventListener("load", () => {

```
animateCounter("counter1", 5);
animateCounter("counter2", 12);
animateCounter("counter3", 50);
```

});

// ======================
// Scroll Animation
// ======================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

},

{
threshold:0.15
}

);

sections.forEach(section => {

section.style.opacity = "0";

section.style.transform = "translateY(50px)";

section.style.transition = "all 1s ease";

observer.observe(section);

});

// ======================
// Parallax Stars
// ======================

window.addEventListener("scroll", () => {

const stars = document.querySelector(".stars");

if(stars){

let value = window.scrollY;

stars.style.transform =
`translateY(${value * 0.3}px)`;

}

});

// ======================
// Dynamic Navbar
// ======================

window.addEventListener("scroll", () => {

const header =
document.querySelector("header");

if(window.scrollY > 100){

header.style.background =
"rgba(0,0,0,0.95)";

}else{

header.style.background =
"rgba(0,0,0,0.8)";

}

});

// ======================
// Smooth Highlight Menu
// ======================

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("mouseenter", () => {

link.style.color = "#00AEEF";

});

link.addEventListener("mouseleave", () => {

link.style.color = "white";

});

});

// ======================
// Service Worker
// ======================

if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker
.register("./service-worker.js")

.then(() => {

console.log(
"Aetherrion PWA Activated"
);

})

.catch(error => {

console.log(error);

});

});

}

// ======================
// Console Message
// ======================

console.log(
"🚀 Welcome to Aetherrion Space Industries"
);

console.log(
"We Build Tomorrow in Space"
);
