jQuery(document).ready(function($) {

    if(jQuery('.slideshow-01 .home-slideshow-wrapper').length){
        jQuery('.slideshow-01 .home-slideshow-wrapper').each(function(index,value){

            let _delay_time = jQuery(value).data('time') * 1000;
            let _animation = jQuery(value).data('animation');

            let swiper = new Swiper('.swiper-container-1', {

                loop: true,
                pagination: {
                    el: '.swiper-pagination-01',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next-01',
                    prevEl: '.swiper-button-prev-01',
                },
                spaceBetween: 0,
                effect: _animation,


                setWrapperSize: false,
                on: {
                    imagesReady: function (swiper) {
                        $('.home-slideshow').find('.swiper-slide').each(function(){
                            let _this = $(this);
                            _this.find('.video-slide').show();

                            if (!_this.find('.video-slide').data('full-height')) {
                                _this.find('.video-slide video').css({
                                });
                            }
                            else{
                                _this.find('.video-slide video').css({
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                });
                            }
                        });
                    }
                }
            });
        });
    }

});
