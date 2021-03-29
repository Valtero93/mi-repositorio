"use strict";

const listItems=document.querySelectorAll("li");

function handleItemClick(event){
    const item=event.target;

    if(!item.dataset.count){
        item.dataset.count=0;

    }
    item.dataset.count++;
    const {count}=item.dataset;

    //console.log(item.dataset);

    item.textContent=`${count} clicks`;
}

for(const item of listItems){
    item.addEventListener("click",handleItemClick);
}



// const handleButtonClick=function (e){
//     const item=e.target;
//     if(!item.dataset.count){
//         item.dataset.count=0;
//     }

//     item.dataset.count++;
//     const cuenta=item.dataset.count;
//     console.log(cuenta);
// };

// for(const item of listItems){
//     item.addEventListener("click",handleItemClick);
// } 

