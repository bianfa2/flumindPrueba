var pages;
var tabs;
var tabActivated;
var feelSelected;
var curved;
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
    tabs = document.getElementsByClassName("tab");
    curved = document.getElementById("curved");
    tabActivated = 0;
    menu = document.getElementById("menu");
    menuIcon = document.getElementById("buttonMenu");
    closeIcon = document.getElementById("closeIcon");
    pageOpaque = document.getElementById("opaque");
    initFeels();

}

function assingEvents(){

    menuIcon.addEventListener("click", openMenu);
    closeIcon.addEventListener("click", closeMenu);

    //Tabs
    tabs[0].addEventListener("click", function(){
        if(tabActivated != 0){
            curved.className = "curved curved_home animated fadeIn";
            tabs[0].className = "tab tab1 curved_active animated slideInUp";
            for(let i = 3; i <= pages.length - 2; i++){
                pages[i].className = "page animated slideOutRight";
            }
        }
    })

    assingMainOptions();
    assingFeels();
}

function loadMainPage() {
    pages[2].className = "page animated fadeIn";

    setTimeout(function(){
        pages[1].className = "page hidden";
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

function showPage(page){

    page.className = "page animated bounceInRight";   
    curved.className = "curved curved_home animated fadeOut";
    tabs[0].className = "tab tab1 animated slideInDown";
    tabActivated = -1; 

}