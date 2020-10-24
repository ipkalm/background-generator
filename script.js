"use strict";

var css    = document.querySelector('h3');

var color1 = document.querySelector('input[name="color1"]');
var color2 = document.querySelector('input[name="color2"]');

var body   = document.getElementById('body');
var btn    = document.getElementById('randomize-bg');

function setGradient() {
    body.style.background = `linear-gradient(to right,
        ${color1.value}, 
        ${color2.value})`;
    css.textContent = body.style.background + ';';
}

function getRandomRGBCode() {
    var max = 255;
    return Math.floor(Math.random() * max);
}

function getRandomRGBColor() {
    var red   = getRandomRGBCode();
    var green = getRandomRGBCode();
    var blue  = getRandomRGBCode();

    return `rgb(${red}, ${green}, ${blue})`;
}

function setBackgroundGradient() {
    var left  = getRandomRGBColor();
    var right = getRandomRGBColor();
    // console.log(left, right);
    body.style.background = `linear-gradient(to right,
        ${left}, 
        ${right})`;
    css.textContent = body.style.background + ';';
}

css.textContent = `linear-gradient(to right,
    ${color1.value}, 
    ${color2.value})`;

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

btn.addEventListener('click', setBackgroundGradient);