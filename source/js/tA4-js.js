'use strict';
const searchBox = document.querySelector('.header-bottom-search');
const closeSearchBox = document.querySelector('.out-popup');
const navSticky = document.querySelector('.header-bottom');
const backSticy = document.querySelector('.header-top');

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
        console.log(el);
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


// test slider

const leftbtn = document.querySelector('.leftb');
const rightbtn = document.querySelector('.rightb');
const slides = document.querySelectorAll('.uim');
const btns = document.querySelector('.btns');
const bt = document.querySelectorAll('.c');
let curNumber = 0;
const maxNumber = slides.length;
rightbtn.addEventListener('click', function () {
    if (maxNumber - 1 === curNumber) {
        curNumber = -1;
    }
    curNumber++;
    slides.forEach(function (e, i) {
        e.style.transform = `translateX(${100 * (i - curNumber)}%)`;
    })
})

leftbtn.addEventListener('click', function () {
    if (curNumber === 0) {
        curNumber = 3;
    }
    curNumber--;
    slides.forEach(function (e, i) {
        e.style.transform = `translateX(${100 * (i - curNumber)}%)`;
    })
})

btns.addEventListener('click', function () {
    bt.forEach(function (e, i) {

    })
})
