const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elements = document.querySelectorAll(".first-line");

let container = document.querySelector(".line-container");
let fixed = document.querySelector(".fixed-img");


function page3 (){
    container.addEventListener("mouseenter",()=>{
        fixed.style.display = "block";
        
        });
        container.addEventListener("mouseleave",()=>{
            fixed.style.display = "none";
        
            });
        elements.forEach((ele)=>{
            ele.addEventListener("mouseenter",()=>{
                var image1 = ele.getAttribute("src");
                fixed.style.backgroundImage = `url(${image1})`;
                fixed.classList.add("fixed-bgimage");
                })
               
        })
}
function swiper1(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 100,
        freeMode: true,
            
      });
}
page3();
swiper1();