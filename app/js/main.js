$(function () {
  $(".menu__mobile").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("overflow-hidden");
    $(".menu-list__link").on("click", function () {
      $(".menu").removeClass("menu--active");
      $("body").removeClass("overflow-hidden");
    });
    $(".logo").on("click", function () {
      $(".menu").removeClass("menu--active");
      $("body").removeClass("overflow-hidden");
    });
  });
});
