// import images from './data/gallery-items.js'
// console.log(images)
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

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




const modalContent = document.querySelector('.lightbox__content')

const modal = document.querySelector('.js-lightbox');
const openModalBtn = document.querySelector('.js-gallery');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
openModalBtn.addEventListener('click', onOpen);
closeModalBtn.addEventListener('click', onClose);
const classOpenClose = document.querySelector('.js-lightbox')

function onOpen(event) {
  event.preventDefault();
  console.log('click')
  window.addEventListener('keydown', onEscKeyPress);
  classOpenClose.classList.add('is-open');
 modalContent.src = event.target.dataset.source;
};
console.log(closeModalBtn)
function onClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  classOpenClose.classList.remove('is-open')
  
};

function onEscKeyPress(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    onClose();
  }
  onClose();
}
const gallery = document.querySelector('.js-gallery');

const imageMarkup = createImageMarkup('images');

gallery.insertAdjacentHTML('beforeend', imageMarkup);

const clear = document.querySelector('.lightbox__image.src');
function clearEl() {
 
  clear.innerHtml = '';
}


function createImageMarkup() {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview}
                data-source=${original} alt=${description} />
        </a>
    </li>`;
    }).join('');
}