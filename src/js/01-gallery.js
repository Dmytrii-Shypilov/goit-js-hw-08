// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery")

console.group(galleryEl)

function createGalleryMarkup (array) {
    const markup = array.map((image) => {
     return `<div class="gallery__item">
     <a class="gallery__link" href="${image.original}">
       <img
         class="gallery__image"
         src="${image.preview}"
         data-source="${image.original}"
         alt="${image.description}"
       />
     </a>
   </div>`;
    }).join("")
    
   return galleryEl.insertAdjacentHTML("beforeend", markup)
}

createGalleryMarkup(galleryItems)

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt"});