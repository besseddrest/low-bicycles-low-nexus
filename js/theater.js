/*
 * Custom slide logic in jQuery
 **/

jQuery(document).ready(function() {
  // make slide 1 clickable on load
  jQuery('.slide-1').css('z-index', 1);

  var counter = 2;

  var interval = setInterval(function(){

    // remove the slide-on from current visible slide
    jQuery('.slide-on').removeClass('slide-on');

    // add slide-on class to next slide
    jQuery('.slide-' + counter).addClass('slide-on');

    bringToFront();

    // reset counter to 1 if we are on the last slide
    if (counter === 6) {
      counter = 1;
    } else {
      counter++;
    }

  }, 5000);

  // brings current slide to front, after the transition
  // necessary to make each individual slide clickable
  function bringToFront() {
    // move `old` slide to back
    if (counter === 1) {
      jQuery('.slide-6').css('z-index', 0);
    } else {
      jQuery('.slide-' + (counter-1)).css('z-index', 0);
    }

    // bring `new` slide to front
    jQuery('.slide-' + counter).css('z-index', 1);
  }
});
