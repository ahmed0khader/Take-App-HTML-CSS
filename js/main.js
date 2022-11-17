//Slider 100vh :)
$(function (){
    //Featured Work Shuffle
    $('.work .position-relative ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle-imges .col-md ').css('opacity', 1);
        }else{
            $('.shuffle-imges .col-md').css('opacity', '.07');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});