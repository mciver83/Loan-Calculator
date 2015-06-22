var app = angular.module('LoanCalculator')

app.service('bankService', function($http, $q){

	this.getInterestRate = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://localhost:8888/interest_rate'
		}).then(function(response){
			dfd.resolve(response)
		})
		return dfd.promise;
	}
})