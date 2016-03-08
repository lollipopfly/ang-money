angular.module('app').factory('mainCurrencyFactory', function(){
	var service = {};

	// Update main currency in localstorage
	service.setMainCurrency = function(currency) {
		localStorage.setItem('mainCurrency', currency); // set currencies string to localstorage
	};

	return service;
});