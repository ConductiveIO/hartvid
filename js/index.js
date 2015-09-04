$('document').ready(function() {
	
	// TUBULAR DUDE
	var options = { videoId: 'p0enuG9uJYY'
					, mute: false
					, volumeUpClass: 'tubular-volume-up'
					, volumeDownClass: 'tubular-volume-down'
					, increaseVolumeBy: 10
		};
	$('#wrapper').tubular(options);

	// PARADIGM SHIIIIFT
	$('#inset').hover(
		//mouse-in
		function() {
			$('.visible.content').css({
			    "webkitTransform":"translateX(100%)",
			    "MozTransform": "translateX(100%)",
			    "msTransform": "translateX(100%)",
			    "OTransform": "translateX(100%)",
			    "transform": "translateX(100%)"
			});
		},
		function() {
			$('.visible.content').css({
			    "webkitTransform":"translateX(0%)",
			    "MozTransform": "translateX(0%)",
			    "msTransform": "translateX(0%)",
			    "OTransform": "translateX(0%)",
			    "transform": "translateX(0%)"
			});
		}
	);
});

$(window).on('load', function() {
   $("#info").css({"opacity": "1"});
});