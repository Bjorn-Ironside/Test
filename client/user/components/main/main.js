import angular from 'angular';
import angularMeteor from 'angular-meteor';

var users = [
	{
		firstName: 'Jon',
		lastName: 'Snow',
		phone: '555-55-55',
		gender: true,
		age: 24
	},
	{
		firstName: 'Sansa',
		lastName: 'Stark',
		phone: '111-11-11',
		gender: false,
		age: 19
	},
	{
		firstName: 'Tyrion',
		lastName: 'Lannister',
		phone: '222-22-22',
		gender: true,
		age: 38
	},
	{
		firstName: 'Theon',
		lastName: 'Greyjoy',
		phone: '555-35-35',
		gender: true,
		age: 26
	},
	{
		firstName: 'Cersei',
		lastName: 'Lannister',
		phone: '888-33-11',
		gender: true,
		age: 42
	}
];

var app = angular.module('app', [
	angularMeteor
]);

app.controller('TableController', ['$scope', function($scope) {
	$scope.data = users;

	$scope.removeUser = function(index) {
		if(confirm(`Do you wanna remove user '${users[index].firstName} ${users[index].lastName}' ?`)) {
			users.splice(index, 1);
		}
	}
}]);

app.controller('FormAddUserController', ['$scope', function($scope) {
	$scope.patternWord = /^[a-zA-Z\']+$/;
	$scope.patternPhone = /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/;
	$scope.patternAge = /^(?:100|[1-9]\d|[6-9])$/;

	$scope.addNewUser = function(data) {
		users.push(data);
		$scope.user = {};
		$scope.addUserForm.$setPristine();
	};
}]);