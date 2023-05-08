// index.js - Create a function that squares a number, 
// and then use the map() method to square each number in an array.
// Then use an anonymous function to double each number in the array.
// Author: Sion Daniel
// Date: 05/08/2023

console.log("Lab 8 - Functions and Arrays");

// Variables
var outputEl = document.getElementById("output"); 

// Functions
function square(x){
  return x * x;
}

// test function
console.log("The square of 4 is " + square(4));
console.log("The square of 10 is " + square(10));

var numbers = [1,2,3,4,5];
console.log("My array is " + numbers);
outputEl.innerHTML = "Original array: [" + numbers + "]<br>";

var result = numbers.map(square);
// should return [1,4,9,16,25]
console.log("The squares of my array are " + result);
outputEl.innerHTML += "The squares of my array are [" + result + "]<br>";

var result = numbers.map(function(x){
  return x + x;
});
// should return [2,4,6,8,10]
console.log("The doubles of my array are " + result);
outputEl.innerHTML += "The doubles of my array are [" + result + "]<br>";

