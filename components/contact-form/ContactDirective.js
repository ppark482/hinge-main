;(function(){

	angular
		.module('app')
		.directive('contactForm', ContactDirective);

	ContactDirective.$inject = ['AssetService', '$http'];

	function ContactDirective (AssetService, $http) {
		var directive = {
			link: link,
			templateUrl: '/templates/components/contact-form/contact-form.html',
			restrict: 'E',
			scope: {
				vm: '='
			}
		}

		return directive;

		function link (scope, element, attrs) {

			var message = {
				name: scope.senderName,
				company: scope.company,
				email: scope.email,
				phone: scope.phone,
				message: scope.message
			};

			var showSuccessMessage = function(data){
				console.log(data);
				scope.showSuccess = true;
			};

			var showFailureMessage = function(){
				scope.showFail = true;
			};

			scope.submitForm = function(){
				$http({
				    url: "//formspree.io/you@email.com",
				    method: "POST",
				    data: message,
				    dataType: "json"
				}).then( showSuccessMessage, showFailureMessage );
			};

			scope.hideMessages = function(){
				scope.showSuccess = false;
				scope.showFail = false;
			};

			scope.showSuccess = false;
			scope.showFail = false;
		}
	}

})();