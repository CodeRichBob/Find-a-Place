var emailAddress = document.getElementById('emailAddress');
var password = document.getElementById('password');
var registerUser=document.getElementById('register');
var signin= document.getElementById('signin');
var firstName= document.getElementById('firstName');

registerUser.addEventListener('click',registerUsers);

signin.addEventListener('click',signIn);

function registerUsers(e){
    e.preventDefault();
    localStorage.setItem('username',emailAddress.value);
    localStorage.setItem('password',password.value);

    window.location.href='Login.html';
    
}
function signIn(e){
    e.preventDefault();
    // console.log('done');
  var user=  localStorage.getItem('username');
  var passwordItem=  localStorage.getItem('password');
  if(firstName.value===user && password.value === passwordItem){
    window.location.href='../index.html'

  }
  else{
      console.log("wrong creds");
      
  }
  
}

