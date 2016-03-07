angular.module('app').controller('moneyCtrl', ['$scope', 'mainFactory',  function($scope, mainFactory) {
	$scope.moneyStorage = mainFactory.getStorage();

	// Event add new currency
	$scope.$on('addCurrency', function() {
		$scope.moneyStorage = mainFactory.moneyStorage;
	});
}]);