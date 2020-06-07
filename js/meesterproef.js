/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let nemo = document.querySelector(".nemo");
let onderwater = document.querySelector(".onderwater");
let terug = document.querySelector(".terug");

nemo.addEventListener('click', function() {
  onderwater.classList.remove("hidedetail");
  onderwater.classList.add("showdetail");
});

terug.addEventListener('click', function() {
  onderwater.classList.remove("showdetail");
  onderwater.classList.add("hidedetail");
});



function myFunction() {
    document.getElementById("welcome").textContent = "Welcome back!";
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
