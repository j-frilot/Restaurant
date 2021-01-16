
let currentSlide = document.querySelector(".slides");


let slides = [
    "url('https://res.cloudinary.com/dsip2gx3i/image/upload/v1600388811/Restaurant/slide1_hmlax3.jpg')", 
    "url('https://res.cloudinary.com/dsip2gx3i/image/upload/v1600388811/Restaurant/slide2_drujci.jpg')", 
    "url('https://res.cloudinary.com/dsip2gx3i/image/upload/v1600388811/Restaurant/slide3_dnss6z.jpg')",
];

let picOne = slides[0];
let picTwo = slides[1];
let picThree = slides[2];

slideCount = 0
function autoSlide () {

    // left.style.display = "none";
    // right.style.display = "none";

    slideImage = currentSlide.style.backgroundImage = slides[slideCount]
    slideCount ++;

    if ( slideCount >= slides.length) {
        slideCount = 0;
    }

    console.log(slideCount);
}
setInterval(autoSlide, 3000);