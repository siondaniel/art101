// lab.js - Lab 11: Create a button that toggles a class
// Using jQuery
// Author: Sion Daniel
// Date: 05/17/2023

// Get buttons for each section
var challengesEl = $("#challenge");
var problemsEl = $("#problems");
var resultsEl = $("#results");

// Create the buttons and append them to the divs with text
challengesEl.append("<button>Challenges Button</button>");
problemsEl.append("<button>Problems Button</button>");
resultsEl.append("<button>Results Button</button>");

// Create variables for the buttons
var challengesButton = $("#challenge button");
var problemsButton = $("#problems button");
var resultsButton = $("#results button");

// Add an event listener to the buttons that toggles class to "special"
challengesButton.click(function(){
  challengesEl.toggleClass("special");
  // Change color of p-button
  problemsButton.toggleClass("special");
});

problemsButton.click(function(){
  problemsEl.toggleClass("special");
  // Change color of r-button
  resultsButton.toggleClass("special");
});

resultsButton.click(function(){
  resultsEl.toggleClass("special");
  // Change color of c-button
  challengesButton.toggleClass("special");
});
