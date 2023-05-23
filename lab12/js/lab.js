// lab.js - Lab 12: Create a function that uses Conditionals
// Author: Sion Daniel
// Date: 05/23/2023

// @param str is a string to be sorted
// @return a Gryffindor, Ravenclaw, Slytherin, or Hufflepuff depending on the value of
// the length of str mod 4
function sortingHat(str) {

  // counts the letters in str and assigns it to a variable length
  var length = str.length;

  // uses modulus (% operator) to get the remainder with 4
  var mod = length % 4;

  // Conditional depending on value of mod
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }

  // if mod is not 0, 1, 2, or 3, return "Muggle"
  // This will never happen because Muggle's don't go to Hogwarts
  return "Muggle";
}

// Create an click listener attached to #button
$("#button").click(function(event) {

  // Prevent a form submission
  event.preventDefault();

  // get the value of #input and assigns it to a variable name
  var name = $("#input").val();

  // run sortinngHat(name) and stores the result in a variable house
  var house = sortingHat(name);

  // append a new styled paragraph to #output
  $("#output").append("<p>The Sorting Hat has sorted you into " + house + "</p>");

});
