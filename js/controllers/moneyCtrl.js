angular.module('app').controller('moneyCtrl', ['$scope', 'mainFactory',  function($scope, mainFactory) {
	$scope.moneyStorage = mainFactory.getStorage();
	$scope.$on('handleBroadcast', function() {
		$scope.moneyStorage = mainFactory.moneyStorage;
	});
}]);