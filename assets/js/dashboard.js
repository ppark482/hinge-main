(function ($) {

	var dashboardItems = [
		{
			'title' 	: 'Home',
			'tag'		: 'intro',
			'option' 	: ''
		},
		{
			'title' 	: 'About',
			'tag'		: 'about',
			'option' 	: 'Hinge offers web development by web developers. No sales people to deal with. No client engagement. Just clean, modern and fast development.'
		},
		{
			'title' 	: 'Our Work',
			'tag'		: 'folio',
			'option' 	: ''
		},
		{
			'title' 	: 'Contact Us',
			'tag'		: 'contact',
			'option' 	: 'hello@hingeinc.co'
		}
	];

	var portfolioImgs = ['folio01.png', 'folio02.png', 'folio03.png', 'folio04.png', 'folio05.png', 'folio06.png', 'folio01.png', 'folio02.png', 'folio03.png', 'folio04.png', 'folio05.png', 'folio06.png'];

	var $container = $('.container');

	function buildDashboard () {
		for ( var i = 0; i < dashboardItems.length; i++ ) {
			$('.dashboard').append('<li data-tag="' + dashboardItems[i].tag + '" data-option="' + dashboardItems[i].option + '">' + dashboardItems[i].title + '</li>');
		}
		customEvents();
	}

	function customEvents () {
		var dashItem = $('.dashboard > li');
		dashItem.each( function () {
			var self = $(this);

			// Begin custom events

			// Intro
			if ( self[0].dataset.tag === 'intro' ) {
				self.on('click', function () {
					$container.html('<section class="hero animated fadeIn"><img id="hero-logo" src="img/logo.png"><img id="inc" class="animated" src="img/hinge_inc.png"></section>');
				});
			}

			// About Us
			if ( self[0].dataset.tag === 'about' ) {
				self.on('click', function () {

					if ($('#about-message').length) {
						$('#about-message').remove();
						return;
					} else {
						$container.html('<div class="animated fadeIn" id="about-message">' + self[0].dataset.option + '</div>');
					}
				});
			}

			// Our Work
			if ( self[0].dataset.tag === 'folio' ) {
				self.on('click', function () {
					if ($('.portfolio-items').length) {
							$('.portfolio-items').each( function () {
								$(this).remove();
							});
						return;
					} else {
						$container.empty()
						var images = [];
						for ( var i = 0; i < portfolioImgs.length; i++ ) {
							images.push('<img class="portfolio-items animated fadeIn" src="img/portfolio/' + portfolioImgs[i] + '">');
						}
						$container.html('<section class="portfolio">' + images.join('') + '</section>');
						projectEvents();
					}
				});
			}

			// Contact Us
			if ( self[0].dataset.tag === 'contact' ) {
				self.on('click', function () {
					$container.html('<div id="contact-us" class="animated fadeIn">' + self[0].dataset.option + '</div>');
				});
			}
		});
	}

	function projectEvents () {
		var $items = $('.portfolio-items');

		$items.each( function(item){
			$(this).on('click', function(){
				$items.addClass('hidden');
				$(this).removeClass('hidden').addClass('expanded');
			});
		});
	}

	buildDashboard();

}($));
