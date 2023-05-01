// index.js - Create and print a JavaScript array and object 
//            based on our transportation methods.
// Author: Sion Daniel
// Date: 05/01/2023

// Constants
// Define variables
var myTransport = [" Mazda v3", " bike ", " bus", " Uber", " rides from friends"];

// create an object for my main ride
var myMainRide = {
  make: "Mazda",
  model: "v3",
  color: "Dark Blue",
  year: 2008,
  age: function() {
      return 2023 - this.year;
  }
}

// Output
document.writeln("Kinds of transportation I use:" + myTransport + "<br>");
// Write the object to the document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// let's get this party started
main();
