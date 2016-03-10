angular.module('app').factory('moneyListFactory', function($rootScope, $http){
	var service = {};

	service.fixerLatest = 'http://api.fixer.io/latest';

	/* Get string of all codes of currencies */
	service.getCodeString = function(currenciesObj) {
		var codeArr = [],
			codeString = '';

		// make arr
		currenciesObj.forEach(function(item, i, arr) {
			codeArr.push(item.code);
		});

		codeString = codeArr.join(',');
		return codeString;
	};

	service.getOnlineCurrencies = function(codeString) {
		var promise = $http({
			url: service.fixerLatest,
			method: "GET",
			params: {
				'symbols': codeString,
				'base': 'RUB'
			}
		}).then(function(response) {
			return response.data;
		});

		return promise;
	};

	service.updateCurrencies = function(moneyList, onlineCurrencies) {
		// Save keys(codes) of saved currencies
		onlineCurrenciesKeys = _.keys(onlineCurrencies);

		moneyList.map(function(item) {
			onlineCurrenciesKeys.forEach(function(keyItem) {
				if(keyItem === item.code) {
					item.currency = +(1/onlineCurrencies[keyItem]).toFixed(2);
				}
			});
			return item;
		});

		return moneyList;
	}

	return service;
});