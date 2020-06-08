/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let nemodiv = document.querySelector(".nemodiv");
let nemo = document.querySelector(".nemo");
let onderwater = document.querySelector(".onderwater");
let terug = document.querySelector(".terug");
let aantal = document.querySelector(".aantalnummers");
let koraalnemo = document.querySelector(".koraalnemo");

koraalnemo.addEventListener("click", function() {
  nemo.classList.remove("nemo");
  nemodiv.classList.add("nemoswim");
  nemodiv.classList.add("zindex");
})


nemodiv.addEventListener('click', function() {
  onderwater.classList.remove("hidedetail");
  onderwater.classList.add("showdetail");


  let newScore = aantal.innerHTML;
  let value = parseInt(newScore,10) + 1;
  aantal.innerHTML = value;
});

terug.addEventListener('click', function() {
  onderwater.classList.remove("showdetail");
  onderwater.classList.add("hidedetail");
});
