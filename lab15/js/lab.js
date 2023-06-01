// lab.js - Lab 15: AJAX
// Author: Sion Daniel
// Date: 05/31/2023

// REAL CODE
// Add click event to button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
$("#activate").click(function() {

  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://beta.pokeapi.co/graphql/v1beta",

    // The data to send (will be converted to a query string)
    data: JSON.stringify({
      query: `{
        pokemon_v2_pokemon(limit: 5) {
          name
          height
          weight
        }
      }`
    }),

    // Whether this is a POST or GET request
    type: "POST",
    dataType: "json",
    contentType: "application/json",

    // The type of data we expect back
    success: function(response) {
      // Put the output of the AJAX call in the output div
      var response_data = JSON.stringify(response.data);

      // Either:
      // parse the JSON data structure like we did in lecture, or
      // use JSON.stringify(data) to convert your data into a string
      $("#output").text(JSON.stringify(response.data));
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  });
});
