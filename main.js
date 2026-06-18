var mobileMenu = document.getElementById("mobileMenu");
var mainBody = document.querySelector("main");
var slideIndex = 1;

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

function openLightBox(){
    document.getElementById("lightBox").style.display = "block";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mainBody.classList.add("open");
    showSlides(slideIndex);
}

function closeLightBox(){
    document.getElementById("lightBox").style.display = "none";
    document.body.style.backgroundColor = "white";
    mainBody.classList.remove("open");
}

function moveSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    slideIndex = n;
}

function showCurrentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    var thumbs = document.getElementsByClassName("thumbnail");
    if(n > slides.length)
        slideIndex = 1;
    if(n < 1)
        slideIndex = slides.length;
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < thumbs.length; i++){
        thumbs[i].className = thumbs[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbs[slideIndex-1].className += " active";
}