angular.module('app').controller('mainCurrencyCtrl', function($scope, mainFactory, mainCurrencyFactory) {
	$scope.enableCurrenciesList = mainFactory.getStorage();

	$scope.changeCurrency = function() {
		// update storage
		mainCurrencyFactory.setMainCurrency($scope.myCurrency);
	};

	// $scope.$watch('currenciesList', function (oldValue, newValue) {
 //    	// console.log(newValue);
	// });
});
