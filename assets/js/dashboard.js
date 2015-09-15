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
			title: 'Fruit Creative',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			github: 'www.example.com',
			live: 'www.website.com',
			thumbnail: 'portfolio/folio01.png',
			image1: 'portfolio/folio02.png',
			image2: 'portfolio/folio02.png'
		},
		{
			_id: 2,
			title: 'Test Title2',
			description: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			github: 'www.example2.com',
			live: 'www.website2.com',
			thumbnail: 'portfolio/folio03.png',
			image1: 'portfolio/folio04.png',
			image2: 'portfolio/folio02.png'
		}
	];

	var $container = $('.container');
	var toProjects;

	function buildDashboard () {
		for ( var i = 0; i < dashboardItems.length; i++ ) {
			$('.dashboard').append('<li data-tag="' + dashboardItems[i].tag + '" data-option="' + dashboardItems[i].option + '">' + dashboardItems[i].icon + dashboardItems[i].title + '</li>');
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
						toProjects();
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
				<img src="img/' + project.image1 + '">
				<img src="img/' + project.image2 + '">
				<h1>' + project.title + '</h1>
				<p>' + project.description + '</p>
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
