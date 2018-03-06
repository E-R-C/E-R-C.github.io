var tfAns = "true";
var cor_score = 0;
var wrong_score = 0;
$(document).ready(function () {
  // getQuestions();
  $("#newQ").on("click", getQuestions);
  $("#TrueButton").on("click", onTrueClick);
  $("#FalseButton").on("click", onFalseClick);
});

const rightCallback = function() {
  $("#TrueButton").prop("disabled",true);
  $("#FalseButton").prop("disabled",true);
  cor_score += 1;
  $("#correct_score").html(cor_score);
}
const wrongCallback = function() {
  $("#TrueButton").prop("disabled",true);
  $("#FalseButton").prop("disabled",true);
  wrong_score += 1;
  $("#correct_score").html(wrong_score);
}
const onTrueClick = function(){
  if (tfAns == "true"){
      rightCallback();
  } else {
    wrongCallback();
  }
}

const onFalseClick = function(){
  if (tfAns == "false"){
    rightCallback();
  } else {
    wrongCallback();
  }
}

const getQuestions = function() {
  $.ajax({
    url: "https://opentdb.com/api.php?amount=1&type=boolean",
    success: function(result) {
      var obj = result.results[0];
      $("#Category").html(obj.category);
      $("#questionText").html(obj.question);
      tfAns = obj.correct_answer;
    }
  });
  $("#TrueButton").prop("disabled",false);
  $("#FalseButton").prop("disabled",false);
}
