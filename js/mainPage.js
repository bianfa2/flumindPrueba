function showMainElements() {

    var abstracts = document.getElementsByClassName("abstract");
    var elements = document.getElementsByClassName("main_element");

    abstracts[0].className = "abstract abstract1 animated fadeIn";

    setTimeout(function(){
        abstracts[1].className = "abstract abstract2 animated fadeIn";
    }, 500);

    setTimeout(function(){
        abstracts[2].className = "abstract abstract3 animated fadeIn";
    }, 1000);

    setTimeout(function(){
        elements[0].className = "main_element main_title animated bounceInDown";
        elements[1].className = "main_element main_desc animated bounceInDown";
        elements[2].className = "main_element options animated bounceInDown";
    }, 1500);

}