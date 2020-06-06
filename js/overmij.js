/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const mq2 = window.matchMedia( "(max-width: 79em)" );

if (mq2.matches) {
  document.querySelector('.overmij').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  console.log("test");
}
