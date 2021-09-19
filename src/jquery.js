//галерея
function previewImage(path) {
  $('<img src="' + path + '">').load(function () {
    $("#preview").empty();
    $(this).width("auto").height("300px").appendTo("#preview");
  });
}

var cur_image = 0;

var my_images = ["./Images/image1.jpg", "./Images/image2.jpg", "./Images/image3.jpg", "./Images/image4.jpg"];

$(document).ready(function () {
  $("#preview_next").click(function () {
    if (cur_image < my_images.length - 1) {
      cur_image++;
      $("#progressBar").append('<div id="bar"></div>');
      // percentage of completion
      var progress = "0%";
      // Animate the #bar div
      $("#bar").animate(
        {
          width: progress,
        },
        0
      );
      $("#progressBar").append('<div id="bar"></div>');
      // percentage of completion
      var progress = "100%";
      // Animate the #bar div
      $("#bar").animate(
        {
          width: progress,
        },
        400
      );
      previewImage(my_images[cur_image]);
    }
  });
  $("#preview_prev").click(function () {
    if (cur_image > 0) {
      cur_image--;
      $("#progressBar").append('<div id="bar"></div>');
      // percentage of completion
      var progress = "0%";
      // Animate the #bar div
      $("#bar").animate(
        {
          width: progress,
        },
        0
      );
      $("#progressBar").append('<div id="bar"></div>');
      // percentage of completion
      var progress = "100%";
      // Animate the #bar div
      $("#bar").animate(
        {
          width: progress,
        },
        400
      );
      previewImage(my_images[cur_image]);
    }
  });
  //прогресс бар
  $("#progressBar").append('<div id="bar"></div>');
  // percentage of completion
  var progress = "100%";
  // Animate the #bar div
  $("#bar").animate(
    {
      width: progress,
    },
    400
  );
  previewImage(my_images[cur_image]);
});
//аккардион
$(document).ready(function () {
  //страница загрузилась
  $("ul.akkordeon li > p").click(function () {
    //при клике на пункт меню:
    $(this).toggleClass("active"); //делаем данный пункт активным/неактивным
    $(this).next("div").slideToggle(200); //раскрываем/скрываем следующий за "кликнутым" p блок div с эффектом slide
  });
});
//Дата
$(function () {
  $("#datepicker").datepicker();
});
//shake
$(function () {
  $("#button").click(function () {
    $(".target").effect("shake", { times: 4 }, 1000);
  });
});
