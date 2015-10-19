;(function(){

	angular
		.module('app')
		.directive('backImg', function(){
		    return function(scope, element, attrs){
				console.log('called');
		        var url = attrs.backImg;
		        element.css({
		            'background-image': 'url(' + url +')'
		        });
		    };
		});

})();