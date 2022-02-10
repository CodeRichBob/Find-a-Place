var emailAddress= document.getElementById('emailAddress');
var resetPassword=document.getElementById('reset');

resetPassword.addEventListener('click', resetPasswordFunction);

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

function resetPasswordFunction(e){
    e.preventDefault();
  var user=  localStorage.getItem('username');
  if(emailAddress.value!==user){
    showSnackbar();
  }
  else{
      window.location.href='setPassword.html';
  }
}
