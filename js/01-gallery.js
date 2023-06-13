import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClick);
console.log(createGalleryMarcup(galleryItems));

const instance = basicLightbox.create(
    `<img class="gallery__image-modal" src="" width="800" height="600">`,
    {
    onShow: (instance) => {
        document.addEventListener("keydown", onBtnEscPush);
    },
    }
);

function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
    return;
    }
    instance.element().querySelector("img").src = evt.target.dataset.source;
    instance.show();
}

function onBtnEscPush(evt) {
    if (evt.code === "Escape") {
    instance.close();
    }
}

function createGalleryMarcup(galleryItems) {
    const elementGalleryMarcup = galleryItems
    .map(({ description, original, preview }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
    })
    .join("");
    galleryList.insertAdjacentHTML("beforeend", elementGalleryMarcup);
}
