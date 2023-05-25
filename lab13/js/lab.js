// lab.js - Lab 13: Using Loops!
// Author: Sion Daniel
// Date: 05/25/2023

// FizzBuzz Function
function fizzBuzz() {
  // Create output string
  var oneLongString = "";

  // Loop through numbers 1 to 200
  for (var num = 1; num <= 200; num++) {
    // Check if number is divisible by 3, 5, or 7
    if (num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
      oneLongString += num + ": ";
    } else {
      oneLongString += num + "<br>";
    }
    if (num % 3 == 0) {
      oneLongString +=  "Fizz!";
    }
    if (num % 5 == 0) {
      oneLongString += "Buzz!";
    }
    if (num % 7 == 0) {
      oneLongString += "Boom!";
    }
    if (num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
      oneLongString += "<br>";
    }
  }

  // Output string to output div
  $("#output").html(oneLongString);
}

// Call fizzBuzz function
fizzBuzz();

// Task X ----------------------------------------------------

// FizzBuzzBoom Function
function fizzBuzzBoom(max, factorObj) {
  // Loop through numbers 1 to max
  for (var num = 1; num <= max; num++) {
    // Create output string
    var oneLongString = "";

    // Loop through factors
    for (var factor in factorObj) {
      // Check if number is divisible by factor
      if (num % factor == 0) {
        // Add factor to output string (ex. 2 - Fizz!)
        oneLongString += factorObj[factor];
      }
    }

    // If no factors, output number
    if (oneLongString) {
      oneLongString = " - " + oneLongString;
    }

    // Output string to output div
    $("#output2").append(num + oneLongString + "<br>");
  }
}

// Get Factor Object Function
function getFactorObj() {
  // Create empty object
  var factorObj = {};

  // Loop through factors
  for (var factor=0; factor<maxFactors; factor++) {
    var numId= "#num" + factor;
    var textId= "#text" + factor;
    var num = $(numId).val();
    var text = $(textId).val();
    if (num && text) {
      factorObj[num] = text;
    }
  }

  // Return object
  return factorObj;
}

// Report Error Function
function reportError(msg) {
  outputEl.html(msg);
  outputEl.addClass("error");
}

// Max Number of Factors
var maxFactors = 4;

// Get Output Object
var outputEl = $("#output2");

// Create function handler for submit button
$("#submit").click(function() {

  // Get factor object
  var factorObj = getFactorObj();

  // Check if factor object is empty
  if (Object.keys(factorObj).length == 0) {
    reportError("No factors provided");
  }
  
  // Clear output div
  outputEl.html("");
  outputEl.removeClass("error");

  // Get max number
  var max = $("#max").val();

  // Check if max is a number
  if (isNaN(max)) {
    reportError("Max is not a number");
    return;
  }

  // Check if max is greater than 0
  if (max <= 0) {
    reportError("Max is not greater than 0");
    return;
  }

  // Call fizzBuzzBoom function
  fizzBuzzBoom(max, factorObj);
});