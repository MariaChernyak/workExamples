var equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};


$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true

    });

    $('.responsive-calendar').responsiveCalendar(
        {startFromSunday: true}
    );
    equalheight('div.block-link > a');

    /* var heights = [];

     $("div.block-link > a").each(function (indx) {
     heights.push($(this).height());
     });
     $("div.block-link > a").height(function (indx, val) {
     return Math.max.apply(null, heights);
     });
     */
 $('.nav-mobile').hide()  .click(function (event) {

        event.stopPropagation();

    });
    $('.backing').hide()  .click(function (event) {

        event.stopPropagation();

    });



    $('.mobile-menu').click(function(){
        $('.nav-mobile').slideToggle();
        $('.backing').slideToggle();
    });

    $('.backing').click(function(){
        $('.nav-mobile').slideToggle();
        $('.backing').hide();

    });


    $('.menu > li > ul').hide()

        .click(function (event) {

            event.stopPropagation();

        });

    $('.menu  > li').click(function () {
        var selfClick = $(this).find('ul:first').is(':visible'); // (1)
        if (!selfClick) {  //(2)
            $(this)
                .parent()
                .find('> li ul:visible')
                .slideToggle();

        }

        $(this)
            .find('ul:first')
            .stop(true, true)
            .slideToggle();

        var selfClass = $(this).hasClass("active");
        if (!selfClass){

                $(this).parent()
                .find('> li.active')
                .toggleClass("active");

        }

            $(this)
            .toggleClass("active");


    });


});
window.onload = function () {
    equalheight('div.block-link > a');
};
$(window).resize(function () {
    equalheight('div.block-link > a');

    if ($(window).width() > 767){
        $('.backing').hide();
        $('.nav-mobile').hide();

    }
})