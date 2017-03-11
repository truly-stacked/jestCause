angular.module('hang', [
	'hang.auth',
	'hang.home',
	'hang.services',
	'ngRoute'
])
.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when('/signin', {
			templateUrl: 'app/auth/signin.html',
			controller: 'AuthController'
		})
		.when('/signup', {
			templateUrl: 'app/auth/signup.html',
			controller: 'AuthController'
		})
		.otherwise({
			redirectTo: '/signup'
		});


		$httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function($window){
	var attach = {}
})