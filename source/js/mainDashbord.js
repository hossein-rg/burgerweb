"use strict";
import { banksection6, bankSection6_detail, bankpricesec6 } from "./bankSection6.js";


// static :select order and add to box shop
let firstNameUser = document.querySelector('.login-name-use');
let listOrderShow = document.querySelector('.listOrderSelect');
let value = document.querySelector('.valueOrderTextMain');
firstNameUser.textContent = JSON.parse(localStorage.getItem('firstName'))
let allpriceforyou = 0;
let data = JSON.parse(localStorage.getItem('userOrder'));

for (let a = 1; a < 7; a++) {
    for (let j = 0; j < data[a].length; j++) {
        if (data[a][j] == 0) continue;
        else {
            listOrderShow.insertAdjacentHTML('beforeend', `
            <div class="listOrderSelectch">
                    <div class="los">
                        <p>${bankSection6_detail[a][j]}</p>
                        <div class="los-detail">
                            <p>${data[a][j]} عدد</p>
                            <p>${bankpricesec6[a][j] * data[a][j]} تومان</p>
                        </div>
                        <div class="los-addremove">
                            <button class="los-addremove1">افزودن</button>
                            <button class="los-addremove2">حذف</button>
                        </div>
                    </div>
                <img src='/${banksection6[a][j]}' alt="">
            </div>
            `)
            allpriceforyou = bankpricesec6[a][j] * data[a][j] + allpriceforyou;
        }
    }
}
if (allpriceforyou > 999) {
    value.textContent = `${Math.round(allpriceforyou / 1000)}میلیون و ${allpriceforyou % 1000}هزار تومان`
}
else {
    value.textContent = `${allpriceforyou}هزار تومان`
}


// logout user

let logout = document.querySelector('.logOutDashbord');
logout.addEventListener('click', function () {
    window.location.href = "/"
    localStorage.setItem('firstName', JSON.stringify(''));
})