$(document).ready(function() {

  // 🌙 切換黑/白主題
  $("#themeToggle").click(function() {
    $("body").toggleClass("dark");

    if ($("body").hasClass("dark")) {
      $("#themeToggle").text("切換成亮色模式");
    } else {
      $("#themeToggle").text("切換成暗色模式");
    }
  });

  // 🎉 顯示訊息
  $("#btnShow").click(function() {
    $("#msg")
      .hide()
      .html("🎉 嗨！🎉")
      .fadeIn(800);
  });
});
