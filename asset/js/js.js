$(document).ready(function(){
    var  scrollTop =0;
    $(window).scroll(function(){
        scrollTop =$(window).scrollTop();
        if(scrollTop > 0){
            $('.navbar').addClass('scrlled');
        }
        else if (scrollTop==0){
            $('.navbar').removeClass('scrlled');
        }

    });

});