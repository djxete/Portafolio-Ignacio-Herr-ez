// Menu que sale

let hamburguesa= document.querySelector(".hamburguer i");
let enlacesHeader = document.querySelectorAll(".enlaces-header2");
let enlacesHeaderA= document.querySelectorAll(".enlaces-header2 a");
let header = document.querySelectorAll("header");

$(hamburguesa).click(function(){

    $(enlacesHeader).fadeToggle(1000);
    
});


