function addTransition(){
    anav = document.getElementById("nav-bar").getElementsByTagName('button');
    dropbutton = document.getElementsByClassName("dropdown-content")[0].getElementsByTagName("a");

    for (i=0; i<anav.length; i++){
        anav[i].style.transition = "0.2s ease";
    }
    for (i=0; i<dropbutton.length; i++){
        dropbutton[i].style.transition = "0.2s ease";
    }
}