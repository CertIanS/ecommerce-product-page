var mobileMenu = document.getElementById("mobileMenu");
var mainBody = document.querySelector("main");

function showMenu(){
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mainBody.classList.add("open");
    mobileMenu.classList.add("show");
}

function hideMenu(){
    document.body.style.backgroundColor = "white";
    mainBody.classList.remove("open");
    mobileMenu.classList.remove("show");
}