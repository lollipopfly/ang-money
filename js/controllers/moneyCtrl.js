angular.module('app').controller('moneyCtrl', ['$scope', 'moneyFactory', 'currenciesFactory', function($scope, moneyFactory, currenciesFactory) {
	this.moneyStorage = currenciesFactory.getStorage();
}]);