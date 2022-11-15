import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ref = {
    galleryEl: document.querySelector('.gallery'),
}

function createMarkupGallery(items) {
    return items.map(photo => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${photo.original}">
                    <img
                      class="gallery__image"
                      src="${photo.preview}"
                      data-source="${photo.original}"
                      alt="${photo.desription}""
                    />
                </a>
            </div>`}).join('');
}

ref.galleryEl.innerHTML = createMarkupGallery(galleryItems);

ref.galleryEl.addEventListener('click', showPhoto);

function showPhoto(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show()
    
    ref.galleryEl.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }    
    })

}
