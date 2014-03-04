console.log('\'Allo \'Allo!');

$("#story").hide();

// event handler
$("#btn-click").click(function() {
  $(".adjective1").empty().append($("input.adjective1").val());
  $(".adjective2").empty().append($("input.adjective2").val());
  $(".adjective3").empty().append($("input.adjective3").val());
  $(".adjective4").empty().append($("input.adjective4").val());
  $(".adjective5").empty().append($("input.adjective5").val());
  $(".adjective6").empty().append($("input.adjective6").val());
  $(".adverb").empty().append($("input.adverb").val());
  $(".plural-noun").empty().append($("input.plural-noun").val());

$("#story").show();

$(':input').val('');

$("#questions").hide();

});

$("#play-btn").click(function(e) {
  $("#questions").show();
  $("#story").hide();
});
