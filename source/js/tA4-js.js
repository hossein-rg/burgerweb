'use strict';
// fine work
const searchBox = document.querySelector('.header-bottom-search');
const closeSearchBox = document.querySelector('.out-popup');
const navSticky = document.querySelector('.header-bottom');
const backSticy = document.querySelector('.header-top');
const section2 = document.querySelector('.section2');
const sec2img = document.querySelector('.section2-img');
// popup search show and close

function show_pop_search() {
    searchBox.setAttribute('class', 'set-popup-js');
}

function out_all() {
    searchBox.setAttribute('class', 'header-bottom-search');
}

function out_buttom() {
    searchBox.setAttribute('class', 'header-bottom-search');
}

// nav bar sticky

function cb(inter) {
    inter.forEach(el => {
        if (!el.isIntersecting) {
            navSticky.style.position = 'fixed';
            navSticky.style.backgroundColor = "white";
            navSticky.style.width = "90%";
            navSticky.style.boxShadow = "0px 9px 10px 0px rgba(0, 0, 0, 0.237)";
        }
        else {
            navSticky.style = "none";
        }
    });
}
const option = {
    root: null,
    threshold: 0.5,
}
const intersection = new IntersectionObserver(cb, option);

intersection.observe(navSticky);
intersection.observe(backSticy);

// scroll to top page before unload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


const sec2Anime= function (entries){
    entries.forEach(el =>{
        if(el.isIntersecting){
            sec2img.style.animation = "animeRotPizza 1s";
            sec2img.style.visibility= "visible";
        };
    })
}

const config = {
    root : null,
    threshold : 0.5,
}

const observer_sec2 = new IntersectionObserver(sec2Anime,config);

observer_sec2.observe(section2);
