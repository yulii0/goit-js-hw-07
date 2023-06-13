import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
console.dir(createGalleryMarcup());

const lightbox = new SimpleLightbox(".gallery a", {
  animationSpeed: 350,
  captionDelay: 250,
  captionsData: "alt",
});

function createGalleryMarcup() {
  const elmGalleryMarcup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
    })
    .join("");
  galleryList.insertAdjacentHTML("beforeend", elmGalleryMarcup);
}
