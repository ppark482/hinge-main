;(function(){

	angular
		.module('app')
		.directive('contactForm', ContactDirective);

	ContactDirective.$inject = ['AssetService'];

	function ContactDirective (AssetService) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/contact-form/contact-form.html',
			restrict: 'E',
			scope: {
				vm: '='
			}
		}

		return directive;

		function link (scope, element, attrs) {

		}
	}

})();