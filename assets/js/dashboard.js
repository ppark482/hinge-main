(function ($) {

	var dashboardItems = [
		{
			'title' 	: 'Home',
			'tag'		: 'intro',
			'option' 	: '',
			'icon' 		: '<i class="fa fa-home"></i>'
		},
		{
			'title' 	: 'About',
			'tag'		: 'about',
			'option' 	: 'Hinge offers web development by web developers. No sales people to deal with. No client engagement. Just clean, modern and fast development.',
			'icon' 		: '<i class="fa fa-cog fa-spin"></i>'
		},
		{
			'title' 	: 'Our Work',
			'tag'		: 'folio',
			'option' 	: '',
			'icon' 		: '<i class="fa fa-briefcase"></i>'
		},
		{
			'title' 	: 'Contact Us',
			'tag'		: 'contact',
			'option' 	: 'hello@hingeinc.co',
			'icon' 		: '<i class="fa fa-share"></i>'
		}
	];

	var projects = [
		{
			_id: 1,
			title: 'Alexa Crisa - Portfolio',
			github: 'www.example.com',
			live: 'http://www.alexacrisa.com',
			thumbnail: 'alexa-portfolio-thumb.png',
			feature: 'alexa-portfolio.png'
		},
		{
			_id: 2,
			title: 'Flycast App',
			github: 'https://github.com/rdanieldesign/FishingApp',
			live: 'http://rdanieldesign.github.io/FishingApp/index.html#/',
			thumbnail: 'flycast-1-thumb.png',
			feature: 'flycast-2.png'
		},
		{
			_id: 3,
			title: 'Fruit Creative',
			github: 'www.example2.com',
			live: 'http://www.fruitcreative.co/',
			thumbnail: 'fruit-creative-1-thumb.png',
			feature: 'fruit-creative-2.png'
		},
		{
			_id: 4,
			title: 'Maheq - Portfolio',
			github: '',
			live: 'http://maheq.com',
			thumbnail: 'maheq-1-thumb.png',
			feature: 'maheq-2.png'
		},
		{
			_id: 5,
			title: 'Trailer Park Shootout',
			github: 'https://github.com/rdanieldesign/TurnGame',
			live: 'http://rdanieldesign.github.io/TurnGame/',
			thumbnail: 'trailer-park-shootout-1-thumb.png',
			feature: 'trailer-park-shootout-2.png'
		},
		{
			_id: 6,
			title: 'Wandrlst App',
			github: '',
			live: 'http://chelseafranz.github.io/wandrlst/#/',
			thumbnail: 'wandrlst-1-thumb.png',
			feature: 'wandrlst-2.png'
		}
	];

	var $container = $('.container');
	var toProjects;

	function buildDashboard () {
		for ( var i = 0; i < dashboardItems.length; i++ ) {
			$('.dashboard').append('<li class="hvr-rotate" data-tag="' + dashboardItems[i].tag + '" data-option="' + dashboardItems[i].option + '">' + dashboardItems[i].icon + dashboardItems[i].title + '</li>');
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
					$container.html('<div class="animated fadeIn" id="about-message">' + self[0].dataset.option + '</div>');
				});
			}

			// Our Work
			if ( self[0].dataset.tag === 'folio' ) {
				self.on('click', function () {
					toProjects();
				});
			}

			// Contact Us
			if ( self[0].dataset.tag === 'contact' ) {
				self.on('click', function () {
					$container.html('<div id="contact-us" class="animated fadeIn"><a href="mailto:hello@hingeinc.co">' + self[0].dataset.option + '</a></div>');
				});
			}
		});
	};

	toProjects = function () {
		$container.empty()
		var images = [];
		for ( var i = 0; i < projects.length; i++ ) {
			images.push('<img data-project-id=' + projects[i]._id + ' class="portfolio-items animated fadeIn" src="img/' + projects[i].thumbnail + '">');
		}
		$container.html('<section class="portfolio">' + images.join('') + '</section>');
		projectEvents();
	}

	function projectEvents () {
		var $items = $('.portfolio-items');

		$items.each( function(item){
			$(this).on('click', function(){
				var id = $(this).data('project-id');
				var single = projects.filter(function(project){
					return project._id == id;
				})[0];
				buildSingleProject(single);
			});
		});
	};

	function buildSingleProject (project) {
		$container.html('
			<div id="back-button"><i class="fa fa-arrow-circle-left"></i></div>
			<section class="single animated fadeIn">
				<h1>' + project.title + '</h1>
				<img src="img/' + project.feature + '">
				<a href="'+ project.link +'">Go to Live Project</a>
				<a href="'+ project.github +'">See the Code</a>
			</section>
		');
		$('#back-button').on('click', function () {
			toProjects();
		})
	};

	buildDashboard();

}($));
