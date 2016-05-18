(function(){

	var AddWineController = function($scope, winesHttpService){


		$scope.submitWine = function(){

			
			if($scope.pageControl.wine._id){ // update
				winesHttpService.updateWine($scope.pageControl.wine).then(redirect); 
			}else{ // add
				winesHttpService.addWine($scope.pageControl.wine).then(redirect);
			}
		}

		var redirect = function(response){
			$scope.pageControl.wine = [];
			$scope.pageControl.wineTablePage = true;
		}


	}

	var app = angular.module("winesModule");
	app.controller("AddWineController", AddWineController);

})();