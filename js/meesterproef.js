/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let nemodiv = document.querySelector(".nemodiv");
let nemo = document.querySelector(".nemo");
let carousel = document.querySelector(".detail");
let terug = document.querySelector(".terug");
let aantal = document.querySelector(".aantalnummers");
let wijzers = document.querySelector(".wijzers");




nemo.addEventListener('click', function() {
  wijzers.classList.remove("hidden");
  carousel.classList.remove("hidedetail");
  carousel.classList.add("showdetail");
});

terug.addEventListener('click', function() {
  wijzers.classList.add("hidden");
  carousel.classList.remove("showdetail");
  carousel.classList.add("hidedetail");
});















var currentItem = 1;
var carouselDiv = document.querySelector(".detail");

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var body = document.querySelector("body");
var article1 = document.querySelector(".vis1");
var article2 = document.querySelector(".vis2");
var article3 = document.querySelector(".vis3");
var article4 = document.querySelector(".vis4");
var article5 = document.querySelector(".vis5");
var article6 = document.querySelector(".vis6");
var article7 = document.querySelector(".vis7");
var article8 = document.querySelector(".vis8");

// var dot1 = document.querySelector(".dot:nth-of-type(1)");
// var dot2 = document.querySelector(".dot:nth-of-type(2)");
// var dot3 = document.querySelector(".dot:nth-of-type(3)");

body.onkeydown = getKeyAndMove;
nextButton.onclick = moveRight;
prevButton.onclick = moveLeft;

function getKeyAndMove(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow kew
				moveLeft();
				break;
			case 39: //right arrow key
				moveRight();
				break;
		}
	}

function moveRight() {
    currentItem += 1;
    if (currentItem > 8) {
      currentItem = 1;
    }
    move();
    movetoRight()
  }
  function moveLeft() {
    currentItem -= 1;
    if (currentItem < 1) {
      currentItem = 8;
    }
    prevButton.classList.remove("buttonActive");
    move();
    movetoLeft()
  }

  function move(){
    console.log("currentItem", currentItem);
    carouselDiv.classList.remove("position1a");
    carouselDiv.classList.remove("position2a");
    carouselDiv.classList.remove("position3a");
    carouselDiv.classList.remove("position4a");
    carouselDiv.classList.remove("position5a");
    carouselDiv.classList.remove("position6a");
    carouselDiv.classList.remove("position7a");
    carouselDiv.classList.remove("position8a");
    carouselDiv.classList.remove("position1b");
    carouselDiv.classList.remove("position2b");
    carouselDiv.classList.remove("position3b");
    carouselDiv.classList.remove("position4b");
    carouselDiv.classList.remove("position5b");
    carouselDiv.classList.remove("position6b");
    carouselDiv.classList.remove("position7b");
    carouselDiv.classList.remove("position8b");
    carouselDiv.classList.remove("pos1");
    carouselDiv.classList.remove("pos2");
    carouselDiv.classList.remove("pos3");
    carouselDiv.classList.remove("pos4");
    carouselDiv.classList.remove("pos5");
    carouselDiv.classList.remove("pos6");
    carouselDiv.classList.remove("pos7");
    carouselDiv.classList.remove("pos8");
    article1.classList.remove("fade");
    article2.classList.remove("fade");
    article3.classList.remove("fade");
    article4.classList.remove("fade");
    article5.classList.remove("fade");
    article6.classList.remove("fade");
    article7.classList.remove("fade");
    article8.classList.remove("fade");
    // article1.classList.remove("fade2");
    // article2.classList.remove("fade2");
    // article3.classList.remove("fade2");

    // dot1.classList.remove("current");
    // dot2.classList.remove("current");
    // dot3.classList.remove("current");
    prevButton.classList.remove("buttonActive");

    if (currentItem == 1) {
        carouselDiv.classList.add("pos1");
        article1.classList.add("fade2");
        // dot1.classList.add("current")
    } else if (currentItem == 2) {
        carouselDiv.classList.add("pos2");
        article2.classList.add("fade2");
        // dot2.classList.add("current")
    } else if (currentItem == 3) {
        carouselDiv.classList.add("pos3");
        article3.classList.add("fade2");
        // dot3.classList.add("current")
    } else if (currentItem == 4) {
        carouselDiv.classList.add("pos4");
        article2.classList.add("fade2");
        // dot2.classList.add("current")
    } else if (currentItem == 5) {
        carouselDiv.classList.add("pos5");
        article3.classList.add("fade2");
        // dot3.classList.add("current")
    } else if (currentItem == 6) {
        carouselDiv.classList.add("pos6");
        article3.classList.add("fade2");
        // dot3.classList.add("current")
    } else if (currentItem == 7) {
        carouselDiv.classList.add("pos7");
        article2.classList.add("fade2");
        // dot2.classList.add("current")
    } else if (currentItem == 8) {
        carouselDiv.classList.add("pos8");
        article3.classList.add("fade2");
        // dot3.classList.add("current")
    }
  };


function movetoRight(){

  if (currentItem == 1) {
      carouselDiv.classList.add("position1a");
      article1.classList.add("fade");
  } else if (currentItem == 2) {
      carouselDiv.classList.add("position2a");
      article2.classList.add("fade");
  } else if (currentItem == 3) {
      carouselDiv.classList.add("position3a");
      article3.classList.add("fade");
  } else if (currentItem == 4) {
      carouselDiv.classList.add("position4a");
      article4.classList.add("fade");
  } else if (currentItem == 5) {
      carouselDiv.classList.add("position5a");
      article5.classList.add("fade");
  } else if (currentItem == 6) {
      carouselDiv.classList.add("position6a");
      article6.classList.add("fade");
  } else if (currentItem == 7) {
      carouselDiv.classList.add("position7a");
      article7.classList.add("fade");
  } else if (currentItem == 8) {
      carouselDiv.classList.add("position8a");
      article8.classList.add("fade");
  }
}

function movetoLeft(){

  if (currentItem == 1) {
      carouselDiv.classList.add("position1b");
      article1.classList.add("fade");
  } else if (currentItem == 2) {
      carouselDiv.classList.add("position2b");
      article2.classList.add("fade");
  } else if (currentItem == 3) {
      carouselDiv.classList.add("position3b");
      article3.classList.add("fade");
  } else if (currentItem == 4) {
      carouselDiv.classList.add("position4b");
      article4.classList.add("fade");
  } else if (currentItem == 5) {
      carouselDiv.classList.add("position5b");
      article5.classList.add("fade");
  } else if (currentItem == 6) {
      carouselDiv.classList.add("position6b");
      article6.classList.add("fade");
  } else if (currentItem == 7) {
      carouselDiv.classList.add("position7b");
      article7.classList.add("fade");
  } else if (currentItem == 8) {
      carouselDiv.classList.add("position8b");
      article8.classList.add("fade");
  }
}
