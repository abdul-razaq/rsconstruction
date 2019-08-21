$(document).ready(function() {
  $('#theTarget').skippr({
    transition: 'slide',
    speed: 1000,
    easing: 'easeOutQuart',
    navType: 'block',
    childrenElementType: 'div',
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 3000,
    keyboardOnAlways: true,
    hidePrevious: true,
  });
});

// Smooth scroll
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    1200,
    'linear'
  )
})