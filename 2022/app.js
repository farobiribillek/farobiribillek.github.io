/*Variables*/

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
const texto = document.querySelector('#texto');
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  imagenActiva.alt = event.target.alt;
  lightbox.style.display = 'flex';
  texto.innerText = imagenActiva.alt;
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  imagenActiva.alt = imagenes[indiceImagen + 1].alt;
  texto.innerText = imagenActiva.alt;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  imagenActiva.alt = imagenes[indiceImagen - 1].alt;
  texto.innerText = imagenActiva.alt;
  indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);
