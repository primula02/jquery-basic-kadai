// 文字色が変わる
$(function () {
  $("#change-color").on("click", function () {
    $("#target").css("color", "red");
  });

// 文字内容が変わる
$("#change-text").on("click", function () {
  $("#target").css("color", "red");
  $("#target").text("Hello!");
  });

// フェードアウトで文字が消える
$("#fade-out").on("click", function () {
  $("#target").fadeOut()
  });

// フェードインで文字が現れる
$("#fade-in").on("click", function () {
  $("#target").fadeIn();
  });
});

