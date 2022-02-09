var emailAddress = document.getElementById('emailAddress');
var password = document.getElementById('password');
var registerUser=document.getElementById('register');

registerUser.addEventListener('click',registerUsers);

function registerUsers(e){
    e.preventDefault();
    console.log('saving');
    localStorage.setItem('username',emailAddress.value);
    localStorage.setItem('password',password.value);

    window.location.href='Login.html';
    
}
