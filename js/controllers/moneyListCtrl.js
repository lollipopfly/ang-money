angular.module('app').controller('moneyListCtrl',  function($scope, mainFactory, moneyListFactory) {
	var currenciesObj = mainFactory.getStorage(),
		codeString = moneyListFactory.getCodeString(currenciesObj);

	// Get data from storage
	$scope.moneyList = mainFactory.getStorage();

	// set online currency
	moneyListFactory.getOnlineCurrencies(codeString).then(function(data) {
		var onlineCurrencies = data;
	});

	// Event add new currency
	$scope.$on('addCurrency', function() {
		$scope.moneyList = mainFactory.moneyStorage;
	});
});