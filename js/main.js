$(function () {
    
    'use strict';
    
    var navbar = $('.navbar');
    $(window).scroll(function (){
        
        if ($(window).scrollTop() >= navbar.height())
        {
            navbar.addClass('scrolled');
        } else {
            
            navbar.removeClass('scrolled');
        }
        
    });
    
    // change tabs selected
    $('.tab-switch li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
        $('.tabs .tabs-content div').hide();
          
        $('.' + $(this).data('class')).fadeIn(1000);
            

        
        
            
        
        
    });
    
});