;(function(){

	angular
		.module('app')
		.directive('single', SingleDirective);

	SingleDirective.$inject = ['AssetService', '$stateParams'];

	function SingleDirective (AssetService, $stateParams) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/single/single-tpl.html',
			restrict: 'E',
			scope: {
				vm: '='
			}
		};

		return directive;

		function link (scope, el, attrs) {
			AssetService.getClient($stateParams.project).then( function(project) {
				scope.project = project;
			});
		}
	}

})();