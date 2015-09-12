(function ($) {

	$('#top').append('<ul id="dashboard"></ul>');
	var dashboardItems = [
		{
			'title' 	: 'About Us',
			'tag'		: 'about',
			'option' 	: 'Hinge offers web development by web developers. No sales people to deal with. No client engagement. Just clean, modern and fast developement.'
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

	var portfolioImgs = ['folio01.png', 'folio02.png', 'folio03.png', 'folio04.png', 'folio05.png', 'folio06.png'];

	function buildDashboard () {
		for ( var i = 0; i < dashboardItems.length; i++ ) {
			$('#dashboard').append('<li data-tag="' + dashboardItems[i].tag + '" data-option="' + dashboardItems[i].option + '">' + dashboardItems[i].title + '</li>');
		}
		customEvents();
	}

	function customEvents () {
		var dashItem = $('#dashboard > li');
		dashItem.each( function () {
			var self = $(this);
			console.log(self);

			// Begin custom events

			// About Us
			if ( self[0].dataset.tag === 'about' ) {
				self.on('click', function () {

					$('#hero-logo').parent().prepend('<div class="animated fadeIn" id="about-message" style="color: white">' + self[0].dataset.option + '</div>');
					$('#hero-logo').css("padding-top", "72px");

					if ($('#about-message').length) {
						$('#about-message').remove();
						return;
					} else {
						$('#hero-logo').parent().prepend('<div id="about-message">' + self[0].dataset.option + '</div>');
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
						for ( var i = 0; i < portfolioImgs.length; i++ ) {
							$('#hero-logo').parent().prepend('<img class="portfolio-items" src="assets/img/portfolio/' + portfolioImgs[i] + '">');
						}
					}
				});
			}

			// Contact Us
			if ( self[0].dataset.tag === 'contact' ) {
				self.on('click', function () {


				});
			}
		});
	}

	buildDashboard();

}($));
