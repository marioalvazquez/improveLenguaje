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
