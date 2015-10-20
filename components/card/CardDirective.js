;(function(){

	angular
		.module('app')
		.directive('card', CardDirective);

	CardDirective.$inject = ['AssetService'];

	function CardDirective (AssetService) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/card/card-tpl.html',
			restrict: 'A',
			replace: 'true',
			scope: {
				client: '@',
				works: '='
			}
		};

		return directive;

		function link (scope, element, attrs) {
			AssetService.getClient(scope.client).then( function(client) {
				scope.works = client;
			});
		}
	}

})();