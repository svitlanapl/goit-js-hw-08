
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// console.log(SimpleLightbox);
// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createImageGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
         </a>
        `;
    }).join('');
}

const galleryMarkup = createImageGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

    const lightbox = new SimpleLightbox('.gallery a', {
        captionSelector: 'img',
        captionsData: 'alt',
        caption: true,
        captionPosition: 'bottom',
        captionDelay: 250,
    });
