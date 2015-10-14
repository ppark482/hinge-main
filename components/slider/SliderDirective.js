;(function(){

	angular
		.module('app')
		.directive('homeSlider', SliderDirective);

	SliderDirective.$inject = ['AssetService'];

	function SliderDirective (AssetService) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/slider/slider-tpl.html',
			replace: 'true',
			restrict: 'E',
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