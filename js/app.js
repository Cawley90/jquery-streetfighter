$(document).ready(function() {
  
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  
  })
  
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  
  })
  
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
  	$('.hadouken').finish().show()
  	.animate(
    	{'left': '1420px'},
    	500,
    	function() {
      	$(this).hide();
      	$(this).css('left', '466px');
    	}
  );
  
  })
  
  .mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  
  });

  $(document).keydown(function(e){
  	if(e.which == 88) {
  	playSong();	
  	$('.ryu-ready').hide();
   	$('.ryu-cool').show();
   	
  		}
	  
  	})

  .keyup(function(e){
  	if(e.which == 88) {
  		$("#ssj3")[0].pause();
		$('.ryu-cool').hide();
  		$('.ryu-ready').show();

  	}
  	
  	});

});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.6;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();

}

function playSong () {
	$('#ssj3')[0].volume = 0.5;
	$('#ssj3')[0].play();

}