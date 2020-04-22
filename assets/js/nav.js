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

// $(document).scroll(function() {
//     // var buttonOffset =  $(document).scrollTop() + 16;
//     $("button#navToggle").css("top", $(document).scrollTop() + 16);
//     $("nav").css({
//         top     :    $(document).scrollTop(),
//         height  :   '120vh'
//     }); //120vh because android phones handle vh weirdly with bottom toolbar
// });