$(function () {
  $(".menu__mobile").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("overflow-hidden");
    $(".menu__mobile-layout").toggleClass("menu__mobile-layout--active");
  });

  $(".menu__logo").on("click", mobileMenuClose);
  $(".menu__close-button").on("click", mobileMenuClose);
  $(".menu__mobile-layout").on("click", mobileMenuClose);
  $(".menu-list__link").on("click", mobileMenuClose);
  function mobileMenuClose() {
    $(".menu").removeClass("menu--active");
    $("body").removeClass("overflow-hidden");
    $(".menu__mobile-layout").removeClass("menu__mobile-layout--active");
  }

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 60,
        },
        800
      );
  });
});
