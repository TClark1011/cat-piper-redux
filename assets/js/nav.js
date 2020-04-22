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
    if ($(evt.target).is($("button#navToggle, button#navToggle span"))) {
        toggleNav();
    } //else if (!$(evt.target).is($("nav"))) {
    else if (!$(evt.target).is("nav") && $("nav").hasClass("open")) {
        //# If any element other than nav menu is clicked
        toggleNav();
    }
});

$('body').on('touchstart', function(evt){ 
    if ($(evt.target).is($("button#navToggle, button#navToggle span"))) {
        toggleNav();
        evt.stopPropagation();
    } //else if (!$(evt.target).is($("nav"))) {
    else if (!$(evt.target).is("nav") && $("nav").hasClass("open")) {
        //# If any element other than nav menu is clicked
        evt.stopPropagation();
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