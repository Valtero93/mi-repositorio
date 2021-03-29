'use strict';
const listItems = document.querySelectorAll('li');
const body = document.querySelector('body');

console.log(body);

function handleItemClick(event) {
    const item = event.target;
    event.stopPropagation(); //evita que el evento pase al padre

    if (!item.dataset.count) {
        item.dataset.count = 0;
    }

    item.dataset.count++;
    const { count } = item.dataset;
    //const count = item.dataset.count

    item.textContent = `${count} clicks`;
}

/* 
Si no guardo la cuenta en el propio elemento, es la misma para todos 
//o se reinicia en cada click

//let malCount = 0;

function malHandleItemClick(event) {
    const item = event.target;

    let malCount = 0;
    malCount++;

    item.textContent = `${malCount} clicks`;
} */

for (const item of listItems) {
    item.addEventListener('click', handleItemClick);
}

body.addEventListener('click', () => {
    console.log('click en el padre');
});
