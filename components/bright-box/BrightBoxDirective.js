;(function(){
	
	angular
		.module('app')
		.directive('brightBox', BrightBoxDirective);

	BrightBoxDirective.$inject = [];

	function BrightBoxDirective () {
		var directive = {
			link: link,
			templateUrl: '/templates/components/bright-box/bright-box-tpl.html',
			restrict: 'A',
			scope: {
				boxName: '@'
			}
		};

		return directive;

		function link (scope, element, attrs) {
			console.log(scope);
			console.log(element);
		}
	}

}());