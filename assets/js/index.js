$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: !0,
    margin: 30,
    autoplay: !0,
    autoplayHoverPause: !0,
    slideBy: 3,
    mouseDrag: !1,
    dotsContainer: ".owl-dots",
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $(".navBtnHome").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#Home").offset().top
    }, 2000);
  });
  $(".navBtnWorks").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
  });
  $(".navBtnPortal").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#portal").offset().top
    }, 2000);
  });
  $(".navBtnAbout").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
  });
  $(".navBtnService").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 2000);
  });
  $(".navBtnPricing").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#pricing").offset().top
    }, 2000);
  });
  $(".navBtnContact").click(function() {
    $("#ms-navbar .nav-item").removeClass("active");
    $(this).closest("li").addClass("active");
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
  });
});