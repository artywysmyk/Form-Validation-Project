const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
const errorMsg = document.querySelectorAll('.error');
const successIcon = document.querySelectorAll('.success-icon');
const errorIcon = document.querySelectorAll('.error-icon');
 
 
form.addEventListener('submit', (e) =>{
   e.preventDefault();
   validateUsername();
   validateEmail();
   validatePassword();
   reset();
 
})
 
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input',validatePassword);
 
 
 
function validateUsername(){
   const usernameValue = username.value.trim();
   if(usernameValue === ''){
       setErrorMsg(0,'Username cannot be blank');
   }else{
       setSuccessMsg(0);
   }
}
 
function validEmail(s){
rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return s.match(rgx);
}
 
function validateEmail(){
   const emailValue = email.value.trim();
   if(emailValue === ''){
       setErrorMsg(1,'Email cannot be blank');
   } else if(!validEmail(emailValue)){
       setErrorMsg(1, 'Please enter a valid email format');
   } else{
       setSuccessMsg(1);
   }
}
 
function validatePassword(){
   const passwordValue = password.value.trim();
   if(passwordValue === ''){
       setErrorMsg(2,'Password cannot be blank');
   } else if(passwordValue.length<=12){
       setErrorMsg(2, 'Password must be at least 12 characters long');
   }else{
       setSuccessMsg(2);
   }
}
 
function setErrorMsg(serial,message){
   errorMsg[serial].classList.add('msg-active');
   errorMsg[serial].innerText = message;
   //icons
   errorIcon[serial].classList.add('icon-active');
   successIcon[serial].classList.remove('icon-active');
}
 
function setSuccessMsg(serial){
   //icons
   successIcon[serial].classList.add('icon-active');
   errorIcon[serial].classList.remove('icon-active');
   //msg
   errorMsg[serial].innerText = "";
}
 
function reset(){
   username.value = '';
   email.value = '';
   password.value = '';
   successIcon[0].classList.remove('icon-active');
   successIcon[1].classList.remove('icon-active');
   successIcon[2].classList.remove('icon-active');
}
 
