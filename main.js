var mobileMenu = document.getElementById("mobileMenu");

function showMenu(){
    //document.getElementById("mobileMenu").style.visibility = "visible";
    document.querySelector("main").style.filter = "brightness(50%)";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mobileMenu.classList.add("show");

}

function hideMenu(){
    //document.getElementById("mobileMenu").style.visibility = "hidden";
    document.querySelector("main").style.filter = "brightness(100%)";
    document.body.style.backgroundColor = "white";
    mobileMenu.classList.remove("show");
}