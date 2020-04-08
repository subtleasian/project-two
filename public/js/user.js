$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var profileInput = $("#inputProfile");
    var nameInput = $("#inputName");
    var emailInput = $("#inputEmail");
    var passInput = $("#inputPassword")
    var submitButton = $("#submit");
    // Adding an event listener for when the form is submitted
    $(submitButton).click(function(){
      try{
        handleFormSubmit();
      } catch (err) {
        console.log("No body text in form submission");
        threw = true;
      }
    });
  
    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the post if we are missing any form submissions
      if (!profileInput.val().trim() || !nameInput.val().trim() || !emailInput.val().trim() || !passInput.val().trim()) {
        alert("All fields must be completed");
      }
      // Constructing a newPost object to hand to the database
      else{
        var newUser = {
          picture: profileInput
            .val()
            .trim(),
          name: nameInput
            .val()
            .trim(),    
          email: emailInput
            .val()
            .trim(),
          password: passInput
            .val()
            .trim()
        };
      };
    }
  
    // Submits a new post and brings user to survey page upon completion
    function submitPost(post) {
      $.post("/api/users", post, function() {
        window.location.href = "/survey";
      });
    }
  
    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    // function getPostData(id, type) {
    //   var queryUrl;
    //   switch (type) {
    //   case "post":
    //     queryUrl = "/api/posts/" + id;
    //     break;
    //   case "author":
    //     queryUrl = "/api/authors/" + id;
    //     break;
    //   default:
    //     return;
    //   }