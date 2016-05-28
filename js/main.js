$(window).load( function() {
    $('body').animate({
        'background-size' : '200%'
    });

    var audio = new Audio('assets/abrasive.mp3');
    audio.play();
});