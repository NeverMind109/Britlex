$(function () {
  $(".menu-mobile").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("overflow-hidden");
    $(".menu-mobile-layout").toggleClass("menu-mobile-layout--active");
  });

  $(".menu__logo").on("click", mobileMenuClose);
  $(".menu__close").on("click", mobileMenuClose);
  $(".menu-mobile-layout").on("click", mobileMenuClose);
  $(".menu-list__link").on("click", mobileMenuClose);
  function mobileMenuClose() {
    $(".menu").removeClass("menu--active");
    $("body").removeClass("overflow-hidden");
    $(".menu-mobile-layout").removeClass("menu-mobile-layout--active");
  }

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 0,
        },
        200
      );
  });

  (function () {
    var forms = document.querySelectorAll(".needs-validation");

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
