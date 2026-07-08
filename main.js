var mobileMenu = document.getElementById("mobileMenu");
var mainBody = document.querySelector("main");
var slideIndex = 1;
var items = 0;
var mobileI = document.getElementsByClassName("mobileImg");
var slidesI = document.getElementsByClassName("slides");
var thumbsI = document.getElementsByClassName("thumbnail");
var thumbnailsI = document.getElementsByClassName("thumb");

let input = document.getElementById("quantityInput");
const min = input.getAttribute("min");
const step = Number(input.getAttribute("step") || 1);
var value = Number(input.getAttribute("value") || 0);
let number = document.getElementById("itemQuantity");
number.innerHTML = value;

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
    changeImg(thumbnailsI);
}

function showCurrentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    if(n > slidesI.length)
        slideIndex = 1;
    if(n < 1)
        slideIndex = slidesI.length;
    for(i = 0; i < slidesI.length; i++){
        slidesI[i].style.display = "none";
    }
    changeImg(thumbsI);
    changeImg(thumbnailsI);
    slidesI[slideIndex-1].style.display = "block";
    document.getElementById('mainImg').src = './images/image-product-' + slideIndex + '.jpg';
}

function changeMobileImg(n){
    slideIndex += n;
    if(slideIndex > mobileI.length){
        slideIndex = 1;
    }
    if(slideIndex < 1){
        slideIndex = mobileI.length;
    }
    for(var i = 0; i < mobileI.length; i++){
        mobileI[i].className = mobileI[i].className.replace(" mobileShow", " mobileHide");
        thumbnailsI[i].className = thumbnailsI[i].className.replace(" active", "");
        thumbsI[i].className = thumbsI[i].className.replace(" active", "");
    }
    mobileI[slideIndex-1].className = mobileI[slideIndex-1].className.replace(" mobileHide", " mobileShow");
    thumbnailsI[slideIndex-1].className += " active";
    thumbsI[slideIndex-1].className += " active";
    document.getElementById('mainImg').src = './images/image-product-' + slideIndex + '.jpg';
}

function changeImg(imgsArr){
    for(var i = 0; i < imgsArr.length; i++){
        imgsArr[i].className = imgsArr[i].className.replace(" active", "");
        mobileI[i].className = mobileI[i].className.replace(" mobileShow", " mobileHide");
    }
    imgsArr[slideIndex-1].className += " active";
    mobileI[slideIndex-1].className = mobileI[slideIndex-1].className.replace(" mobileHide", " mobileShow");
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
        document.getElementById("empty").style.display = "flex";
        document.getElementById("cartItems").style.display = "none";
    }
}

function changeCart(){
    items = document.getElementById("itemQuantity").innerHTML;
    document.getElementById("itemNumber").style.display = "block";
    document.getElementById("itemNumber").textContent = items;
    if(items === "0")
        document.getElementById("itemNumber").style.display = "none";
    if(document.getElementById("cartContent").style.display === "block"){
        displayCart();
    }
}

function deleteCartItems(){
    items = value = 0;
    document.getElementById("itemNumber").style.display = "none";
    document.getElementById("empty").style.display = "flex";
    document.getElementById("cartItems").style.display = "none";
    document.getElementById("itemQuantity").innerHTML = 0;
}

function increase(){
    value += step;
    number.innerHTML = value;
}

function decrease(){
    if(min){
        if(value > min && value - step >= min){
            value -= step;
        }
    }else{
        value -= step;
    }
    number.innerHTML = value;
}