// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { serviceImages } from './js/pixabay-api';
import { createGallery } from './js/render-functions';


const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('.btn')

loader.style.display = 'none';
btn.style.display = "none";

let question = '';
let page = 1;
let limit = 15;
let totalHits = 0;

const galleryModal = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


function updateGallery(hits) {
  gallery.insertAdjacentHTML('beforeend', createGallery(hits));
  galleryModal.refresh();
}

btn.addEventListener('click', async () => {
  page += 1;
  btn.disabled = true;
  loader.style.display = 'inline-block';

  try {
    const data = await serviceImages(question, page);
    const hits = data.hits;
    totalHits = data.totalHits;

    updateGallery(hits);
    
   
  
    const galleryItem = document.querySelector('.gallery-item');

    if (galleryItem) {
      const { height: cardHeight } = galleryItem.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
     if (Math.ceil(totalHits / limit) === page) {
      btn.style.display = 'none';
      iziToast.show({
      title: '',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topCenter',
    });
    }
  } catch (error) {
  iziToast.error({
    position: "topRight",
    message: error.message,
  });
  } finally {
    btn.disabled = false;
    loader.style.display = 'none';
}
})


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  question = event.target.elements.query.value.trim();
  page = 1;
  gallery.innerHTML = '';

  if (!question) {
    iziToast.show({
      backgroundColor: '#EF4040',
      message: `Enter the data for the search!`,
      messageColor: '#FFFFFF',
      position: 'topRight',
    });
    return;
  }

try {
  const data = await serviceImages(question, page);
  totalHits = data.totalHits;
  
  if (data.hits.length === 0) {
   
    iziToast.show({
      title: '',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topCenter',
    });
    btn.style.display = 'none';
    return;
  }
  updateGallery(data.hits);
  
if (totalHits > limit) {
        btn.style.display = 'inline-block';
      } else {
        btn.style.display = 'none';
      }
    }
   catch (error) {
  iziToast.error({
       position: "topRight",
      message: error.message,
    })
  } finally {
    loader.style.display = 'none';
    form.reset();
  }
});