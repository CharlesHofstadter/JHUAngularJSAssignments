(function(){
	'use strict';
	
	//Define a module.
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
	
	//Protect from Minification.
	LunchCheckController.$inject = ['$scope'];
	
	//Define controller
	function LunchCheckController($scope){
		var totalNumberOfItems;
		$scope.rawInput = "";
		$scope.message = "";
		
		//Display message.
		 $scope.displayMessage = function(){
			totalNumberOfItems = countTotalNumberOfItems();
			if(totalNumberOfItems==0){
				$scope.message = "Please enter data first";
			}else if(totalNumberOfItems<=3 && totalNumberOfItems>0){
				$scope.message = "Enjoy!";
			}else if(totalNumberOfItems>3){
				$scope.message = "Too much!";
			}
		};	
		
		//Find total number of items. 
		var countTotalNumberOfItems = function(){
			if($scope.rawInput == ""){
				totalNumberOfItems = 0;
			}else{
				var itemsArray = $scope.rawInput.split(",");
				totalNumberOfItems = itemsArray.length;
			}	
			return totalNumberOfItems;
		};	
	}
	
})();

