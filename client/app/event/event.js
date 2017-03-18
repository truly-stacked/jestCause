angular.module('hang.event', [])

.controller('EventController', function($scope, $location, Auth, Users, Events) {
	$scope.text = 'hi'

	$scope.goHome = function() {
		$location.path('/home');
	};

	Users.getCurrentUser()
	.then(user => {
		$scope.user = user[0];
		Events.getEvents($scope.user.email)
		.then(events => $scope.events = events)
	});
});
