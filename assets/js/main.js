/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		// $window.on('load', function() {
		// 	window.setTimeout(function() {
		// 		$body.removeClass('is-preload');
		// 	}, 100);
		// });

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);

$(document).ready(function() {
	setSpecialityCardHeight();
	setPortraitWidth();
})

$(window).resize(function() {
	setSpecialityCardHeight();
})

$('.readMore').click(function(evt) {
    window.scrollBy({
        top: $("header#header").innerHeight(),
        behavior:'smooth'
    });
})

function setSpecialityCardHeight() {
	//# Set height of specialty card content to be equal to the tallest one
	if ($(".specialtyCard").css("flex-basis") != "100%") {
		var maxHeight = -1;
		$(".specialtyCard .content p").each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$(".specialtyCard .content p").each(function() {
			$(this).height(maxHeight);
		});
		maxHeight = -1;
		$(".specialtyCard h3.specialtyTitle").each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$(".specialtyCard h3.specialtyTitle").each(function() {
			$(this).height(maxHeight);
		});
	}
}

function setPortraitWidth() {
	$("section#welcome .inner img#portrait").height($("section#welcome .inner p").height()*0.9)
}