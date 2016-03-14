angular.module('app').controller('mainCurrencyCtrl', function($scope, mainFactory, mainCurrencyFactory) {
	$scope.enableCurrenciesList = mainFactory.getStorage();
	$scope.mainCurrency = mainCurrencyFactory.getMainCurrency();

	// Change select main currency
	$scope.changeMainCurrency = function() {
		// update storage
		mainCurrencyFactory.setMainCurrency($scope.mainCurrency);
	};
});
