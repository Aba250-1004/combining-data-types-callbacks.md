const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
const greaterThanZero = (num) => {
    return num >= 0;
}
let check = nums.every(greaterThanZero)

console.log(check);
// determine if every word shorter than 8 characters
const stringLenShorterThanEight = (string) => {
    return string.length < 8;
}

let everyCheck = panagram.every(stringLenShorterThanEight)

console.log(check);

// Filter
// filter the array for numbers less than 4
const lessThanFour = (num) => {
    return num < 4;
}
let filter1 = nums.filter(lessThanFour)

console.log(filter1);
// filter words that have an even length
const isEvenString = (string) => {
    return string.length % 2 === 0;
}
let filter2 = panagram.filter(isEvenString)

console.log(filter2);

// Find
// Find the first value divisible by 5
let firstFind = nums.find(element => element % 5 === 0);
console.log(firstFind);

// find the first word that is longer than 5 characters
let secondFind = panagram.find(string => string.length % 5 === 0);
console.log(secondFind);

// Find Index
// find the index of the first number that is divisible by 3
let indexNum = nums.findIndex(num => num % 3 === 0);
console.log(indexNum);

// find the index of the first word that is 
// less than 2 characters long
let indexStr = nums.findIndex(string => string.length < 2);
console.log(indexStr);


// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach(num => console.log(num * 3));

// console.log each word with an exclamation point at the end of it
panagram.forEach(str => console.log(str+"!"));

// Map
// make a new array of each number multiplied by 100
newArr = nums.map(num => num * 100);
console.log(newArr)
// make a new array of all the words in all uppercase
newArr1 = panagram.map(str => str.toUpperCase());
console.log(newArr1)

// Some
// Find out if some numbers are divisible by 7
someDivBy = nums.some(num => num % 7 === 0);
console.log(someDivBy);
// Find out if some words have the letter a in them
someAin = panagram.some(str => str.includes("a"));
console.log(someAin);