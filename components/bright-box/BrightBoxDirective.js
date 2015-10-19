;(function(){

	angular
		.module('app')
		.directive('brightBox', BrightBoxDirective);

	BrightBoxDirective.$inject = ['AssetService'];

	function BrightBoxDirective (AssetService) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/bright-box/bright-box-tpl.html',
			restrict: 'A',
			scope: {
				boxName: '@',
				image: '@'
			}
		};

		return directive;

		function link (scope, element, attrs) {
			// var images = AssetService.getImages();
			// images.then( function (images) {
			// 	console.log(images);
			// });
			// console.log(scope.image);
		}
	}

})();