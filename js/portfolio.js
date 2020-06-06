/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let hover0 = document.querySelector(".hoverimg0");
let hover1 = document.querySelector(".hoverimg1");
let hover2 = document.querySelector(".hoverimg2");
let hover3 = document.querySelector(".hoverimg3");
let hover4 = document.querySelector(".hoverimg4");
let hover5 = document.querySelector(".hoverimg5");
let hover6 = document.querySelector(".hoverimg6");
let hover7 = document.querySelector(".hoverimg7");
let hover8 = document.querySelector(".hoverimg8");

let img0 = document.querySelector(".img0hover");
let img0b = document.querySelector(".img0hoverb");
let img1 = document.querySelector(".img1hover");
let img1b = document.querySelector(".img1hoverb");
let img2 = document.querySelector(".img2hover");
let img2b = document.querySelector(".img2hoverb");
let img3 = document.querySelector(".img3hover");
let img3b = document.querySelector(".img3hoverb");
let img4 = document.querySelector(".img4hover");
let img4b = document.querySelector(".img4hoverb");
let img5 = document.querySelector(".img5hover");
let img5b = document.querySelector(".img5hoverb");
let img6 = document.querySelector(".img6hover");
let img6b = document.querySelector(".img6hoverb");
let img7 = document.querySelector(".img7hover");
let img7b = document.querySelector(".img7hoverb");
let img8 = document.querySelector(".img8hover");
let img8b = document.querySelector(".img8hoverb");

let button = document.querySelector(".button2");
let kimgarrard = document.querySelector(".kimgarrard");

button.addEventListener('mouseover', function() {
  kimgarrard.classList.remove("hide");
});

button.addEventListener('mouseout', function() {
  kimgarrard.classList.add("hide");
});


hover0.addEventListener('mouseover', function() {
  img0.classList.add("hide");
  img0b.classList.remove("hide");
});

hover0.addEventListener('mouseout', function() {
  img0.classList.remove("hide");
  img0b.classList.add("hide");
});


hover1.addEventListener('mouseover', function() {
  img1.classList.add("hide");
  img1b.classList.remove("hide");
});

hover1.addEventListener('mouseout', function() {
  img1.classList.remove("hide");
  img1b.classList.add("hide");
});


hover2.addEventListener('mouseover', function() {
  img2.classList.add("hide");
  img2b.classList.remove("hide");
});

hover2.addEventListener('mouseout', function() {
  img2.classList.remove("hide");
  img2b.classList.add("hide");
});


hover3.addEventListener('mouseover', function() {
  img3.classList.add("hide");
  img3b.classList.remove("hide");
});

hover3.addEventListener('mouseout', function() {
  img3.classList.remove("hide");
  img3b.classList.add("hide");
});


hover4.addEventListener('mouseover', function() {
  img4.classList.add("hide");
  img4b.classList.remove("hide");
});

hover4.addEventListener('mouseout', function() {
  img4.classList.remove("hide");
  img4b.classList.add("hide");
});


hover5.addEventListener('mouseover', function() {
  img5.classList.add("hide");
  img5b.classList.remove("hide");
});

hover5.addEventListener('mouseout', function() {
  img5.classList.remove("hide");
  img5b.classList.add("hide");
});


hover6.addEventListener('mouseover', function() {
  img6.classList.add("hide");
  img6b.classList.remove("hide");
});

hover6.addEventListener('mouseout', function() {
  img6.classList.remove("hide");
  img6b.classList.add("hide");
});


hover7.addEventListener('mouseover', function() {
  img7.classList.add("hide");
  img7b.classList.remove("hide");
});

hover7.addEventListener('mouseout', function() {
  img7.classList.remove("hide");
  img7b.classList.add("hide");
});


hover8.addEventListener('mouseover', function() {
  img8.classList.add("hide");
  img8b.classList.remove("hide");
});

hover8.addEventListener('mouseout', function() {
  img8.classList.remove("hide");
  img8b.classList.add("hide");
});
