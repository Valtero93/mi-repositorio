'use strict';

const today = function () {
    return Date();
};

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const PI = 3.14159;

const randomNumber = (max) => Math.floor(Math.random() * max);

//Exports

export default today;

export { add, multiply, PI, randomNumber };
