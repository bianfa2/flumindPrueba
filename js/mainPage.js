function showMainElements() {

    var abstracts = document.getElementsByClassName("abstract");
    var elements = document.getElementsByClassName("main_element");

    abstracts[0].className = "abstract animated fadeIn";

    setTimeout(function(){
        document.getElementById("tabs").className = "tabs animated fadeIn";
        document.getElementById("buttonMenu").className = "menu_icon animated fadeIn";
        elements[0].className = "main_element logo animated fadeIn";
        elements[1].className = "main_element main_title animated bounceInDown";
        elements[2].className = "main_element main_desc desc animated bounceInDown";
        elements[3].className = "main_element options animated bounceInDown";    
    }, 1000);
}