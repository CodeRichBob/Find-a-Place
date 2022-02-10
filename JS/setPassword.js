var newPassword=document.getElementById('password');
var confirmPassword=document.getElementById('confrimPassword');
var setPassword= document.getElementById('setPassword');

setPassword.addEventListener('click',setPasswordFunction);

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
function showSnackbar2() {
	var snackBar =
	document.getElementById("toast1");
	snackBar.className = "show-bar";

	setTimeout(function () {  
	snackBar.className =
		snackBar.className.replace("show-bar", "");
	}, 5000);
}
function setPasswordFunction(e){
	e.preventDefault();
	var oldPass=localStorage.getItem('password');

	console.log(oldPass);
	if(oldPass == newPassword.value && oldPass==confirmPassword.value){

		showSnackbar2();
	}
    else if(newPassword.value !== confirmPassword.value){
		showSnackbar();

    }
    else{

        localStorage.setItem('password',newPassword.value);
		window.location.href='Login.html';
    }
	

	 

}
