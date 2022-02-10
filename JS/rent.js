var rent=document.getElementById('rent');
rent.addEventListener("click",rentFunction);
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
function rentFunction(e){
 var username=localStorage.getItem("username");

 if(username!=null){
  showSnackbar();
 }
 else{
  window.location.href='Login.html';
 }
}

var rent=document.getElementById('rent1');
rent.addEventListener("click",rentFunction);
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
function rentFunction(e){
 var username=localStorage.getItem("username");

 if(username!=null){
  showSnackbar();
 }
 else{
  window.location.href='Login.html';
 }
}

var rent=document.getElementById('rent3');
rent.addEventListener("click",rentFunction);
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
function rentFunction(e){
 var username=localStorage.getItem("username");

 if(username!=null){
  showSnackbar();
 }
 else{
  window.location.href='Login.html';
 }
}