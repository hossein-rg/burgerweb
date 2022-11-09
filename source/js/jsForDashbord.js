console.log('hey sobhan');
// querySelectors
let submit = document.querySelector('.submit_login');
let FirstName = document.querySelector('.input_log_name');
let number = document.querySelector('.input_log_number');
let boxLogin = document.querySelector('.loginForm');
let boxConfirm = document.querySelector('.confirmCode')
let showNumberUser = document.querySelector('.numberUser');
let spinnerShow = document.querySelector('.lds-ring-hide');
let backToNumber = document.querySelector('.backToNumber');
let submitLogin = document.querySelector('.finallyLogin');


// click button verify
submit.addEventListener('click',function(e){
    let nameCheck = FirstName.value;
    let numberCheck = number.value;
    let renderForConfirm = 0;
    if(nameCheck.length > 2){
        FirstName.style.backgroundColor = 'rgb(75, 167, 55)';
        renderForConfirm++;
    }
    if(numberCheck.length > 2){
        number.style.backgroundColor = 'rgb(75, 167, 55)';
        renderForConfirm++;
    }
    if(nameCheck.length < 2){
        alert('لطفا نام خود را وارد نمایید')
        FirstName.style.backgroundColor = 'rgb(252, 102, 65)';
        renderForConfirm = 0;
    }if(numberCheck.length != 11){
        alert('شماره شما نامعتبر میباشد')
        number.style.backgroundColor = 'rgb(252, 102, 65)';
        renderForConfirm = 0;
    }
    if(renderForConfirm == 2){
        spinnerShow.setAttribute('class','lds-ring');
        // function wait
     setTimeout(() => {
    boxLogin.style.display = 'none';
    boxConfirm.style.display = 'block';
    showNumberUser.textContent = numberCheck;
      }, 3000);
    }
})

// click back to number and edit phone
backToNumber.addEventListener('click',function(){
    boxLogin.style.display = 'flex';
    boxConfirm.style.display = 'none';
    spinnerShow.setAttribute('class','lds-ring-hide')
})

submitLogin.addEventListener('click',function(){
    spinnerShow.setAttribute('class','lds-ring-hide')
})
