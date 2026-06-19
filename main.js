var mobileMenu = document.getElementById("mobileMenu");
var mainBody = document.querySelector("main");
var slideIndex = 1;
var items = 0;

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
    var thumbnails = document.getElementsByClassName("thumb");
    var i;
    for(i = 0; i < thumbnails.length; i++){
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    thumbnails[slideIndex-1].className += " active";
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

function displayCart(id){
    if(id === "cart" && document.getElementById("cartContent").style.display === "block")
        document.getElementById("cartContent").style.display = "none";
    else{
        document.getElementById("cartContent").style.display = "block";
    }
    
    if(items > 0){
        document.getElementById("empty").style.display = "none";
        document.getElementById("cartItems").style.display = "block";
        document.getElementById("quantity").textContent = items;
        document.getElementById("cost").textContent = items * 125.00;
    }else{
        document.getElementById("empty").style.display = "block";
        document.getElementById("cartItems").style.display = "none";
    }
}

function changeItems(){
    items = document.getElementById("itemQuantity").value;
    if(document.getElementById("cartContent").style.display === "block"){
        displayCart();
    }
}