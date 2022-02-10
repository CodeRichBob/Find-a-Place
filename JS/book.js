var bookNow=document.getElementById('booknow');
bookNow.addEventListener('click',bookNowFunction);
console.log('happening');


function bookNowFunction(e){
    e.preventDefault();
    console.log('happening');
    var user=localStorage.getItem('username');
    if(user!==null){
        window.location.href='form.html';
    }
    else{
        window.location.href='Login.html'
    }
}
