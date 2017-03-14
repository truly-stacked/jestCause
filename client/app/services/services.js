angular.module('hang.services', [])
	
	.factory('Auth', function($http, $location, $window){
		var signin = function(user) {
			return $http({
				method: 'POST',
				url: '/signin',
				data: user
			})
			.then(function(resp){
				return resp.data.token;
			});
		};

		var signup = function(user) {
			return $http({
				method: 'POST',
				url: '/signup',
				data: user
			})
			.then (function(resp){
				return resp.data.token;
			});
		};

		var isAuth = function() {
			return !!$window.localStorage.getItem('com.shortly');
		}

		return {
			signin: signin,
			signup: signup,
			isAuth: isAuth
		};
	});