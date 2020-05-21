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

$('.readMore').click(function(evt) {
    window.scrollBy({
        top: $("header#header").innerHeight(),
        behavior:'smooth'
    });
})

function documentPrep() {
	equalizeHeight(".specialtyCard .content p",$(".specialtyCard").css("flex-basis") != "100%")
	equalizeHeight(".specialtyCard h3.specialtyTitle",$(".specialtyCard").css("flex-basis") != "100%")
	equalizeHeight(".question .questionTitle", $(".question").css("flex-basis") != "100%")
	setPortraitWidth();
}

function equalizeHeight(selector, condition) {
	condition = condition || true
	if (condition) {
		var maxHeight = -1;
		$(selector).each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$(selector).each(function() {
			$(this).height(maxHeight);
			// $(this).css("min-height",maxHeight)
		});
	}
}

function setPortraitWidth() {
	$("section#welcome .inner img#portrait").height($("section#welcome .inner p").height()*0.9)
}

// $(document).ready(documentPrep())
// $(window).resize(documentPrep())
document.onload = documentPrep();