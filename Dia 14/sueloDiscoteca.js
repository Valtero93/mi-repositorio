"use strict"
import {randomNumber as r} from "./helpers.js";

const tds =document.querySelectorAll("td");

function changeBackground(){
    for(const td of tds){
        const color=`rgb(${r(255)},${r(255)},${r(255)})`;
        td.style.backgroundColor=color;
    }
}
setInterval(changeBackground,500);