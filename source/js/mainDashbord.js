"use strict";
import { banksection6, bankSection6_detail, bankpricesec6 } from "./bankSection6.js";

let body = document.querySelector('.bodyDashbord');
// static :select order and add to box shop
let firstNameUser = document.querySelector('.login-name-use');
let listOrderShow = document.querySelector('.listOrderSelect');
let value = document.querySelector('.valueOrderTextMain');
firstNameUser.textContent = JSON.parse(localStorage.getItem('firstName'))
let allpriceforyou = 0;
let data = JSON.parse(localStorage.getItem('userOrder'));
if(data){
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
}
if (allpriceforyou > 999) {
    value.textContent = `${Math.floor(allpriceforyou / 1000)}میلیون و ${allpriceforyou % 1000}هزار تومان`
}
else {
    value.textContent = `${allpriceforyou}هزار تومان`
}


// logout user

let logout = document.querySelector('.logOutDashbord');
logout.addEventListener('click', function () {
    window.location.href = "/"
    localStorage.setItem('firstName', JSON.stringify(''));
    localStorage.setItem('userOrder' , JSON.stringify(''))
})


let increaseMoney = document.querySelector('.varizPool');
increaseMoney.addEventListener('click', function () {
    body.insertAdjacentHTML('afterbegin', '<div class="increaseMoney"><p class="outIncreaseMoney">⨉</p><p class = "textIncreaseMoney">مقدار افزایش شارژ حساب خود را وارد نمایید :</p><input class="inputIncreaseMoney" type="range" id="value" min="0" max="5000" step="5"><button class="subIncreaseMoney">ادامه</button></div><div class="BackincreaseMoney"></div>')
})
// show money farsi 
function showMoneyFarsi(e, elementTarget, baseValue) {
    e = Number(e) + baseValue;
    if (e < 1000)
        document.querySelector(elementTarget).textContent = `${e} هزار تومان`
    else {
        if (e % 1000 == 0) {
            document.querySelector(elementTarget).textContent = `${e / 1000} میلیون تومان`
        }
        else {
            document.querySelector(elementTarget).textContent = `${Math.floor(e / 1000)} میلیون و ${e % 1000} هزار تومان`
        }
    }
}


// get value price
let sumValue = 0;
let selectValue = 0;
increaseMoney.addEventListener('click', function () {
    let inputIncrease = document.querySelector('.inputIncreaseMoney');
    inputIncrease.insertAdjacentHTML('afterend', `<p class="valueUnderInput">2 میلیون و 500 هزار تومان</p>`)
    inputIncrease.addEventListener('mousemove', function (e) {
        showMoneyFarsi(e.target.value, '.valueUnderInput', 0)
        let nowValue = document.querySelector('.login-price-use').textContent;
        let matches = nowValue.match(/\d+/g);
        nowValue = matches.reduce((a, b) => a + b);
        selectValue = e.target.value;
        sumValue = Number(nowValue) + Number(selectValue);
    })
})
// click out variz pool
increaseMoney.addEventListener('click', function () {
    document.querySelector('.outIncreaseMoney').addEventListener('click', function () {
        document.querySelector('.increaseMoney').remove()
        document.querySelector('.BackincreaseMoney').remove()
    })
});


// keep going and click to sub
increaseMoney.addEventListener('click', function () {
    document.querySelector('.subIncreaseMoney').addEventListener('click', function () {
        document.querySelector('.textIncreaseMoney').remove()
        document.querySelector('.inputIncreaseMoney').remove()
        document.querySelector('.valueUnderInput').remove()
        document.querySelector('.outIncreaseMoney').insertAdjacentHTML('afterend', '<p>از پرداخت شما مچکریم حساب شما با موفقیت شارژ شد</p>');
        document.querySelector('.subIncreaseMoney').style.display = 'none';
    })
});


// show new money
increaseMoney.addEventListener('click', function () {
    document.querySelector('.subIncreaseMoney').addEventListener('click', function () {
        console.log(sumValue)
        if (sumValue < 1000)
            document.querySelector('.login-price-use').textContent = `${sumValue} هزار تومان`
        else {
            if (sumValue % 1000 == 0) {
                document.querySelector('.login-price-use').textContent = `${sumValue / 1000} میلیون تومان`
            }
            else {
                document.querySelector('.login-price-use').textContent = `${Math.floor(sumValue / 1000)} میلیون و ${sumValue % 1000} هزار تومان`
            }
        }
    })
})
