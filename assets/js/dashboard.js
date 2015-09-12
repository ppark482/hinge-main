(function ($) {

	$('#top').append('<ul id="dashboard"></ul>');
	var dashboardItems = [
		{
			'title' 	: 'About Us',
			'tag'		: 'about',
			'option' 	: 'Hinge offers web development by web developers. No sales people to deal with. No client engagement. Just clean, modern and fast developement.'
		},
		{
			'title' : 'Our Work',
			'tag'	: 'folio'
		},
		{
			'title' : 'Contact Us',
			'tag'	: 'contact'
		}
	];
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

			if ( self[0].dataset.tag === 'about' ) {
				self.on('click', function () {
					$('#hero-logo').parent().prepend('<div id="about-message" style="color: white">' + self[0].dataset.option + '</div>');
				});
			} 
		});
	}

	buildDashboard();

}($));