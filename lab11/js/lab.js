// lab.js - Lab 11: Create a button that toggles a class
// Using jQuery
// Author: Sion Daniel
// Date: 05/17/2023

// Get buttons for each section
var challengesButton = $("#challenge");
var problemsButton = $("#problems");
var resultsButton = $("#results");

// Create the buttons and append them to the divs with text
challengesButton.append("<button>Challenges Button</button>");
problemsButton.append("<button>Problems Button</button>");
resultsButton.append("<button>Results Button</button>");

// Add an event listener to the buttons that toggles class to "special"
challengesButton.click(function(){
  challengesButton.toggleClass("special");
});

problemsButton.click(function(){
  problemsButton.toggleClass("special");
});

resultsButton.click(function(){
  resultsButton.toggleClass("special");
});


