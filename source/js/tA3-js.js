"use strict";
import { bankSec5 } from "./bankSection5.js";
import { banksection6, bankSection6_detail, bankSection6_superdetail, bankordersec6, bankpricesec6 } from "./bankSection6.js";


// fine work



const searchBox = document.querySelector(".header-bottom-search");
const closeSearchBox = document.querySelector(".out-popup");
const navSticky = document.querySelector(".header-bottom");
const backSticy = document.querySelector(".header-top");
const section2 = document.querySelector(".section2");
const sec2img = document.querySelector(".section2-img");



// popup search show and close

function showPopSearch() {
  console.log('ss')
  searchBox.setAttribute("class", "set-popup-js");
  document.querySelector(".header-bottom-orderbox").style.display = "none";
}
document.querySelector('.search-box').addEventListener('click', showPopSearch);



function out_all() {
  searchBox.setAttribute("class", "header-bottom-search");
  document.querySelector(".header-bottom-orderbox").style = "";
}
document.querySelector('.out-anywhere').addEventListener('click', out_all);



function out_buttom() {
  searchBox.setAttribute("class", "header-bottom-search");
  document.querySelector(".header-bottom-orderbox").style = "";
}
document.querySelector('.out-popup').addEventListener('click', out_buttom);




// nav bar sticky


