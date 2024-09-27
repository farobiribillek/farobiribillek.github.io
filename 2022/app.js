
const botoiaItxi = document.querySelector('#botoia_itxi');
const botoiaAurrekoa = document.querySelector('#botoia_aurrekoa');
const botoiaHurrengoa = document.querySelector('#botoia_hurrengoa');
const irudiak = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#lightbox');
const irudia = document.querySelector('#irudia');
const testua = document.querySelector('#testua');
let irudiarenIndizea = 0;

const lightboxaIreki = (event) => {
  irudia.src = event.target.src;
  irudia.alt = event.target.alt;
  lightbox.style.display = 'flex';
  testua.innerText = irudia.alt;
  irudiarenIndizea = Array.from(irudiak).indexOf(event.target);
};

irudiak.forEach((irudia) => {
  irudia.addEventListener('click', lightboxaIreki);
});

botoiaItxi.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const hurrengoaErakutsi = () => {
  if (irudiarenIndizea === irudiak.length - 1) {
    irudiarenIndizea = -1;
  }
  irudia.src = irudiak[irudiarenIndizea + 1].src;
  irudia.alt = irudiak[irudiarenIndizea + 1].alt;
  testua.innerText = irudia.alt;
  irudiarenIndizea++;
};

botoiaHurrengoa.addEventListener('click', hurrengoaErakutsi);

const aurrekoaErakutsi = () => {
  if (irudiarenIndizea === 0) {
    irudiarenIndizea = irudiak.length;
  }
  irudia.src = irudiak[irudiarenIndizea - 1].src;
  irudia.alt = irudiak[irudiarenIndizea - 1].alt;
  testua.innerText = irudia.alt;
  irudiarenIndizea--;
};

botoiaAurrekoa.addEventListener('click', aurrekoaErakutsi);
