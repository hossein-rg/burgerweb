"use strict";



// fine work



const searchBox = document.querySelector(".header-bottom-search");
const closeSearchBox = document.querySelector(".out-popup");
const navSticky = document.querySelector(".header-bottom");
const backSticy = document.querySelector(".header-top");
const section2 = document.querySelector(".section2");
const sec2img = document.querySelector(".section2-img");



// popup search show and close




function show_pop_search() {
  searchBox.setAttribute("class", "set-popup-js");
  document.querySelector(".header-bottom-orderbox").style.display = "none";
}

function out_all() {
  searchBox.setAttribute("class", "header-bottom-search");
  document.querySelector(".header-bottom-orderbox").style = "";
}

function out_buttom() {
  searchBox.setAttribute("class", "header-bottom-search");
  document.querySelector(".header-bottom-orderbox").style = "";
}




// nav bar sticky




function cb(inter) {
  inter.forEach((el) => {
    if (!el.isIntersecting && (window.scrollY > 80)) {
      navSticky.style.position = "fixed";
      navSticky.style.backgroundColor = "white";
      navSticky.style.width = "90%";
      navSticky.style.boxShadow = "0px 9px 10px 0px rgba(0, 0, 0, 0.237)";
    } else if(el.isIntersecting && (window.scrollY < 80)) {
      navSticky.style = "none";
    }
  });
}
const option = {
  root: null,
  threshold: 0.5,
};
const intersection = new IntersectionObserver(cb, option);

intersection.observe(navSticky);
intersection.observe(backSticy);





const sec2Anime = function (entries) {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      sec2img.style.animation = "animeRotPizza 1s";
      sec2img.style.visibility = "visible";
    }
  });
};

const config = {
  root: null,
  threshold: 0.5,
};

const observer_sec2 = new IntersectionObserver(sec2Anime, config);

observer_sec2.observe(section2);





// section3




const section3 = document.querySelector(".section3");
const allimg = document.querySelectorAll(".section3-img");
const img1section3 = document.querySelector(".section3-img1");
const img3section3 = document.querySelector(".section3-img3");
const img2section3 = document.querySelector(".section3-img2");




// anime1




const sec3Anime1 = function (ele) {
  ele.forEach((el) => {
    if (el.isIntersecting) {
      img1section3.style.animation = "anime-img1-sec3 1s ";
      img1section3.style.visibility = "visible";
    }
  });
};





// anime 2




const sec3Anime2 = function (ele) {
  ele.forEach((el) => {
    if (el.isIntersecting) {
      img2section3.style.animation = "anime-img2-sec3 1s ";
      img2section3.style.visibility = "visible";
    }
  });
};





// anime 3





const sec3Anime3 = function (ele) {
  ele.forEach((el) => {
    if (el.isIntersecting) {
      img3section3.style.animation = "anime-img3-sec3 1s ";
      img3section3.style.visibility = "visible";
    }
  });
};
const objSec3 = {
  root: null,
  threshold: 0.8,
};

const observer_sec3img1 = new IntersectionObserver(sec3Anime1, objSec3);
const observer_sec3img2 = new IntersectionObserver(sec3Anime2, objSec3);
const observer_sec3img3 = new IntersectionObserver(sec3Anime3, objSec3);

observer_sec3img1.observe(img1section3);
observer_sec3img2.observe(img2section3);
observer_sec3img3.observe(img3section3);





//section5




let bankSec5 = {
srcMain : ["image/img/sec5/sec5-f1.svg",
           "image/img/sec5/sec5-f2.svg",
           "image/img/sec5/sec5-f3.svg",
           "image/img/sec5/sec5-f4.svg",
           "image/img/sec5/sec5-f5.svg",
           "image/img/sec5/sec5-f6.svg"],
srcHover:["image/img/sec5/sec5-f1hover.svg",
          "image/img/sec5/sec5-f2hover.svg",
          "image/img/sec5/sec5-f3hover.svg",
          "image/img/sec5/sec5-f4hover.svg",
          "image/img/sec5/sec5-f5hover.svg",
          "image/img/sec5/sec5-f6hover.svg"]
}


const boxlistSec5 = document.querySelector('.section5-listpicture');
const imgSec5 = document.querySelectorAll('.section5-listpicture li img');



boxlistSec5.addEventListener('click',function(e){
  if(e.srcElement.nodeName == 'IMG'){
    let dataWhat = e.target.dataset.picsec5;
    imgSec5[dataWhat-1].src = bankSec5.srcHover[dataWhat-1];
    getSelection_sec6(dataWhat);
    e.target.dataset.picsec5 = '10';
    imgSec5.forEach(function(e){
      if(e.dataset.picsec5 < 7){
      e.src = bankSec5.srcMain[e.dataset.picsec5-1];
      }
    })
    e.target.dataset.picsec5 = dataWhat;
  }
  else return;
})




