var pages;
var tabs;
var menu;
var menuIcon;
var closeIcon;
var pageOpaque;

function start() {
    initVariable();  
    loadMainPage();     
    assingEvents();        
}

function initVariable() {

    pages = document.getElementsByClassName("page");
    menu = document.getElementById("menu");
    menuIcon = document.getElementById("buttonMenu");
    closeIcon = document.getElementById("closeIcon");
    pageOpaque = document.getElementById("opaque");

}

function assingEvents(){
    menuIcon.addEventListener("click", openMenu);
    closeIcon.addEventListener("click", closeMenu);
}

function loadMainPage() {
    pages[1].className = "page animated fadeIn";
    setTimeout(function(){

        pages[0].className = "page hidden";
        showMainElements();

    }, 1000);
}

function openMenu(){
    pageOpaque.className = "page opaque";
    pageOpaque.style.opacity = ".4";  
    menu.style.transform = "translateX(-100%)";
}

function closeMenu(){
    pageOpaque.className = "hidden";
    pageOpaque.style.opacity = "0";  
    menu.style.transform = "translateX(100%)";
}