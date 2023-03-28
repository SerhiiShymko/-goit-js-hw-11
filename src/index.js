import '../src/css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/apiClient.js';
import throttle from 'lodash.throttle';
// import templates from './templates/template-card.hbs';

const galleryMarkUp = document.querySelector('#search-form');
// const btnSearch = document.querySelector('.search');
// const btnLoad = document.querySelector('.load-more');

let searchState = '';
let currentPage = 1;
let currentHits = 0;

document.querySelector('.load-more').addEventListener('click', () => {
  const btnLoad = document.querySelector('.load-more').dataset.page;
  const btnSearch = document.querySelector('.search').value;
  getImages(search, page);
});

const fetchImages = (search, page) =>
  getImages(search, page)
    .then(response => {
      //   renderNews(createCollection(response.articles));
      updateLoadButton(page);
      updateTotal(response.totalResults);
    })
    .catch(e => console.log(e));

const updateTotal = totalHits => {
  let el = document.querySelector('.total');
  if (!el) {
    el = document.createElement('label');
    el.classList.add('total');
    const container = document.querySelector('.search-form');
    container.append(el);
  }

  el.textContent = `Total articles: ${totalHits}`;
};

const updateLoadButton = currentPage => {
  const btnLoad = document.querySelector('.load-more');
  btn.style.display = 'block';
  btn.dataset.page = Number(currentPage) + 1;
};

const lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
