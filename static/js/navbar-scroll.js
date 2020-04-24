
  $(window).scroll(function () {
    // $('#navigation .navbar').toggleClass('scrolled-nav', $(this).scrollTop() > 50);
    if ($(document).scrollTop() > 100) {
      $('#navigation .navbar').addClass('scrolled-nav');
    } else {
      $('#navigation .navbar').removeClass('scrolled-nav');
    }
  });