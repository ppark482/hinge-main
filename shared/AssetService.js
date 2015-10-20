;(function(){

	angular
		.module('app')
		.factory('AssetService', AssetService);

	AssetService.$inject = ['$http', '$q']

	function AssetService ($http, $q) {

		function getImages () {
			var deferred = $q.defer();
            var url = 'https://api.cosmicjs.com/v1/hinge/media';
            $http.get(url).success( function(data, status) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
		}

		function getPortfolio () {
			var deferred = $q.defer();
			var url = 'https://api.cosmicjs.com/v1/hinge/media?folder=portfolio';
            $http.get(url).success( function(data, status) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
		}

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
			getImages 		: getImages,
			getPortfolio 	: getPortfolio,
			getSlides		: getSlides,
			getClient 		: getClient
		}
	}

}());