const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let container = document.querySelector(".line-container");
let fixed = document.querySelector(".fixed-img");


container.addEventListener("mouseenter",(e)=>{
fixed.style.display = "block";
fixed.classList.add("fixed-bgimage");
console.log(e);
});
container.addEventListener("mouseleave",()=>{
    fixed.style.display = "none";

    });