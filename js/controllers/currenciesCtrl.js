angular.module('app').controller('currenciesCtrl', function(currenciesFactory){
	this.currencies = currenciesFactory.getCurrencies();
});