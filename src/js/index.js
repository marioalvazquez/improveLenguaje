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

$(document).ready(() =>{
  $('#clientForm').submit(ev => {
      ev.preventDefault();
      $('#clientForm').find('input[type="submit"]')
      .attr('disabled', true);
      $('#clientForm .loading-img').show();
      $.ajax({
        method: "POST",
        url: `register.php?${$('#clientForm').serialize()}`
      })
      .done(data =>{
        if (data == 1) {
          alert("We've received your data, thank you very much.");
          $('#clientForm').trigger('reset');
        }
        else{
          alert("Something went wrong, please try again later.");
        }
      })
      .fail(data=>{
        alert("Something went wrong, please try again later.");
      })
      .always(data=>{
        $('#clientForm .loading-img').hide();
        $('#contactForm').find('input[type="submit"]')
        .attr('disabled', false);
      });
      return false;
  });
  $('#contactForm').submit(ev => {
      ev.preventDefault();
      $('#contactForm').find('input[type="submit"]')
      .attr('disabled', true);
      $('#contactForm .loading-img').show();
      $.ajax({
        method: "POST",
        url: `register.php?${$('#contactForm').serialize()}`
      })
      .done(data =>{
        if (data == 1) {
          alert("We've received your data, thank you very much.");
          $('#contactForm').trigger('reset');
        }
        else{
          alert("Something went wrong, please try again later.");
        }
      })
      .fail(data=>{
        alert("Something went wrong, please try again later.");
      })
      .always(data=>{
        $('#contactForm .loading-img').hide();
        $('#contactForm').find('input[type="submit"]')
        .attr('disabled', false);
      });
      return false;
  });
});
