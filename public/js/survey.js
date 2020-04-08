$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    // Integer variable to add negative points
    var negPoints = 0;
    var posPoints = 0;

    // Function that counts number of negative checked boxes
    function countCheckedNeg() {
      var anyBoxesChecked = false;
      $("#negative" + ' input[type="checkbox"]').each(function() {
        if ($(this).is(":checked")) {
          anyBoxesChecked = true;
          negPoints += negPoints;
        }
      });
      console.log(negPoints);
    }

    countCheckedNeg();
    // // Negative Emotions
    // senseOfLossInput
    // ashamedInput
    // badInput
    // despicableInput
    // disappointedInput
    // discouragedInput
    // dissatisfiedInput
    // guiltyInput
    // powerlessInput
    // sulkyInput

    // //  Positive Emotions
    // boldInput
    // braveInput
    // confidentInput
    // determinedInput
    // eagerInput
    // enthusiasticInput
    // hopefulInput
    // inspiredInput
    // optimisticInput
    // reenforcedInput
    if ($("#boldInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#braveInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#confidentInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#determinedInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#eagerInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#enthusiasticInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#hopefulInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#inspiredInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#optimisticInput").is(":checked")) {
      posPoints += 1;
    };
    if ($("#reenforcedInput").is(":checked")) {
      posPoints += 1;
    }
  });

  // Integer type variable to add positive points

  // Final mood point calculater (positive - negative)
});
