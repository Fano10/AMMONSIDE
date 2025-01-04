function navMobile(){
    const inav = document.getElementById("inav");
    const inavigation_mobile = document.getElementsByClassName("navigation_mobile");
    inav.addEventListener("click", (event) => {
        event.preventDefault();
        if (inav.className == "fa-solid fa-circle-chevron-up"){
            inavigation_mobile[0].style.visibility = "hidden";
            inavigation_mobile[0].style.transform = "translateY(-130px)";
            inav.className = "fa-solid fa-circle-chevron-down";
        }
        else{
            //inavigation_mobile[0].style.display = 'block';
            inavigation_mobile[0].style.visibility = "visible";
            inavigation_mobile[0].style.transform = "translateY(0px)";
            inav.className = "fa-solid fa-circle-chevron-up";
        }
    });
}

function navLogo(){
    const logo = document.getElementById("logo");
    logo.addEventListener("click", ()=>{
        window.location.hash = "hero";
    });
}
function scrollHeader(){
    let lastScrollTop = 0;
    const navbar = document.getElementById("header");
    const inavigation_mobile = document.getElementsByClassName("navigation_mobile");
    const inav = document.getElementById("inav");
    window.addEventListener("scroll", function () {
        inavigation_mobile[0].style.transform = "translateY(-130px)";
        inavigation_mobile[0].style.visibility = "hidden";
        inav.className = "fa-solid fa-circle-chevron-down";
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop && scrollTop > 130){
            navbar.style.top = "-130px";
        }
        else{
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    })
}

function main(){
    navMobile();
    scrollHeader();
    navLogo();
}

window.onload = main;