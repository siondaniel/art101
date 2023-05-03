// index.js - Create a function that takes user input and sorts it.
// Author: Sion Daniel
// Date: 05/03/2023

// Functions

// I took the below code from the screenshot in the lab instructions
// in task 2.

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("username=", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('')
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// let's get this party started
// Output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");
