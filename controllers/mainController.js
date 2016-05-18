(function(){

	var mainController = function($scope){

		$scope.pageControl= {
			wineTablePage : true,
			wine : null
		}
		$scope.changePage = function(page){

			if(page === "home"){
				$scope.pageControl.wineTablePage = true;
			}
			else{
				$scope.pageControl.wineTablePage = false;
				$scope.pageControl.wine = null;
			}
		}




	}

	var app = angular.module("winesModule");
	app.controller("mainController",mainController)


})();