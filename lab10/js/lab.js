// index.js - Create a function that takes user input and sorts it.
// Also, add a event listener to the button that calls the function.
// Author: Sion Daniel
// Date: 05/15/2023

// Constants
// Use the HTML form to create a form that takes user input and sorts it.
var userName = document.getElementById("user-name").value;
// Only run the code if the user has entered something

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
  // split string to array
  var nameArray = userName.split('');
  // sort the array using localeCompare: 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var nameArraySort = nameArray.sort((a, b) => a.localeCompare(b));
  // join array back to a string
  var nameSorted = nameArraySort.join('')
  return nameSorted;
}

// addEventListener - a function that calls sortUserName and writes the
// sorted name to the page when the button is clicked
document.getElementById("my-button").addEventListener("click", function(event){

  // Prevent default behavior (refreshing when submitting form)
  event.preventDefault();
  
  // Get the value of the input field
  var userName = document.getElementById("user-name").value;

  // Only run the code if the user has entered something
  if(userName){
    // Output to "output" div element
    document.getElementById("output").innerHTML = "Oh hey, I've fixed your name: " + sortUserName(userName);
  }
});
