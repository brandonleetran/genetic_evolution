"use strict";
// the population of our generation (the higher the population, the higher the variance)
const POPULATION = 1000;
// the character set of which we are using (note: I am not using integer values)
const charset = "abcdefghijklmnopqrstuvwxyz";
// the list of DNAs that will be generated using natural selection
const array = [];
// program starts here
function init() {
    let stringLength = 5;
    for (let i = 0; i < POPULATION; i++) {
        let obj = { word: randomString(stringLength) };
        array.push(obj);
        console.log(array);
    }
}
// pure function
function stringLength(obj) {
    return obj.word.length;
}
// function that generates a random string based on string length
function randomString(stringLength) {
    let result = '';
    for (let i = 0; i < stringLength; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
}
init();
console.log("end");
