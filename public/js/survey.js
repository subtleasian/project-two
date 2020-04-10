$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();

    var moodScore = 0;
    var pleasantScore = 0;
    var unpleasantScore = 0;
    var negativeArr = [];
    var positiveArr = [];

    // Example: [1, 1] = Length of 2 = 2 Checked boxes = 2 Points
    // [1, 1, 1] = Length of 3 = 3 Checked boxes = 3 Points

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

    postMood({
      UnpleasantScore: unpleasantScore,
      PleasantScore: pleasantScore,
      OverallEmotionScore: moodScore
    });

    function postMood(scores) {
      $.post("/api/scores", scores, function() {
        console.log("Mood scores have been added.");
      });

      //redirect to results page with id

    }
  });
});
