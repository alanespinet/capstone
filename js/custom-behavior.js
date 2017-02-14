(function(){
  var screenHeight = $(window).innerHeight();
  var firstRange = { min: screenHeight, max: screenHeight * 2 };
  var secondRange = { min: screenHeight * 3, max: screenHeight * 4 };

  var isPhotoClicked = false;
  var yMultiplier = 0;

  $(window).on('scroll', setCorrectMenuColor);


  $('#menu-home').on('click', function(){ yMultiplier = 0; moveScreen(); });
  $('#menu-skills').on('click', function(){ yMultiplier = -1; moveScreen(); });
  $('#menu-work').on('click', function(){ yMultiplier = -2; moveScreen(); });
  $('#menu-about').on('click', function(){ yMultiplier = -3; moveScreen(); });
  $('#menu-contact').on('click', function(){ yMultiplier = -4; moveScreen(); });


  function moveScreen(){
    var screenHeight = $(window).innerHeight();
    var newScreensWrapperPosition = (screenHeight * yMultiplier) + 'px';
    $('#screens-wrapper').css('top', newScreensWrapperPosition);
    resetCorrectMenuColor();
  }

  function setCorrectMenuColor(){
    var scrollTop = document.body.scrollTop;
    if((scrollTop >= firstRange.min && scrollTop <= firstRange.max) ||
       (scrollTop >= secondRange.min && scrollTop <= secondRange.max)) {
      $('#header-menu nav').removeClass('dark').addClass('light');
    } else {
      $('#header-menu nav').removeClass('light').addClass('dark');
    }
  }

  function resetCorrectMenuColor(){
    if(yMultiplier % 2 === 0) {
      $('#header-menu nav').removeClass('light').addClass('dark');
    } else {
      $('#header-menu nav').removeClass('dark').addClass('light');
    }
  }


  $('#my-main-hoto').on('mouseenter', function(){
    if(!isPhotoClicked)
      TweenMax.to('#my-main-hoto', .3, { scale: 1.1, repeat: -1, yoyo: true });
  });


  $('#my-main-hoto').on('mouseleave', function(){
    if(!isPhotoClicked)
      TweenMax.to('#my-main-hoto', .3, { scale: 1 });
  });


  $('#my-main-hoto').on('click', function(){
  });


})();
