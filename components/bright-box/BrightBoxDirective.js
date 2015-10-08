;(function(){
	
	angular
		.module('app')
		.directive('brightBox', BrightBoxDirective);

	BrightBoxDirective.$inject = [];

	function BrightBoxDirective () {
		var directive = {
			link: link,
			template: 'template/bright-box-tpl.html',
			scope: {
				boxName: '=' // name of box from DOM
			},
			restrict: 'EA',
			controller: BrightBoxController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		function link (scope, element, attrs, ctrl) {
			console.log(scope.vm); // vm object from controller
		}
	}

	BrightBoxController.$inject = ['$scope'];

	function BrightBoxController () {
		var vm = this;
	}

}());