document.addEventListener("DOMContentLoaded", function() {
    const maxScrollDistance = 500;

    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        
        if(scrollPosition <= maxScrollDistance){
        document.querySelector(".card-1").style.transform = "translateY(" + scrollPosition/5 + "px)";
        document.querySelector(".card-2").style.transform = "translateY(-" + scrollPosition/5 + "px)";
        document.querySelector(".card-3").style.transform = "translateY(" + scrollPosition/5 + "px)";
        }        
        
        document.querySelector(".rectangulo").style.transform = "translateX(" + 1.5*scrollPosition + "px)";
    });
});