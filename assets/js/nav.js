function toggleNav() {
    if ($("nav").hasClass("open")) {
        $("nav").removeClass("open");
        // $("button#navToggle").css("left", "0");
    } else {
        $("nav").addClass("open");
        // var navWidth = parseInt($("nav").css("width").replace('px', ''));
        // $("button#navToggle").css({
        //     transition  :   "left 0.5s",
        //     left        :   navWidth
        // });
    }
}

$('body').click(function(evt){ 
    var onButton = $(evt.target).is($("button#navToggle, button#navToggle span"))
    var outsideNavWhileOpen =  !$(evt.target).is("nav") && $("nav").hasClass("open")
    if (onButton || outsideNavWhileOpen) {
        toggleNav();
    } 
});

$('body')

$('body').on('touchstart', function(evt){ 
    if($('nav').hasClass('open')) {
        toggleNav();
    }
});

$('nav').on('touchstart',function(evt) {
    evt.stopPropagation();
})

$(document).ready(function() {
	$(".spotlight .image").css({'height':$(".spotlight .image").first().width() + "px"})
})

$(window).resize(function() {
	$(".spotlight .image").css({'height':$(".spotlight .image").first().width() + "px"})
	// $("h2.contactIcon").css({'height':$("h2.contactIcon").first().width() + "px"})
})

$('.readMore').click(function(evt) {
    window.scrollBy({
        top: $("header#header").innerHeight(),
        behavior:'smooth'
    });
})