function _scroll(){
    var scrollTop =$(window).scrollTop();
    var scrrTop=$('.scrr').offset().top
    var windowHeight=$(window).height(); 
    var flag=scrrTop-windowHeight;
    if(scrollTop<10){
       $('.nav').css('opacity',0.1);
    }else{  
        
        $('.nav').css('opacity',1); 
    }
    
    if(scrollTop>flag){
      $(".scrr").animate({left: '0'}, 1500);
      $(".scrrR").animate({left: '0'}, 1500);
    }
   
}
$(window).on('scroll',function() {
    _scroll()
});