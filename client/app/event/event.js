angular.module('hang.event', [])

.controller('EventController', function($scope, $location, Auth) {
	$scope.text = 'hi'

	$scope.goHome = function() {
		$location.path('/home');
	}
})