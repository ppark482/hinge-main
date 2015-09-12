(function ($) {

	$('#top').append('<ul id="dashboard"></ul>');
	var dashboardItems = [
		{
			'title': 'About Us'
		},
		{
			'title': 'Our Work'
		},
		{
			'title': 'Contact Us'
		}
	];
	function buildDashboard () {
		for ( var i = 0; i < dashboardItems.length; i++ ) {	
			$('#dashboard').append('<li>' + dashboardItems[i].title + '</li>');
		}
	}

	buildDashboard();

}($));