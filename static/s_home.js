
function alertt(){
    console.log('alerted');
}

window.onload = function(){
    var logout = document.getElementById('logout');
    console.log(logout);
    logout.addEventListener("mouseover", alertt()); 
}


function showPopup(){
    var test =  document.getElementById("popup");
    console.log(test);
    if (test.style.display === "none") {
      test.style.display = "block";
    };
  }