(function ($) {
    ("use strict");
     /*-- recent project slider --*/
     var collectionsSlider = $(".collections-slider");
     if (collectionsSlider.length) {
         $('.collections-slider').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             autoplay: false,
             arrows: true,
             fade: false,
             autoplaySpeed: 3000,
         });
     }
    

   


    

})(jQuery);