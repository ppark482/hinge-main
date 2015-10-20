;(function(){

	angular
		.module('app')
		.directive('hingeHeader', HeaderDirective);

	HeaderDirective.$inject = ['$rootScope'];

	function HeaderDirective ($rootScope) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/header/header.html',
			restrict: 'E',
			scope: {
				vm: '='
			}
		}

		return directive;

		function link (scope, element, attrs) {
			scope.toggleNav = function () {
				$rootScope.$broadcast('navToggle');
			}
		}
	}

})();