(function(){


	var WinesController = function($scope, winesHttpService){

		$scope.sortCriteria = '';
		$scope.sortDirection = '+';
		$scope.pageSize = 5;
		$scope.activePage = 0;
		
		var onSuccessGet = function(response){
			$scope.wines = response.results;
			setPaginationComponent(); 

		}
		winesHttpService.getWines().then(onSuccessGet);

		$scope.setSortCriteria = function(newCriteria){			
			if(newCriteria == $scope.sortCriteria){
				if($scope.sortDirection == '+')
					$scope.sortDirection = '-';
				else
					$scope.sortDirection = '+';
			}else{ 
				$scope.sortCriteria = newCriteria;				
				$scope.sortDirection = '+';
			}	
		}

		var calcLastPage = function(){
			return Math.ceil( $scope.wines.length / $scope.pageSize);
		}

		var setPaginationComponent = function(){
			var numPages =  calcLastPage();
			$scope.pagArray = ["<<", "<"];
			for(i=1; i <= numPages; i++){
				$scope.pagArray.push(i);
			}
			$scope.pagArray.push(">", ">>");
		} 
		$scope.changePage = function(newPage){
			if(newPage == "<<"){
				$scope.activePage = 0;
			}else if(newPage == ">>"){
				$scope.activePage = calcLastPage() - 1; 
			}else if(newPage == "<"){
				if($scope.activePage > 0) 
					$scope.activePage = $scope.activePage - 1;
			}else if(newPage == ">"){
				if($scope.activePage < calcLastPage() -1)
					$scope.activePage = $scope.activePage + 1;
			}else{
				$scope.activePage = newPage-1;
			}
		}


		$scope.removeWine = function(wine){
			winesHttpService.deleteWine(wine).then(onSuccessDelete);
		}
		var onSuccessDelete = function(response){
			winesHttpService.getWines().then(onSuccessGet);
		}
		$scope.updateWine= function(wine){
			winesHttpService.getWine(wine._id).then(onSuccessGetWine);
		}
		var onSuccessGetWine = function(response){
			
			$scope.pageControl.wine = response;
			$scope.pageControl.wineTablePage = false;
		}

	}

	var app = angular.module("winesModule");
	app.controller("WinesController",WinesController);

})();