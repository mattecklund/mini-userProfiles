var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService){
	var getUsers = function(){
		$scope.users = mainService.getUsers();
	};

	getUsers();

	
})