angular.module('app').factory('mainCurrencyFactory', function(){
	var service = {},
		storageName = 'mainCurrency';

	// Update main currency in localstorage
	service.setMainCurrency = function(currency) {
		localStorage.setItem(storageName, currency); // set currencies string to localstorage
	};

	service.getMainCurrency = function() {
		var mainCurrency = localStorage.getItem(storageName);
		return mainCurrency;
	};

	return service;
});