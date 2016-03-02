angular.module('app').controller('currenciesCtrl', ['$scope', 'mainFactory', function($scope, mainFactory){
	$scope.currencies = mainFactory.getCurrencies();
	console.log($scope.currencies);

	/* + */
	this.addCurrency = function($event) {
		$event.preventDefault();
		if(typeof(Storage) !== "undefined") {
			var storage = this.getStorageCurrencies(); // get currencies string from localstorage
			// Если не пустая строка
			if($scope.selectCurrency) {
				var selectCurrency = JSON.parse($scope.selectCurrency);

				if(storage) {
					// Chek the condition if selected currency is entry in localstorage
					for (var i = 0; i < storage.length; i++) {
						if(storage[i].name === selectCurrency.name) {
							alert('Такая валюта уже есть!');
							return false;
						}
					}
				}

				// Add currency
				if(mainFactory.addCurrency(storage, selectCurrency)) {
					$('#myModal').modal('hide'); // close modal
					$scope.moneyStorage = mainFactory.getStorage();
				}
			}

		} else {
			console.log('Sorry LocalStorage not working in this browser!');
		}
	};

	/* Get from storage */
	this.getStorageCurrencies = function() {
		var storage = mainFactory.getStorage();
		return storage;
	};
}]);