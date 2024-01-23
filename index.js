const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elements = document.querySelectorAll(".first-line");

let container = document.querySelector(".line-container");
let fixed = document.querySelector(".fixed-img");


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