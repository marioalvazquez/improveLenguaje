  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

$(window).scroll(() =>{
  if (window.pageYOffset > 200) {
    $('header').addClass('blue')
  }
  else{
    $('header').removeClass('blue')
  }
});
$('#toggleMenu').on('click', ev =>{
  ev.preventDefault();
  var $iconMenu = $('#toggleMenu').find('span');
  var isOpening = $iconMenu.attr('class') == 'icon-menu';
  $iconMenu.removeClass();
  if (isOpening) {
    $iconMenu.addClass('icon-close');
    $('.mobile-menu').css({
      "width": "100%"
    });
    $('body').css({
      "overflow-y": "hidden"
    });
  }
  else{
    $iconMenu.addClass('icon-menu');
    $('.mobile-menu').css({
      "width": "0%"
    });
    $('body').css({
      "overflow-y": "initial"
    });
  }

});
