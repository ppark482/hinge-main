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

			scope.isActive = 1;
			scope.showSuccess = false;
			scope.showFail = false;

			scope.checkIsActive = function(num){
				return scope.isActive === num;
			};

			scope.showNext = function(){
				scope.isActive++;
				element[0].scrollTop = 0;
			};

			scope.showPrevious = function(){
				scope.isActive--;
				element[0].scrollTop = 0;
			};

			var showSuccessMessage = function(data){
				scope.showSuccess = true;
			};

			var showFailureMessage = function(){
				scope.showFail = true;
			};

			scope.submitForm = function(){
				var message = {
					name: scope.senderName,
					company: scope.company,
					email: scope.email,
					phone: scope.phone,
					website: scope.website,
					webapp: scope.webapp,
					other: scope.other,
					message: scope.message
				};
				$http({
				    url: "//formspree.io/you@email.com",
				    method: "POST",
				    data: message,
				    dataType: "json"
				}).then( showSuccessMessage, showFailureMessage );
			};

			scope.startOver = function(){
				scope.showSuccess = false;
				scope.showFail = false;
				scope.isActive = 1;
			};
		}
	}

})();