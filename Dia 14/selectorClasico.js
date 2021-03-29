'use strict';

const title = document.getElementById('principal');

const ps = document.getElementsByTagName('p');
const tds = document.getElementsByTagName('td');
const bigs = document.getElementsByClassName('big');

console.log(title);
console.log(ps);

title.style.color = 'red';

for (let p of ps) {
    p.style.color = 'blue';
}

for (const td of tds) {
    const nota = td.textContent;

    td.style.color = nota >= 5 ? 'green' : 'red';
}

for (const big of bigs) {
    big.style.fontSize = '1.3rem';
}

/* background-color = backgroundColor */
