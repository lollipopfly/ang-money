angular.module('app').controller('currenciesCtrl', ['$scope', 'currenciesFactory', function($scope, currenciesFactory){
	this.currencies = currenciesFactory.getCurrencies();

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
				storage.push(selectCurrency);
				storage = JSON.stringify(storage);
				localStorage.setItem('currencies', storage); // set currencies string to localstorage
				storage = JSON.parse(storage);
				$('#myModal').modal('hide'); // close modal
			}

		} else {
			console.log('Sorry LocalStorage not working in this browser!');
		}
	};

	this.getStorageCurrencies = function() {
		var storage;
		if(typeof(Storage) !== "undefined") {
			storage = localStorage.getItem("currencies");
			storage = (storage) ? JSON.parse(storage) : [];
		} else {
			storage = false;
		}

		return storage;
	};
}]);