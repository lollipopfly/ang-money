angular.module('app').controller('moneyListCtrl',  function($scope, mainFactory, moneyListFactory) {
	var currenciesObj = mainFactory.getStorage(),
		codeString = moneyListFactory.getCodeString(currenciesObj);

	// Get data from storage
	$scope.moneyList = mainFactory.getStorage();

	// set online currency
	moneyListFactory.getOnlineCurrencies(codeString).then(function(data) {
		var onlineCurrencies = data.rates;
		onlineCurrenciesKeys = _.keys(onlineCurrencies);

		var newArr = $scope.moneyList.map(function(item) {
			onlineCurrenciesKeys.forEach(function(keyItem) {
				if(keyItem === item.code) {
					item.currency = onlineCurrencies[keyItem];
				}
			});
			return item;
		});

		console.log(newArr);
	});

	// Event add new currency
	$scope.$on('addCurrency', function() {
		$scope.moneyList = mainFactory.moneyStorage;
	});
});