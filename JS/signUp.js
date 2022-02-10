var emailAddress = document.getElementById('emailAddress');
var password = document.getElementById('password');
var registerUser=document.getElementById('registerUser');
var firstName= document.getElementById('firstName');
var signIn= document.getElementById('signIn');

registerUser.addEventListener('click',registerUsersFunction);
signIn.addEventListener('click',signInFunction);

function registerUsersFunction(e){
    e.preventDefault();
    localStorage.setItem('username',emailAddress.value);
    localStorage.setItem('password',password.value);

    window.location.href='Login.html';
    
}
function signInFunction(e){
    e.preventDefault();

    window.location.href='Login.html'
}