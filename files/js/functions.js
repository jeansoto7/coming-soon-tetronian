// Signup Forms
$(function(){
  $('.form-display .mc-field-group input').focusout(function(){
    var text_val = $(this).val();
    if(text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });
});

// $(function() {
//   // dsss
//   smoothScroll(300);
// });

// Stop Image being Draggable
$('img').attr('draggable', 'false');

// Glitch
function toggleGlitch(){

	var $glitchContainter = $('.sliced-content');
  var $glitchDiv =  $('.glitch');
	var $glitchIn =  $('.glitchIn');

	$glitchDiv.mgGlitch({
	  destroy: false,
	  glitch: true,
	  scale: true,
	  blend: true,
	  blendModeType: "hue",
	  glitch1TimeMin: 200,
	  glitch1TimeMax: 400,
	  glitch2TimeMin: 10,
	  glitch2TimeMax: 100
	});
	setTimeout(function(){
		$glitchDiv.mgGlitch({
			destroy: true
		});
	}, 1000);

	setInterval(function(){
      $glitchIn.toggleClass('glitchOut');
  }, 1000);
}

$(function(){
  setInterval(function(){toggleGlitch();}, 4000);
});

// // Mobile Nav Toggle
// $(function(){
//   $('.span-toggle').click(function() {
//     $('.span-toggle').toggleClass('is-open');
//   });
// });

// Mobile Nav Toggle
$(function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-header').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-header').addClass('is-open'); }
  });
})
