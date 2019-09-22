$(document).ready(function () {
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-still').show();
            $('.hadouken').hide();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate(
                { 'left': '1020px' },
                1500,
                function () {
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '600px');
                }
            )
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            $('.hadouken').hide();
        });

    $('body').keydown(function (event) {
        if (event.which == 88) {    //88 == 'x'
            $('.ryu-throwing').hide();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        }
        console.log("keypress", event.which);
    })
        .keyup(function (event) {
            if (event.which == 88) {    //88 == 'x'
                $('.ryu-cool').hide();
                $('.ryu-still').show();
            }
        });

    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
});