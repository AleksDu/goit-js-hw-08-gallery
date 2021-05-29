import images from "./images-items.js";

// const modalContent = document.getElementById('.lightbox__content');
const modal = document.querySelector('.js-lightbox');
const gallery = document.querySelector('.js-gallery');
const lightboxImage = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);
function createImageMarkup() {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview}
                data-source=${original} alt=${description} />
        </a>
    </li>`;
    })
    .join('');
}
const imageMarkup = createImageMarkup('images');
gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener('click', onOpen);
closeModalBtn.addEventListener('click', onClose);
function onOpen(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  modal.classList.add('is-open');
  lightboxImage.src = event.target.dataset.source;
}
function onClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  modal.classList.remove('is-open');
  lightboxImage.src = '';
}
function onEscKeyPress(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    onClose();
  }
}

// document.addEventListener('keydown', e => {
//   let newIndex;
//   const currentId = images.indexOf(lightboxImage.src);
//   if (e.key === 'ArrowLeft') {
//     newIndex = currentId - 1;
//     if (newIndex == -1) {
//       newIndex = images.length - 1;
//     }
//   } else if (e.key === 'ArrowRight') {
//     newIndex = currentId + 1;
//     if (newIndex === images.length) {
//       newIndex = 0;
//     }
//   }
//  lightboxImage.src = images[newIndex];
// });

// const gallery = document.querySelector('.js-gallery');
// const modal = document.querySelector('.js-lightbox');
// const modalContent = document.querySelector('.lightbox__content')
// gallery.addEventListener("click", imagesClick);

// function imagesClick(event) {
//   event.imagestDefault();
//   if (!event.target.classList.contains(".gallery__image")) {
//     return;
//   }
//   gallery.style.display = 'block'
  
//   const openModalBtn = document.querySelector('.gallery');
//   openModalBtn.addEventListener('click', onOpen);

//   function onOpen() {
//   openModalBtn.addEventListener('keydown', onEscKeyPress);
 
//   modal.classList.add("is-open");
// };
 

//   openModalBtn.src = event.target.dataset.source;
// }


// const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
// closeModalBtn.addEventListener('click', onClose);

// function onClose(event) {
//   window.removeEventListener('keydown', onEscKeyPress);
//   modal.classList.remove('is-open')
//     event.target.dataset.source = "";
// };
// console.log(closeModalBtn)
// console.log(onClose)


// function onEscKeyPress(event) {
//   console.log(event.code);
//   if (event.code === 'Escape') {
//     onClose();
//   }
//   onClose();
// }


// const imageMarkup = createImageMarkup('images');

// gallery.insertAdjacentHTML('beforeend', imageMarkup);



// function createImageMarkup() {
//   return images
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//         <a class="gallery__link" href=${original}>
//             <img class="gallery__image" src=${preview}
//                 data-source=${original} alt=${description} />
//         </a>
//     </li>`;
//     }).join('');
// }




// const modalContent = document.querySelector('.lightbox__content')

// const modal = document.querySelector('.js-lightbox');
// const openModalBtn = document.querySelector('.js-gallery');
// const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
// openModalBtn.addEventListener('click', onOpen);
// closeModalBtn.addEventListener('click', onClose);
// const classOpenClose = document.querySelector('.js-lightbox')

// function onOpen(event) {
//   event.preventDefault();
//   console.log('click')
//   window.addEventListener('keydown', onEscKeyPress);
//   classOpenClose.classList.add('is-open');
//  modalContent.src = event.target.dataset.source;
// };
// console.log(closeModalBtn)
// function onClose() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   classOpenClose.classList.remove('is-open')
  
// };

// function onEscKeyPress(event) {
//   console.log(event.code);
//   if (event.code === 'Escape') {
//     onClose();
//   }
//   onClose();
// }
// const gallery = document.querySelector('.js-gallery');

// const imageMarkup = createImageMarkup('images');

// gallery.insertAdjacentHTML('beforeend', imageMarkup);

// const clear = document.querySelector('.lightbox__image.src');
// function clearEl() {
 
//   clear.innerHtml = '';
// }


// function createImageMarkup() {
//   return images
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//         <a class="gallery__link" href=${original}>
//             <img class="gallery__image" src=${preview}
//                 data-source=${original} alt=${description} />
//         </a>
//     </li>`;
//     }).join('');
// }