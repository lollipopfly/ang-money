angular.module('app').controller('currenciesCtrl', ['$scope', 'currenciesFactory', function($scope, currenciesFactory){
	this.currencies = currenciesFactory.getCurrencies();

	/* + */
	this.addCurrency = function($event) {
		$event.preventDefault();
		if(typeof(Storage) !== "undefined") {
					var storage = this.getStorageCurrencies(); // get currencies string from localstorage
					// var currencySelectObj = JSON.parse(this.refs.currencySelect.value); // selected currency & make obj
					console.log($scope.selectCurrency);
					// if(storage) {
					// 	// Chek the condition if selected currency is entry in localstorage
					// 	for (var i = 0; i < storage.length; i++) {
					// 		if(storage[i].name === currencySelectObj.name) {
					// 			alert('Такая валюта уже есть!');
					// 			return false;
					// 		}
					// 	}
					// } else {
					// 	//  localstorage is empty
					// 	var storage = Array();
					// }

					// // Add currency
					// storage.push(currencySelectObj);
					// this.setState({storage: storage});
					// storage = JSON.stringify(storage);
					// localStorage.setItem('currencies', storage); // set currencies string to localstorage
					// $('#myModal').modal('hide'); // close modal
				} else {
					console.log('Sorry LocalStorage not working in this browser!');
				}
	};

	this.getStorageCurrencies = function() {
		if(typeof(Storage) !== "undefined") {
			var storage = localStorage.getItem("currencies");
			if(storage) {
				storage = JSON.parse(storage);
			}
		}

		return storage;
	};
}]);