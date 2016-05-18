(function(){

	var winesHttpService = function($http){

		var url = "http://localhost:3000/api/wines";

		

		var getWines = function(){
			return $http.get(url).then(onSuccess);
		}

		var addWine = function(wine){
			return $http.post(url, wine);
		}


		var onSuccess = function(response){
			return response.data;
		}
		var deleteWine = function(wine){
			var wineId = wine._id; 
			var urlDel = url + "/" + wineId;
			return $http.delete(urlDel);
		}

		var getWine = function(wineId){
			var url = "http://localhost:3000/api/wines/" + wineId;
			return $http.get(url).then(onSuccess); 
		}

		var updateWine = function(wine){
			var url = "http://localhost:3000/api/wines/" + wine._id;
			return $http.put(url, wine);
		}

		return{
			getWines : getWines,
			addWine : addWine,
			deleteWine : deleteWine,
			getWine : getWine,
			updateWine : updateWine
		}
	}

	var app = angular.module("winesModule");
	app.factory("winesHttpService",winesHttpService);

})();