

	$('.thumbs-a').slick({
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

			
	/*$('.thumbs').slick('slickPause');*/

	

	$('.thumbs-b').slick({
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
	$('.thumbs-b').slick('slickPlay');
	}, 1500);

	