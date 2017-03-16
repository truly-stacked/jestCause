angular.module('hang', [
	'hang.auth',
	// 'hang.home',
	'hang.services',
	'ngRoute'
])
.config(function($routeProvider, $httpProvider, $locationProvider){
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

	$locationProvider.hashPrefix('');

		// $httpProvider.interceptors.push('AttachTokens');
})
// .factory('AttachTokens', function($window){});
