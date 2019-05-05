var pages;

function start() {
    initVariable();       
    pages[1].className = "page animated fadeIn";
    loadMainPage();
}

function initVariable() {

    pages = document.getElementsByClassName("page");

}

function loadMainPage() {
    setTimeout(function(){

        pages[0].className = "page hidden";
        showMainElements();

    }, 1000);
}