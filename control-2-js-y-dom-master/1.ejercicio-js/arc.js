'use strict';


import { getData, getPhoto } from './helpers.js';





const main = document.querySelector('main');

function buildUsers(userList) {
    const fragment = document.createDocumentFragment();
    for (const user of userList) {
        const article = document.createElement('article');
        const header = document.createElement('header');
        const name = `${user.name.first} ${user.name.last}`;
        const img = getPhoto(user.picture.large, name);
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const dob = new Date(user.dob.date);

        const p = document.createElement('p');
        p.textContent = `${user.location.city}, ${dob.getFullYear()}`;

        header.append(img);
        header.append(h1);
        article.append(header);
        article.append(p);

        fragment.append(article);
    }

    main.append(fragment);
}

async function mainFunc() {
    const quant = prompt('Introduce un numero');

    const url = `https://randomuser.me/api/?results=${quant}`;

    const data = await getData(url);

    const users = data.results;

    buildUsers(users);
}

mainFunc();

