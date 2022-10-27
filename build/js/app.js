document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria');

    galeria.textContent = 'Vamos a crear la galeria';
}