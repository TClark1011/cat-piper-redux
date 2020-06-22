function toggleNav() {
    if ($("nav").hasClass("open")) {
        $("nav").removeClass("open"); 
    } else {
        $("nav").addClass("open"); 
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