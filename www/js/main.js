$(function() {
    $(".landing-window__close-btn").click(function (){
        $(this).parent().slideUp();
    });

    $navLinkStateFlag = 0;
    $(".site-navbar__logo-bar").click(function (){
        if($navLinkStateFlag === 0){
            $(".site-navbar__links").slideDown();
            $navLinkStateFlag = 1;
        } else {
            $(".site-navbar__links").slideUp();
            $navLinkStateFlag = 0;
        }
    });

    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();

    $(".site-navbar__links a").on("click", function(e) {
        e.preventDefault();
        var $url = $(this).attr("href");
        $(this).parent().slideUp();
        $navLinkStateFlag = 0;
        $('body').fadeOut(500, function(){
            $(this).load($url, function(){
                window.history.pushState(null,$url,$url);
                $(this).fadeIn();
            });
        });
    });

});