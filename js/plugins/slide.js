function createSlick(){  

	$(".slider-a").not('.slick-initialized').slick({
                dots: false,
                arrows: false,
                autoplay: true,
                /*autoplaySpeed: 2500,*/
                pauseOnHover: false,
                infinite: true,
                speed: 700,
                swipe: false,
                fade: true,
                lazyLoad: 'ondemand',
                cssEase: 'linear'
        });

        $(".slider-b").not('.slick-initialized').slick({
                dots: false,
                arrows: false,
                /*autoplay: false,*/
                /*autoplaySpeed: 2500,*/
                pauseOnHover: false,
                infinite: true,
                speed: 700,
                swipe: false,
                fade: true,
                lazyLoad: 'ondemand',
                cssEase: 'linear'
        });

        setTimeout(function(){ 
                $('.slider-b').slick('slickPlay');
                }, 1500);

}

createSlick();

//Now it will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );