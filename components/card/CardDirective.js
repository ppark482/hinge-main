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

		function link (scope, el, attrs) {
			AssetService.getClient(scope.client).then( function(client) {
				scope.works = client;
				setBackgroundImage(scope.works);
				scope.showBackground = showBackground;
				scope.hideBackground = hideBackground;
			});

			function setBackgroundImage (work) {
				var url = work.thumb;
				el.css('background', 'url(\'' + url + '\')');
				el.css('background-size', '0, 0');
			}

			function showBackground () {
				el.css('background-size', 'cover');
			}

			function hideBackground () {
				el.css('background-size', '0, 0');
			}
		}
	}

})();