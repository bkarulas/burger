$(function() {
    //// FOR THE ADDING BURGER
    $("#addburger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        const newBurger = {
          burger_name: $("#addburger [name=burger]").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
    // DEVOURED BURGER 
      $(".devburger").on("click", function(event) {
        event.preventDefault();
        const id = $(this).data("burgerid");
        
        const newBurgerState = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
        }).then(
          function() {
            console.log("changed burger to devoured");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
    })