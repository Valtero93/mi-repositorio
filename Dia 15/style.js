"use strict";

import { reload } from "browser-sync";

const titulo=document.querySelector("header h1");
console.log(titulo.style);

const primerEnlace=document.querySelector("header h1");
console.log(primerEnlace.style.backgroundColor);
primerEnlace.style.backgroundColor="white";
primerEnlace.style.cssText="text.decoration: underline; font-size: 1.3rem";

primerEnlace.style.backgroundColor="white";

primerEnlace.setAttribute("style","color:reload; font-weight:bold");
primerEnlace.style.backgroundColor="white";