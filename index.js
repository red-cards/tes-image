const testimonies=document.getElementsByClassName("testimoni-detail");
const testimoniesNav=document.getElementsByClassName("testimoni-nav-item");
let sliderNum=1;
const start=()=>{
    const showSlider=document.getElementById("testi-"+sliderNum);
    const showNav=document.getElementById("testimoni-nav-"+sliderNum);
    for(let i=0;i<testimonies.length;i++){
        testimonies[i].classList.add("hide");
        testimoniesNav[i].classList.remove("active-testimoni-nav");
    }
    showSlider.classList.remove("hide");
    showNav.classList.add("active-testimoni-nav");    
    sliderNum<testimonies.length ? sliderNum++ : sliderNum=1;
}

window.onload=function(){
    const interval=window.setInterval(start,2000);
    const buttonProducts=document.getElementsByClassName("button-product");
    const popUp=document.getElementById("pop-up");
    const accordionBtn=document.querySelectorAll(".arrow");
    const iconBurger=document.getElementById("icon-hamburger");
    const backBurger=document.getElementById("back-menu-hamburger");
    const loginBtn=document.querySelectorAll(".login-button");
    loginBtn.forEach((e,index)=>{
        e.addEventListener("click",function(){
            window.location.href="login.html";
        });
    });
    iconBurger.addEventListener("click",function(){
        const menuBurger=document.getElementById("menu-hamburger");
        menuBurger.style.left='0';
    });
    backBurger.addEventListener("click",function(){
        const menuBurger=document.getElementById("menu-hamburger");
        menuBurger.style.left="100%";
    });
    for(let i=0;i<testimoniesNav.length;i++){
        testimoniesNav[i].addEventListener("click",function(){
            const showSlider=document.getElementById("testi-"+sliderNum);
            const showNav=document.getElementById("testimoni-nav-"+sliderNum);
            for(let i=0;i<testimonies.length;i++){
                testimonies[i].classList.add("hide");
                testimoniesNav[i].classList.remove("active-testimoni-nav");
            }
            sliderNum=i+1;
            showSlider.classList.remove("hide");
            showNav.classList.add("active-testimoni-nav");            
        });
    }
    for(let i=0;i<buttonProducts.length;i++){
        buttonProducts[i].addEventListener("click",function(){
            popUp.style.display="block";
        });
    }
    popUp.addEventListener("click",function(){
        this.style.display="none";
    });
    for(let i=0;i<accordionBtn.length;i++){
        accordionBtn[i].addEventListener("click",function(){
            this.classList.toggle("rotate");
            this.parentNode.nextElementSibling.classList.toggle("hide");
        });
    }
    interval;
}


