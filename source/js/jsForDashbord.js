
// querySelectors
// let submit = document.querySelector('.submit_login');
let boxLogin = document.querySelector('.loginForm');
let boxConfirm = document.querySelector('.confirmCode')
let showNumberUser = document.querySelector('.numberUser');
let spinnerShow = document.querySelector('.lds-ring-hide');
let backToNumber = document.querySelector('.backToNumber');
// let submitLogin = document.querySelector('.finallyLogin');
const EntryConfirmation = document.querySelector('.sublog');
const checkCodeFinally = document.querySelector('.input_login_finally');
const alertError = document.querySelector('.confirmCode-detail');

// export {bankordersec6};
// import {copyBankordersec6} from './tA3-js.js';
// console.log(copyBankordersec6);
// click button verify
document.querySelector('.sublog').addEventListener('click',function(e){
    
    let FirstName = document.querySelector('.input_log_name');
let number = document.querySelector('.input_log_number');
    let nameCheck = FirstName.value;
    let numberCheck = number.value;
    let renderForConfirm = 0;
    if ((nameCheck.length > 2) && !FirstName.validity.patternMismatch) {
        FirstName.style.backgroundColor = 'rgb(75, 167, 55)';
        renderForConfirm++;
    }
    if (numberCheck.length > 2) {
        number.style.backgroundColor = 'rgb(75, 167, 55)';
        renderForConfirm++;
    }
    if (FirstName.validity.patternMismatch || (nameCheck.length <= 2)) {
        alert('لطفا نام خود را صحیح و به صورت فارسی وارد نمایید')
        FirstName.style.backgroundColor = 'rgb(252, 102, 65)';
        renderForConfirm = 0;
    } if (numberCheck.length != 11) {
        alert('شماره شما نامعتبر میباشد')
        e.preventDefault()
        number.style.backgroundColor = 'rgb(252, 102, 65)';
        renderForConfirm = 0;
    }
    if (renderForConfirm == 2) {
        // save name to locale storage
        localStorage.setItem('firstName', JSON.stringify(nameCheck))
        spinnerShow.setAttribute('class', 'lds-ring');
        // function wait
        setTimeout(() => {
            boxLogin.style.display = 'none';
            boxConfirm.style.display = 'block';
            document.querySelector('.formLoginUser').submit();
            // showNumberUser.textContent = numberCheck;
        }, 3000);
        // set empty string to next page
        checkCodeFinally.value = '';
    }
})


// click back to number and edit phone
// backToNumber.addEventListener('click', function () {
//     boxLogin.style.display = 'flex';
//     boxConfirm.style.display = 'none';
//     spinnerShow.setAttribute('class', 'lds-ring-hide');
//     number.value = '';
//     FirstName.value = '';
//     FirstName.style.backgroundColor = '';
//     number.style.backgroundColor = '';

// })

// submitLogin.addEventListener('click', function () {
//     spinnerShow.setAttribute('class', 'lds-ring-hide')
// })


// finally login and join to dashbord

function submitConfirm(e) {
    if (checkCodeFinally.value != 8888) {
        alertError.insertAdjacentHTML('beforebegin', '<p class="alertErrorForCodeLogin">کد وارد شده صحیح نمیباشد</p>');
    }
}


// EntryConfirmation.addEventListener('click', function (e) {
//     alert('1212')
//     e.preventDefault()
//     console.log(checkCodeFinally.value)
//     if (checkCodeFinally.value == 8888) {
//         form.submit()
//     }
//     else {
//         e.preventDefault();
//         alertError.insertAdjacentHTML('beforebegin', '<p class="alertErrorForCodeLogin">کد وارد شده صحیح نمیباشد</p>');
//     }
// })

