$(document).ready(function () {
  $("#doggoButton").on("click", getDoggo);
});


const getDoggo = function(){
  $.ajax({
    url: "https://dog.ceo/api/breed/pomeranian/images/random",
    cache:true,
    // accepts:"application/JSON",
    // headers: {Accept : "text/plain" },
    type:"GET",
    // contentType: 'application/json; charset=utf-8',
    success: function(result) {
      console.log(result);
      $(".doggo").attr("src",result.message);
    },
    error: function(textStatus,errorThrown){
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
  $.ajax({
    url: "https://dog.ceo/api/breed/pomeranian/images/random",
    // accepts:"application/JSON",
    // headers: {Accept : "text/plain" },
    cache:true,
    type:"GET",
    // contentType: 'application/json; charset=utf-8',
    success: function(result) {
      console.log(result);
      $(".doggo2").attr("src",result.message);
    },
    error: function(textStatus,errorThrown){
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
};
