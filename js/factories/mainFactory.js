angular.module('app').factory('mainFactory', function($rootScope){
	var service = {};

	var currencies = [
		{
			id: 1,
			code: "rub",
			name: 'Рубль',
			class: 'fa-rub'
		},
		{
			id: 3,
			code: 'dollar',
			name: 'Доллар',
			class: 'fa-usd'
		},
		{
			id: 3,
			code: 'euro',
			name: 'Евро',
			class: 'fa-eur'
		}
	];

	// Share data between controllers
	service.moneyStorage = [];

	service.prepForBroadcast = function(obj) {
		this.moneyStorage = obj;
		this.broadcastItem();
	};

	service.broadcastItem = function() {
		$rootScope.$broadcast('handleBroadcast');
	}

	service.getCurrencies = function() {
		return currencies;
	};

	service.addCurrency = function(storage, selectCurrency) {
		storage.push(selectCurrency);
		// update money list
		service.prepForBroadcast(storage);
		storage = JSON.stringify(storage);
		localStorage.setItem('currencies', storage); // set currencies string to localstorage
		return true;
	};

	service.getStorage = function() {
		var storage;
		if(typeof(Storage) !== "undefined") {
			storage = localStorage.getItem("currencies");
			storage = (storage) ? JSON.parse(storage) : [];
		} else {
			storage = false;
		}

		return storage;
	};

	return service;
});