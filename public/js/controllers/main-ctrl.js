var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService){


	$scope.getInterestRate = function(){
		bankService.getInterestRate().then(function(response){
			$scope.interest_rate = Number(JSON.parse(response.data));
		})
	}

	$scope.getInterestRate();

	$scope.calculatePayment = function(){

		var p = Number($scope.principal);
		var r = $scope.interest_rate / 100;
		var t = 4;
		var total = p + (p * r * t);
		console.log(p, r, t, total)

		$scope.monthly_payment = total / 48;
	}

	
})