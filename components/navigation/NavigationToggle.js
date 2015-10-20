;(function(){

	angular
		.module('app')
		.directive('navToggle', NavigationToggle);

	NavigationToggle.$inject = ['$rootScope'];

	function NavigationToggle ($rootScope) {
	    return function(scope, element, attrs){
			$rootScope.$on('navToggle', function (){
				element.toggleClass('open');
			});
	    };
	};

})();