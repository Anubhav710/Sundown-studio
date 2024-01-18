const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

const a = document.querySelector(".elemContainer");
const b = document.querySelector(".box");
const elem = document.querySelectorAll(".elem");
a.addEventListener("mouseenter", function () {
  b.style.display = "block";
});
a.addEventListener("mouseleave", function () {
  b.style.display = "none";
});

elem.forEach((e) => {
  e.addEventListener("mouseenter", function () {
    const img = e.getAttribute("data");
    b.style.backgroundImage = `url(${img})`;
  });
});

const loader = document.querySelector("#loader");

setTimeout(function () {
  loader.style.top = "-100%";
}, 4200);
