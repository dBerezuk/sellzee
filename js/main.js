$(document).ready(function(){
    $('.users-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: false,
        fade: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../images/arrow.svg" alt="icon arrow"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../images/arrow.svg" alt="icon arrow"></button>'
    });
    $('.date-btn').on('click',function(){
        $('.date-btn').removeClass('bg-orange text-white').addClass('bg-orange01 text-orange');
        $(this).removeClass('bg-orange01 text-orange').addClass('bg-orange text-white');
       $('.price').addClass('hidden');
       $('.price[data-date=' + $(this).attr('data-date') + ']').removeClass('hidden');
    });
    $('.menu-btn').on('click',function(){
        let menu = $('.menu');
        $('body').toggleClass('fixed h-full w-full overflow-hidden');
        if(menu.hasClass('translate-y-[-100%]')){
            $('.menu').removeClass('translate-y-[-100%]').addClass('translate-y-[0%]');
        }
        else{
            $('.menu').removeClass('translate-y-[0%]').addClass('translate-y-[-100%]');
        }
    });
});