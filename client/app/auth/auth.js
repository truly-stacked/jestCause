angular.module('hang.auth', [])
	
	.controller('AuthController', function($scope, $window, $location, Auth){
		$scope.user = {};

		$scope.signin= function() {
			Auth.signin($scope.user)
				.then(function(token){
					$window.localStorage.setItem('com.hang', token);
					//what is the agreement upon name of the homepage
					$location.path('/home');
				})
				.catch(function(error){
					console.error(error);
				});
		}
	});