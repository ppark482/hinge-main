;(function(){

	angular
		.module('app')
		.factory('AssetService', AssetService);

	AssetService.$inject = ['$http', '$q']

	function AssetService ($http, $q) {

		function getSlides () {
			return $http.get('./slideshow.json');
		}

		function getClient(client) {
			var deferred = $q.defer();
			$http.get('./portfolio.json').success( function (data) {
				angular.forEach(data, function (x) {
					if (x.client === client) {
						deferred.resolve(x);
					}
				})
			});
			return deferred.promise;
		}

		return {
			getSlides		: getSlides,
			getClient 		: getClient
		}
	}

}());