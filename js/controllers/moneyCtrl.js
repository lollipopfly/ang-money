angular.module('app').controller('moneyCtrl', ['$scope', 'mainFactory',  function($scope, mainFactory) {
	$scope.moneyStorage = mainFactory.getStorage();
}]);