// section6




const banksection6 = {
  1:["image/img/sec6/burger/b1.png",
  "image/img/sec6/burger/b2.png",
  "image/img/sec6/burger/b3.png",
  "image/img/sec6/burger/b4.png",
  "image/img/sec6/burger/b5.png",
  "image/img/sec6/burger/b6.png",
  "image/img/sec6/burger/b7.png",
  "image/img/sec6/burger/b8.png",
  "image/img/sec6/burger/b9.png",
  "image/img/sec6/burger/b10.png",
  "image/img/sec6/burger/b11.png",
  "image/img/sec6/burger/b12.png"],
  2:["image/img/sec6/pizza/p1.png",
  "image/img/sec6/pizza/p2.png",
  "image/img/sec6/pizza/p3.png",
  "image/img/sec6/pizza/p4.png",
  "image/img/sec6/pizza/p5.png",
  "image/img/sec6/pizza/p6.png",
  "image/img/sec6/pizza/p7.png",
  "image/img/sec6/pizza/p8.png",
  "image/img/sec6/pizza/p9.png",
  "image/img/sec6/pizza/p10.png",
  "image/img/sec6/pizza/p11.png",
  "image/img/sec6/pizza/p12.png",
  "image/img/sec6/pizza/p13.png",
  "image/img/sec6/pizza/p14.png"],
  3:["image/img/sec6/drink/d1.png",
  "image/img/sec6/drink/d2.png",
  "image/img/sec6/drink/d3.png",
  "image/img/sec6/drink/d4.png",
  "image/img/sec6/drink/d5.png",
  "image/img/sec6/drink/d6.png",
  "image/img/sec6/drink/d7.png",
  "image/img/sec6/drink/d8.png",
  "image/img/sec6/drink/d9.png",
  "image/img/sec6/drink/d10.png",
  "image/img/sec6/drink/d11.png",
  "image/img/sec6/drink/d12.png",
  "image/img/sec6/drink/d13.png",
  "image/img/sec6/drink/d14.png"],
}


const boxAllSec6 = document.querySelector('.section6-box');
function getSelection_sec6(what){
  let remove_back = document.querySelector('.section6-img');
  if(remove_back != null)
  remove_back.remove();

  boxAllSec6.insertAdjacentHTML("beforeend","<div class='section6-img'></div><div class='point-sec6'></div>");
  let new_back = document.querySelector('.section6-img');
 for(let i = 0 ; i<banksection6[what].length ; i++){
   new_back.insertAdjacentHTML('beforeend',`<div class=" sec6-id-${i+1}" id="sec6-id-${i+1}"><img src = "${banksection6[what][i]}"></div>`);
  //  section6-box-${what}${i+1} => class for images
 }


//  boxAllSec6.insertAdjacentHTML('beforeend',"<div class='point-sec6'></div>");
 let remove_dot = document.querySelector('.point-sec6');
 remove_dot.remove();
 let new_dot = document.querySelector('.point-sec6');
 for(let j = 0;j<banksection6[what].length;j++){
  new_dot.insertAdjacentHTML('beforeend',`<div class="sec6-class-remove-dot${j}"><a class="sec6-id-${j+1}" href="#sec6-id-${j+1}"></a></div>`)
 }



   // click dots menu



   let dotsHover = document.querySelector('.point-sec6');
   let imgHover = document.querySelector('.section6-img');
   dotsHover.addEventListener('click',function(e){
    event.preventDefault();
    let dotinlive = e.path[1];
    for(let i = 0 ; i<dotsHover.children.length;i++){
      dotsHover.children[i].setAttribute('id','backwhite');
      imgHover.children[i].setAttribute('class','imgwhite-nothover');
    }
    if(e.target.className != "point-sec6"){
    dotinlive.setAttribute('id',"dthoverscript");
    document.querySelector(`#${e.target.className}`).setAttribute('class',`dtboxshimg`);
    // document.querySelector(`#${e.target.className}`).scrollIntoView({behavior:'smooth'});
    // smooth scroll
    let slice_number=e.target.className;
    let slice_final = Number(slice_number.slice(8)-1);
    let scrl_smooth =document.querySelectorAll('.section6-img > *');
    scrl_smooth[slice_final].scrollIntoView({
      behavior:'smooth',inline:'center'
    });
    }
   })
}


