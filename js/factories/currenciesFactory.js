angular.module('app').factory('currenciesFactory', function(){
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

	service.getCurrencies = function() {
		return currencies;
	};

	service.addCurrency = function(storage, selectCurrency) {
		storage.push(selectCurrency);
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