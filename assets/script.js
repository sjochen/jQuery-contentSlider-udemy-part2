$(document).ready(function () {
    //Set Options
    let speed = 500;  //fade speed
    let autoswitch = true;  //Auto Slider option
    let autoswitch_speed = 4000; //Auto slider speed

    //Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //Show first slide
    $('.active').show();

    //Next handler
    $('#next').on('click', nextSlide);

    //Previous handler
    $('#previous').on('click', prevSlide);


    if (autoswitch === true) {
        setInterval(nextSlide, autoswitch_speed)
    }

    //Switch to next slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        }else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    };

    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        }else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    };
});