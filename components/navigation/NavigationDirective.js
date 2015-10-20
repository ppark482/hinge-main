;(function(){

	angular
		.module('app')
		.directive('navigation', NavigationDirective);

	NavigationDirective.$inject = ['$rootScope'];

	function NavigationDirective ($rootScope) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/navigation/navigation.html',
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