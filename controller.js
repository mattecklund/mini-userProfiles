var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService){
	$scope.stuff = 'stuffy in here';
	$scope.users = {name: 'Matt'};
	$scope.getUsers = function(){
		$scope.users = mainService.getUsers();
	};

	$scope.getUsers();
})