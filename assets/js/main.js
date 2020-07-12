$(window).on("load",function() {
	includeHTML();
	documentPrep(); 

	$('.readMore').click(function(evt) {
		window.scrollTo({
			top: $("header#header").innerHeight(),
			behavior:'smooth'
		});
	})
	
	$('.meetMeButton').click(function(evt) {
		console.log("a")
		window.scrollTo({
			top: $("#welcome").offset().top,
			behavior:'smooth'
		});
	})
}) 
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

function documentPrep() {
	equalizeHeight(".specialtyCard .content p",$(".specialtyCard").css("flex-basis") != "100%")
	equalizeHeight(".specialtyCard h3.specialtyTitle",$(".specialtyCard").css("flex-basis") != "100%")
	equalizeHeight(".question .questionTitle", $(".question").css("flex-basis") != "100%")
	setPortraitWidth();
}

function equalizeHeight(selector, condition) { 
	//Takes a collecion of elements, and sets all their heights equal to the largest height in the collection
	//If 'condition' is False, heights are not equalized
	if (condition) {
		var maxHeight = -1;
		$(selector).each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$(selector).each(function() {
			$(this).height(maxHeight); 
		});
	}
}

function setPortraitWidth() {
	$("section#welcome .inner img#portrait").height($("section#welcome .inner p").height()*0.9)
}

// html include from here https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
	  elmnt = z[i];
	  /*search for elements with a certain atrribute:*/
	  file = elmnt.getAttribute("w3-include-html");
	  if (file) {
		/* Make an HTTP request using the attribute value as the file name: */
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4) {
			if (this.status == 200) {elmnt.innerHTML = this.responseText;}
			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			/* Remove the attribute, and call this function once more: */
			elmnt.removeAttribute("w3-include-html");
			includeHTML();
		  }
		}
		xhttp.open("GET", file, true);
		xhttp.send();
		/* Exit the function: */
		return;
	  }
	}
  }