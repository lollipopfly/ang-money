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

	return service;
});