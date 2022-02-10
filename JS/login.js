var emailAddress = document.getElementById('emailAddress');
var password = document.getElementById('password');
var registerUser=document.getElementById('registerUser');
var signin= document.getElementById('signin');
var firstName= document.getElementById('firstName');
var forgotPassword = document.getElementById('forgotPassword');

registerUser.addEventListener('click',registerUsersFunction);
signin.addEventListener('click',signIn);
forgotPassword.addEventListener('click',forgotPasswordFunction);
// resetPassword.addEventListener('click',resetFunction);

function registerUsersFunction(e){
    e.preventDefault();
   

    window.location.href='SignUp.html';
    
}
function signIn(e){
    e.preventDefault();
    console.log('done');
  var user=  localStorage.getItem('username');
  var passwordItem=  localStorage.getItem('password');
  if(firstName.value===user && password.value === passwordItem){
    window.location.href='../index.html'

  }
  else{
      console.log("wrong creds");
      showSnackbar();

  }
  
}
function showSnackbar() {
	var snackBar =
	document.getElementById("toast");
	snackBar.className = "show-bar";

	setTimeout(function () {  
	// Dynamically Removing the Class
	// from HTML element
	// By Replacing it with an Empty
	// String after 5 seconds
	snackBar.className =
		snackBar.className.replace("show-bar", "");
	}, 5000);
}

function forgotPasswordFunction(e){
  e.preventDefault();
  window.location.href='resetPassword.html';
}

