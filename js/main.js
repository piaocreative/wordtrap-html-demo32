$(document).ready(function(){

    // Nav-Brand
    document.getElementById('logo1').addEventListener('mouseover', function(){
        document.getElementById('logo1').classList.add('d-none');
        document.getElementById('logo2').classList.remove('d-none');
    });

    document.getElementById('logo2').addEventListener('mouseout', function(){
        document.getElementById('logo2').classList.add('d-none');
        document.getElementById('logo1').classList.remove('d-none');
    });

    // Top bag icon
    document.getElementById('bluebag').addEventListener('mouseover', function(){
        document.getElementById('bluebag').classList.add('d-none');
        document.getElementById('whitebag').classList.remove('d-none');
    });

    document.getElementById('whitebag').addEventListener('mouseout', function(){
        document.getElementById('whitebag').classList.add('d-none');
        document.getElementById('bluebag').classList.remove('d-none');
    });

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
            document.getElementById('header').classList.remove('yellow-header');
            document.getElementById('header').classList.remove('blue-light-header');
            document.getElementById('header').classList.add('blue-dark-header');
            break;
        case 1:
            document.getElementById('header').classList.remove('blue-light-header');
            document.getElementById('header').classList.remove('blue-dark-header');
            document.getElementById('header').classList.add('yellow-header');
            break;
        default:
            document.getElementById('header').classList.remove('yellow-header');
            document.getElementById('header').classList.remove('blue-dark-header');
            document.getElementById('header').classList.add('blue-light-header');
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
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
});