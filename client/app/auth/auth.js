angular.module('hang.auth', [])

	.controller('AuthController', function ($scope, $window, $location, $http, Auth) {
		$scope.user = {};
		$scope.data;


		$scope.signin = function () {
			Auth.signin($scope.user)
				.then(function (token) {
					$window.localStorage.setItem('com.hang', token);
					$location.path('/home');
				})
				.catch(function (error) {
					console.error(error);
				});
		};

		$scope.signup = function () {
			Auth.signup($scope.user)
				.then(function (token) {
					console.log(token)
					$window.localStorage.setItem('com.hang', token);
					$location.path('/home');
				})
				.catch(function (error) {
					console.error(error);
				});
		};

		$scope.signout = function () {
			Auth.signout();
		}
	});