// Menu que sale y al hacer click en cada enlace nos lleva a la sección correspondiente y nos cierra el menu

let hamburguesa = document.querySelector(".hamburguer i");
let enlacesHeader = document.querySelectorAll(".enlaces-header2");
let enlacesHeaderA = document.querySelectorAll(".enlaces-header2 a");
let header = document.querySelectorAll("header");
let enlaces = document.getElementsByName("enlace");


let sacarMenu = $(hamburguesa).click(function () {

    $(enlacesHeader).fadeToggle(1000);

});

enlaces.forEach(function(e){
    e.addEventListener("click", function(){
        $(enlacesHeader).fadeOut(1000);

    })
})







