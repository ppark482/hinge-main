;(function(){

	angular
		.module('app')
		.directive('homeSlider', SliderDirective);

	SliderDirective.$inject = [];

	function SliderDirective () {
		var directive = {
			link: link,
			templateUrl: '/templates/components/slider/slider-tpl.html',
			replace: 'true',
			restrict: 'A',
			scope: {
				vm: '='
			}
		}

		return directive;

		function link (scope, element, attrs) {
			scope.vm = {
				something: 'oawiehfaoiwehf'
			}
		}
	}

}());