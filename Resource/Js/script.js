$(document).ready(function(){
// ----------Sticky Navigation-----------//
$('.js--section-feature').waypoint(function(direction){
    if(direction == 'down'){
        $('nav').addClass('sticky');
        // $('main-nav').css('display','block');
    }else{
        $('nav').removeClass('sticky');
       
    }
},{
    offset:'30%'
})
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plan').offset().top},1000);
    })

    $('.js-scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},1000);
    })

    $('.f-deliver').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},1000);
    })

    $('.h-work').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-step').offset().top},1000);
    })

    $('.o-cities').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-city').offset().top},1000);
    })

    $('.s-up').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plan').offset().top},1000);
    })

//Animation On scroll//

    $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
    }, {offset:"50%"
    })

    $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
    }, {offset:"50%"
    })

    $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
    }, {offset:"50%"
    })

    $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
    }, {offset:"50%"
    })
// Mobile Nav

    $('.js--nav-icon').click(function(){
    var nav = $('.main-nav');
    var icon = $('.js--nav-icon i');
    // var mainnav =$(".js--nav-main");
    nav.toggleClass("js--nav-main");
    
    if(icon.hasClass('fa-bars')){
        icon.addClass(' fa-times');
        icon.removeClass(' fa-bars');
       
    }
    else{
        icon.addClass(' fa-bars');
        icon.removeClass(' fa-times');
    }
   
    })

   
})