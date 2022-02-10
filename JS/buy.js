var buy= document.getElementById('buy');

buy.addEventListener('click',buyFunction);

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


function buyFunction(e){
var user= localStorage.getItem('username');
if(user!==null){
    showSnackbar();
}
else{
    window.location.href='Login.html';
}


}