$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var profileInput = $("#inputProfile");
  var nameInput = $("#inputName");
  var emailInput = $("#inputEmail");
  var passInput = $("#inputPassword");

  var moodScore = 0;
  var pleasantScore = 0;
  var unpleasantScore = 0;
  var negativeArr = [];
  var positiveArr = [];

  var friendArr = [];
  var moodyFriendname = "";
  var oppositeMoodyFriendname = "";

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

    //if box is checked, then push the emotion to the array
    $.each($("input[name='positive']:checked"), function() {
      positiveArr.push($(this).val());
    });

    $.each($("input[name='negative']:checked"), function() {
      negativeArr.push($(this).val());
    });

    pleasantScore = positiveArr.length;
    unpleasantScore = negativeArr.length;
    moodScore = pleasantScore - unpleasantScore;

    console.log(pleasantScore, unpleasantScore, moodScore);

    // Constructing a newPost object to hand to the database
    submitUser({
      picture: profileInput.val().trim(),
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passInput.val().trim(),
      UnpleasantScore: unpleasantScore,
      PleasantScore: pleasantScore,
      OverallEmotionScore: moodScore
    });

    displayScore();
    getFriends();
  }

  // Submits a new post and brings user to survey page upon completion
  function submitUser(post) {
    //creates new user data in User database
    $.post("/api/users", post, function() {
      console.log("new user account created.");
    });
  }
  //moodScore display in mood result section
  function displayScore() {
    var newHeader = $(
      "<h5 class='display-4 py-2 text-truncate' id='subTitle'>" +
        "Your mood Score is: " +
        moodScore +
        "</h5>"
    );
    $("#display-score").html(newHeader);

    if (moodScore <= -4) {
      var scoreImg = $(
        "<img class='center' src='/assets/images/moodscore_1.png'>" +
          "<br>" +
          "<img class='center' id='emoji' src='/assets/images/emoji_1.png'>"
      );
      $("#display-score").append(scoreImg);
    } else if (moodScore <= -2 && moodScore > -4) {
      var scoreImg = $(
        "<img class='center' src='/assets/images/moodscore_2.png'>" +
          "<br>" +
          "<img class='center' id='emoji' src='/assets/images/emoji_2.png'>"
      );
      $("#display-score").append(scoreImg);
    } else if (moodScore <= 2 && moodScore > -2) {
      var scoreImg = $(
        "<img class='center' src='/assets/images/moodscore_3.png'>" +
          "<br>" +
          "<img class='center' id='emoji' src='/assets/images/emoji_3.png'>"
      );
      $("#display-score").append(scoreImg);
    } else if (moodScore <= 4 && moodScore > 2) {
      var scoreImg = $(
        "<img class='center' src='/assets/images/moodscore_4.png'>" +
          "<br>" +
          "<img class='center' id='emoji' src='/assets/images/emoji_4.png'>"
      );
      $("#display-score").append(scoreImg);
    } else if (moodScore > 4) {
      var scoreImg = $(
        "<img class='center' src='/assets/images/moodscore_5.png'>" +
          "<br>" +
          "<img class='center' id='emoji' src='/assets/images/emoji_5.png'>"
      );
      $("#display-score").append(scoreImg);
    }
  }

  //get friend data from user databas
  function getFriends() {
    $.get("/api/users", function(dbUser) {
      for (var j = 0; j < dbUser.length; j++) {
        friendArr.push(dbUser[j]);
        // console.log(dbUser[j]);
      }
      for (var i = 0; i < friendArr.length - 1; i++) {
        var scoreDiff = moodScore - friendArr[i].OverallEmotionScore;
        var totalDiff = 20;
        var oppositeScoreDiff = moodScore - friendArr[i].OverallEmotionScore;

        if (scoreDiff <= totalDiff) {
          totalDiff = scoreDiff;
          moodyFriendname = friendArr[i].name;
        }
      }
      for (var k = 0; k < friendArr.length - 1; k++) {
        var oppositeScoreDiff = moodScore - friendArr[k].OverallEmotionScore;
        if (oppositeScoreDiff > totalDiff) {
          totalDiff = oppositeScoreDiff;
          oppositeMoodyFriendname = friendArr[k].name;
        }
      }
      // console.log(friendArr);
      // console.log("closest score: " + totalDiff);
      // console.log("moody friend: " + moodyFriendname);
      // console.log("furthest score: " + oppositeScoreDiff);
      // console.log("opposite moody friend: " + oppositeMoodyFriendname);
      displayFriends();
    });
  }

  //display friend names
  function displayFriends() {
    var newFriendHeader = $(
      "<h5 class='display-4 py-2 text-truncate' id='subTitle'>" +
        "<span class='friend'>" +
        moodyFriendname +
        "</span>" +
        " feels like you!" +
        "</h5>"
    );

    var oppFriendHeader = $(
      "<h5 class='display-4 py-2 text-truncate' id='subTitle'>" +
        "<span class='friend'>" +
        oppositeMoodyFriendname +
        "</span>" +
        " feels opposite!" +
        "</h5>"
    );

    var chatButtonOne = $(
      "<br>" +
        "<button class='btn btn-primary'>Send a Message</button>" +
        "<br>"
    );

    var chatButton = $(
      "<br>" + "<button class='btn btn-primary'>Send a Message</button>"
    );

    $("#friend-name").html(newFriendHeader);

    if (moodScore <= -4) {
      var friendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_1.png'>" +
          "<br>"
      );
      var oppFriendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_4.png'>" +
          "<br>"
      );
      $("#friend-name").append(friendImg);
      $("#friend-name").append(chatButtonOne);
      $("#friend-name").append(oppFriendHeader);
      $("#friend-name").append(oppFriendImg);
      $("#friend-name").append(chatButton);
    } else if (moodScore <= -2 && moodScore > -4) {
      var friendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_1.png'>" +
          "<br>"
      );
      var oppFriendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_4.png'>" +
          "<br>" +
          "<br>"
      );
      $("#friend-name").append(friendImg);
      $("#friend-name").append(chatButtonOne);
      $("#friend-name").append(oppFriendHeader);
      $("#friend-name").append(oppFriendImg);
      $("#friend-name").append(chatButton);
    } else if (moodScore <= 2 && moodScore > -2) {
      var friendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_2.png'>" +
          "<br>"
      );
      var oppFriendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_3.png'>" +
          "<br>"
      );
      $("#friend-name").append(friendImg);
      $("#friend-name").append(chatButtonOne);
      $("#friend-name").append(oppFriendHeader);
      $("#friend-name").append(oppFriendImg);
      $("#friend-name").append(chatButton);
    } else if (moodScore <= 4 && moodScore > 2) {
      var friendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_3.png'>" +
          "<br>"
      );
      var oppFriendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_2.png'>" +
          "<br>"
      );
      $("#friend-name").append(friendImg);
      $("#friend-name").append(chatButtonOne);
      $("#friend-name").append(oppFriendHeader);
      $("#friend-name").append(oppFriendImg);
      $("#friend-name").append(chatButton);
    } else if (moodScore > 4) {
      var friendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_4.png'>" +
          "<br>"
      );
      var oppFriendImg = $(
        "<img class='center' id='friendImg' src='/assets/images/friend_1.png'>" +
          "<br>"
      );
      $("#friend-name").append(friendImg);
      $("#friend-name").append(chatButtonOne);
      $("#friend-name").append(oppFriendHeader);
      $("#friend-name").append(oppFriendImg);
      $("#friend-name").append(chatButton);
    }
  }
});
