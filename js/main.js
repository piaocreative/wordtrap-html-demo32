$(document).ready(function(){

    // Range Slider
	if ( $( '[data-slider]' ).length ) {
		$( '[data-slider]' ).slider({});

		$( '#price_slider' ).on( 'slide', function( evt ) {
			$( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
		});
	}


	// QTY
	if ( $('.quantity').length ) {
		$('.quantity').each(function() {
			var $this = $(this);
			var $qty = $this.find('.qty');
			var $plusBtn = $this.find('#plus-btn');
			var $minusBtn = $this.find('#minus-btn');

			$plusBtn.click(function(evt) {
				evt.preventDefault();
				$qty.val(parseInt($qty.val()) + 1 );
			});
			$minusBtn.click(function(evt) {
				evt.preventDefault();
				$qty.val(parseInt($qty.val()) - 1 );
				if ($qty.val() == 0) {
					$qty.val(1);
				}
			});
		});
	}

    //Banner slider
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        dots: true,
        arrows: false,
        infinite: true,
        appendDots: $('#indicator'),
    });

    $('.banner').on('afterChange', function(event, slick, currentSlide){
      switch(currentSlide) {
        case 2:
            document.getElementById('logo1').classList.add('d-none');
            document.getElementById('logo2').classList.remove('d-none');
            document.getElementById('bluebag').classList.add('d-none');
            document.getElementById('whitebag').classList.remove('d-none');
            document.getElementById('redheart').classList.add('text-white');
            document.getElementById('redheart').classList.remove('text-red');
            document.getElementById('slick-slide-control00').classList.remove('banner1');
            document.getElementById('slick-slide-control01').classList.remove('banner1');
            document.getElementById('slick-slide-control02').classList.remove('banner1');
            document.getElementById('slick-slide-control00').classList.add('banner2');
            document.getElementById('slick-slide-control01').classList.add('banner2');
            document.getElementById('slick-slide-control02').classList.add('banner2');
            document.getElementById('indicator').querySelector('.slick-active').classList.remove('banner1');
            document.getElementById('indicator').querySelector('.slick-active').classList.add('banner2');
            document.getElementById('header').classList.remove('yellow-header');
            document.getElementById('header').classList.remove('blue-light-header');
            document.getElementById('header').classList.add('blue-dark-header');
            document.getElementById('socialsite-facebook').classList.remove('text-primary');
            document.getElementById('socialsite-facebook').classList.add('text-white');
            document.getElementById('socialsite-instagram').classList.remove('text-primary');
            document.getElementById('socialsite-instagram').classList.add('text-white');
            break;
        case 1:
            document.getElementById('logo1').classList.add('d-none');
            document.getElementById('logo2').classList.remove('d-none');
            document.getElementById('bluebag').classList.add('d-none');
            document.getElementById('whitebag').classList.remove('d-none');
            document.getElementById('redheart').classList.add('text-white');
            document.getElementById('redheart').classList.remove('text-red');
            document.getElementById('slick-slide-control00').classList.remove('banner1');
            document.getElementById('slick-slide-control01').classList.remove('banner1');
            document.getElementById('slick-slide-control02').classList.remove('banner1');
            document.getElementById('slick-slide-control00').classList.add('banner2');
            document.getElementById('slick-slide-control01').classList.add('banner2');
            document.getElementById('slick-slide-control02').classList.add('banner2');
            document.getElementById('indicator').querySelector('.slick-active').classList.remove('banner1');
            document.getElementById('indicator').querySelector('.slick-active').classList.add('banner2');
            document.getElementById('header').classList.remove('blue-light-header');
            document.getElementById('header').classList.remove('blue-dark-header');
            document.getElementById('header').classList.add('yellow-header');
            document.getElementById('socialsite-facebook').classList.remove('text-primary');
            document.getElementById('socialsite-facebook').classList.add('text-white');
            document.getElementById('socialsite-instagram').classList.remove('text-primary');
            document.getElementById('socialsite-instagram').classList.add('text-white');
            break;
        default:
            document.getElementById('logo2').classList.add('d-none');
            document.getElementById('logo1').classList.remove('d-none');
            document.getElementById('whitebag').classList.add('d-none');
            document.getElementById('bluebag').classList.remove('d-none');
            document.getElementById('redheart').classList.remove('text-white');
            document.getElementById('redheart').classList.add('text-red');
            document.getElementById('slick-slide-control00').classList.remove('banner2');
            document.getElementById('slick-slide-control01').classList.remove('banner2');
            document.getElementById('slick-slide-control02').classList.remove('banner2');
            document.getElementById('slick-slide-control00').classList.add('banner1');
            document.getElementById('slick-slide-control01').classList.add('banner1');
            document.getElementById('slick-slide-control02').classList.add('banner1');
            document.getElementById('indicator').querySelector('.slick-active').classList.remove('banner2');
            document.getElementById('indicator').querySelector('.slick-active').classList.add('banner1');
            document.getElementById('header').classList.remove('yellow-header');
            document.getElementById('header').classList.remove('blue-dark-header');
            document.getElementById('header').classList.add('blue-light-header');
            document.getElementById('socialsite-facebook').classList.remove('text-white');
            document.getElementById('socialsite-facebook').classList.add('text-primary');
            document.getElementById('socialsite-instagram').classList.remove('text-white');
            document.getElementById('socialsite-instagram').classList.add('text-primary');
            break;
      }
    });

    //Logo slider

    $('.logos').slick({
        infinite: true,
        dots: false,
        arrows: false,
        speed: 800,
        rtl: false,
        cssEase: 'linear',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                },
            },
        ],
    });
});