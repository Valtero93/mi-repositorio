'use strict';

const articles = document.querySelectorAll('article');

const noCerrable = document.querySelector('#no-cerrable');
const cerrable = document.querySelector('#cerrable');

const handleArticleClick = () => {
    console.log('se abre la pagina del anuncio');
};

for (const article of articles) {
    article.addEventListener('click', handleArticleClick);
}

cerrable.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('cierra');
});

noCerrable.addEventListener('click', () => {
    console.log('cierra');
});
