function navMobile(){
    const inav = document.getElementById("inav");
    inav.addEventListener("click", (event) => {
        event.preventDefault();
        if (inav.className == "fa-solid fa-circle-chevron-up"){
            inav.className = "fa-solid fa-circle-chevron-down";
        }
        else{
            inav.className = "fa-solid fa-circle-chevron-up";
        }
    });
}

function main(){
    navMobile();
}

window.onload = main;