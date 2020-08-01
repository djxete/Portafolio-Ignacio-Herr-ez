// Menu que sale

let hamburguesa= document.querySelector(".hamburguer i");
let enlacesHeader = document.querySelectorAll(".enlaces-header2");
let enlacesHeaderA= document.querySelectorAll(".enlaces-header2 a");
let header = document.querySelectorAll("header");

$(hamburguesa).click(function(){

    $(enlacesHeader).fadeToggle(1000);
    
});




// Variables

/* addEventListener("DOMContentLoaded", () => {

const imagenes = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg", "img/7.jpeg" ]
let i = 1;
const img1= document.querySelector("#img1");
const img2= document.querySelector("#img2");
const progressBar= document.querySelector("#progress-bar");
const divIndicadores = document.querySelector("#indicadores");
let porcentaje_base= 100/imagenes.length;
let porcentaje_actual= porcentaje_base;

for (let index = 0; index < imagenes.length; index++) {
    
    const div= document.createElement("div");
    div.classList.add("circles");
    div.id = index;
    divIndicadores.appendChild(div);
    
}

progressBar.style.width = `${porcentaje_base}%`;
img1.src= imagenes[0];
const circulos = document.querySelectorAll(".circles");
circulos[0].classList.add("resaltado");

const slideshow = () => {

    img2.src = imagenes[i];
    const circulo_actual = Array.from(circulos).find(el => el.id == i);
    Array.from(circulos).forEach(cir => cir.classList.remove("resaltado"));
    circulo_actual.classList.add("resaltado");

    img2.classList.add("active__img");
    i++;
    porcentaje_actual+=porcentaje_base;
    progressBar.style.width= `${porcentaje_actual}%`;
    if (i == imagenes.length) {
        i=0;
        porcentaje_actual = porcentaje_base - porcentaje_base;

    }

    setTimeout(() => {
        img1.src= img2.src;
        img2.classList.remove("active__img");

    },1000)

}


setInterval(slideshow, 4000);


})*/











/*
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});


// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
}) */