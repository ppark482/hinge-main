;(function(){
	'use strict';

	angular
		.module('app')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'templates/main/home.html'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'templates/main/about.html'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: 'templates/main/contact.html'
				})
				.state('works', {
					url: '/works',
					templateUrl: 'templates/main/works.html'
				});
		}
	]);

}());