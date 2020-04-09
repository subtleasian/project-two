$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var profileInput = $("#inputProfile");
  var nameInput = $("#inputName");
  var emailInput = $("#inputEmail");
  var passInput = $("#inputPassword");

  // Adding an event listener for when the form is submitted

  $(document).on("submit", "#user-form", handleFormSubmit);

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing any form submissions
    if (
      !profileInput.val().trim() ||
      !nameInput.val().trim() ||
      !emailInput.val().trim() ||
      !passInput.val().trim()
    ) {
      alert("All fields must be completed");
    }
    // Constructing a newPost object to hand to the database
    submitUser({
      picture: profileInput.val().trim(),
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passInput.val().trim()
    });
  }

  // Submits a new post and brings user to survey page upon completion
  function submitUser(post) {
    $.post("/api/users", post, function() {
      console.log("new user account created.");
      window.location.href = "/survey";
    });
  }
});
