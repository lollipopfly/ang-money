angular.module('app').factory('mainFactory', function($rootScope){
	var service = {};

	var currencies = [
		{
			id: 1,
			code: "RUB",
			name: 'Рубль',
			class: 'fa-rub',
			currency: ''
		},
		{
			id: 3,
			code: 'USD',
			name: 'Доллар',
			class: 'fa-usd',
			currency: ''
		},
		{
			id: 3,
			code: 'EUR',
			name: 'Евро',
			class: 'fa-eur',
			currency: ''
		}
	];

	// Share data between controllers
	service.moneyStorage = [];

	service.prepForBroadcast = function(obj) {
		this.moneyStorage = obj;
		this.broadcastItem();
	};

	service.broadcastItem = function() {
		$rootScope.$broadcast('addCurrency');
	};

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