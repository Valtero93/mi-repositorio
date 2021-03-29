'use strict';

const title = document.querySelector('#principal');

const ps = document.querySelectorAll('p');
const tds = document.querySelectorAll('td');

const bigs = document.querySelectorAll('.big');

const primerP = document.querySelector('p:first-of-type');

console.log(title);
console.log(ps);

title.style.color = 'red';

/* for (let p of ps) {
    p.style.color = 'blue';
} */

ps.forEach((p) => (p.style.color = 'blue'));

for (const td of tds) {
    const nota = td.textContent;

    td.style.color = nota >= 5 ? 'green' : 'red';
}

for (const big of bigs) {
    big.style.fontSize = '1.3rem';
}

primerP.style.color = 'green';

/* background-color = backgroundColor */
