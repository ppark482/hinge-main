;(function(){

	angular
		.module('app')
		.controller('SliderController', SliderController);

	SliderController.$inject = ['$scope'];

	function SliderController ($scope) {
		var vm = this;
		vm.title = 'Hinge INC';
	}

}());