function cb(inter) {
  inter.forEach((el) => {
    if (!el.isIntersecting && (window.scrollY > 80)) {
      navSticky.style.position = "fixed";
      navSticky.style.backgroundColor = "white";
      navSticky.style.width = "90%";
      navSticky.style.boxShadow = "0px 9px 10px 0px rgba(0, 0, 0, 0.237)";
    } else if (el.isIntersecting && (window.scrollY < 80)) {
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
const boxlistSec5 = document.querySelector('.section5-listpicture');
const imgSec5 = document.querySelectorAll('.section5-listpicture li img');
const ScrollSec5 = document.querySelectorAll('.section5-listpicture li');

boxlistSec5.addEventListener('click', function (e) {
  ScrollSec5[e.target.dataset.picsec5 - 1].scrollIntoView({
    behavior: 'smooth', block: 'start'
  })

  if (e.srcElement.nodeName == 'IMG') {
    let dataWhat = e.target.dataset.picsec5;
    imgSec5[dataWhat - 1].src = bankSec5.srcHover[dataWhat - 1];
    getSelection_sec6(dataWhat);
    e.target.dataset.picsec5 = '10';
    imgSec5.forEach(function (e) {
      if (e.dataset.picsec5 < 7) {
        e.src = bankSec5.srcMain[e.dataset.picsec5 - 1];
      }
    })
    e.target.dataset.picsec5 = dataWhat;
  }
  else return;
})




// section6



const boxAllSec6 = document.querySelector('.section6-box');
function getSelection_sec6(what) {
  let remove_back = document.querySelector('.section6-img');
  if (remove_back != null)
    remove_back.remove();

  boxAllSec6.insertAdjacentHTML("beforeend", "<div class='section6-img dragscroll'></div><div class='point-sec6'></div>");
  let new_back = document.querySelector('.section6-img');
  for (let i = 0; i < banksection6[what].length; i++) {
    new_back.insertAdjacentHTML('beforeend', `<div class=" sec6-id-${i + 1}" id="sec6-id-${i + 1}"><img data-srcimg =${i} src = "${banksection6[what][i]}"></div>`);
  }



  let remove_dot = document.querySelector('.point-sec6');
  remove_dot.remove();
  let new_dot = document.querySelector('.point-sec6');
  for (let j = 0; j < banksection6[what].length; j++) {
    new_dot.insertAdjacentHTML('beforeend', `<div class="sec6-class-remove-dot${j}"><a class="sec6-id-${j + 1}" href="#sec6-id-${j + 1}"></a></div>`)
  }



  // click dots menu



  let dotsHover = document.querySelector('.point-sec6');
  let imgHover = document.querySelector('.section6-img');
  dotsHover.addEventListener('click', function (e) {
    event.preventDefault();
    let dotinlive = e.path[1];
    if (e.target.className != "point-sec6") {
      // set class for every dot
      for (let i = 0; i < dotsHover.children.length; i++) {
        dotsHover.children[i].setAttribute('id', 'backwhite');
        imgHover.children[i].setAttribute('class', 'imgwhite-nothover');
      }
      // special dot
      dotinlive.setAttribute('id', "dthoverscript");
      document.querySelector(`#${e.target.className}`).setAttribute('class', `dtboxshimg`);
      // smooth scroll
      let slice_number = e.target.className;
      let slice_final = Number(slice_number.slice(8) - 1);
      console.log(slice_final);
      let scrl_smooth = document.querySelectorAll('.section6-img > *');
      scrl_smooth[slice_final].scrollIntoView({
        behavior: 'smooth', inline: 'center'
      });
    }
  })
}


// bank detail section6

// add order element and detail order
boxlistSec5.addEventListener('click', function (element) {
  if (element.srcElement.nodeName != 'IMG') return;
  const boxSection6_detail = document.querySelector('.section6-img');
  for (let i = 1; i <= boxSection6_detail.children.length; i++) {
    const Section6_detail = document.querySelector(`.sec6-id-${i}`);
    let howElement = element.target.dataset.picsec5;
    Section6_detail.insertAdjacentHTML('beforeend', `<div class="section6-all-detail"><p>${bankSection6_detail[howElement][i - 1]}<b>${bankpricesec6[howElement][i - 1]}</b></p><p class="superDetail_section6">${bankSection6_superdetail[howElement][i - 1]}</p>
    <div class="order-section6 order-section6-${howElement}${i}"
    data-sec6="${howElement}${i}">
    <a href="javascript:void(0)" class="order-section6-add" >+</a>
    <span class="order-section6-number">0</span>
    <a href="javascript:void(0)"  class="order-section6-remove">-</a>
    </div></div>`);
  }
})
// set order by user
// return array value
let copyBankordersec6;
// let nowNumber = 0;
boxlistSec5.addEventListener('click', function (e) {
  if (e.srcElement.nodeName != 'IMG') return;
  // dont remove order list user 
  for (const key in bankordersec6) {
    for (let i = 0; i < bankordersec6[key].length; i++) {
      if (bankordersec6[key][i] != 0) {
        let OrderSet = document.querySelector(`.order-section6-${key}${i + 1}`);
        if (OrderSet != null) {
          OrderSet.children[1].style.display = 'block';
          OrderSet.children[1].textContent = bankordersec6[key][i];
          OrderSet.children[2].style.display = 'block';
        }
      }
    }
  }
  // click + btn
  let numberShop = document.querySelector('.number-order');
  let selectData = document.querySelector('.section6-img');
  let animeShakeOrder = document.querySelector('.header-bottom-orderbox');
  selectData.addEventListener('click', function (e) {
    if (e.path[1].classList[0] != "order-section6") return;
    let childrenOrder = e.path[1].children;
    let addbtn = childrenOrder[0];
    let numberbtn = childrenOrder[1];
    let removebtn = childrenOrder[2];
    let selectDataSet = 0;

    // slice number data
    selectDataSet = e.path[1].dataset.sec6;
    let howsec6 = Number(selectDataSet.slice(1));
    let howsec5 = Number(selectDataSet.slice(0, 1));
    // click btn + -
    if (e.target.className == "order-section6-add") {
      // animeShakeOrder.removeAttribute('id');
      bankordersec6[howsec5][howsec6 - 1] += 1;
      numberbtn.textContent = bankordersec6[howsec5][howsec6 - 1];
      bankordersec6.all++;
      numberShop.textContent = bankordersec6.all;
      // animation order add
      animeShakeOrder.setAttribute('id', `anime-add-order`);
    }
    if (e.target.className == "order-section6-remove") {
      bankordersec6.all--;
      numberShop.textContent = bankordersec6.all;
      // animation order remove
      animeShakeOrder.setAttribute('id', `anime-remove-order`);
      if (bankordersec6[howsec5][howsec6 - 1] == 1) {
        removebtn.style.display = "none";
        numberbtn.style.display = "none";
        bankordersec6[howsec5][howsec6 - 1] = 0;
        return;
      }
      bankordersec6[howsec5][howsec6 - 1] -= 1;
      numberbtn.textContent = bankordersec6[howsec5][howsec6 - 1];
    }
    removebtn.style.display = "block";
    numberbtn.style.display = "block";
    copyBankordersec6 = bankordersec6;
    // show + only and show - and number
    // for(const child in childrenOrder){
    //   childrenOrder[child].style.display = "block";
    //   if(child == 1){
    //    childrenOrder[child].textContent ="1";
    //   }
    // }
    // show + only and show - and number
    // for(const child in childrenOrder){
    //   childrenOrder[child].style.display = "block";
    //   if(child == main){
    //    childrenOrder[child].textContent ="1";
    //   }
    // }
    // show + only and show - and number
    // for(const child in childrenOrder){
    //   childrenOrder[child].style.display = "block";
    //   if(child == dots){
    //    childrenOrder[child].textContent ="1";
    //   }
    // }
    // show + only and show - and number
    // for(const child in childrenOrder){
    //   childrenOrder[child].style.display = "block";
    //   if(child == 0){
    //    childrenOrder[child].textContent ="1";
    //   }
    // }
  })
})


// click item section 6 and bigger and show detail
boxlistSec5.addEventListener('click', function (e) {
  if (e.srcElement.nodeName != 'IMG') return;
  let clickimg_sec6 = document.querySelector('.section6-img');
  let dots_ses6 = document.querySelector('.point-sec6');
  clickimg_sec6.addEventListener('click', function (e) {
    let children_sec6img = e.path[2].children;
    if (e.target.nodeName == "IMG") {
      for (let j = 0; j < children_sec6img.length; j++) {
        children_sec6img[j].setAttribute('class', 'imgwhite-nothover');
        dots_ses6.children[j].setAttribute('id', 'backwhite');
      }
      e.path[1].setAttribute('class', 'dtboxshimg');
      let nowNumberElement = e.path[1].id.slice(8, 12) - 1;
      dots_ses6.children[nowNumberElement].setAttribute('id', "dthoverscript");
      // scroll smooth
      let scroll_s = document.querySelectorAll('.section6-img > *');
      scroll_s[nowNumberElement].scrollIntoView({
        behavior: "smooth", block: "nearest", inline: 'center'
      })
    }
  })
})
// show super detail
// boxlistSec5.addEventListener('click',function(e){
//   if(e.srcElement.nodeName != 'IMG') return;
//   let howsec5 = e.target.dataset.picsec5;
//   document.querySelector('.section6-img').addEventListener('click',function(e){
//     let targetElement = e.path[2].children;
//     if(e.target.nodeName== "IMG"){
//       let nowImg = e.target.dataset.srcimg;
//       document.querySelector()
//     }
// })
// })
