angular.module('hang.home', [])

.controller('HomeController', function($scope, Users, $mdPanel, $location) {

$scope.currentNavItem="hang";

Users.getCurrentUser()
.then(user => $scope.user = user[0]);

$scope.toggleHang = function() {
	$scope.user.hang = !$scope.user.hang;
	console.log($scope.user.hang)
	Users.updateUser($scope.user)
	.then(resp => console.log('updated ', resp))
}

$scope.getCurrentUser = Users.getCurrentUser;

$scope.toEvent = function() {
	$location.path('/createEvent')
}

$scope.showMenu = function($event) {
	var panelPosition = $mdPanel.newPanelPosition()
	.absolute()
	.top('50%')
	.left('50%');

	var panelAnimation = $mdPanel.newPanelAnimation()
		.duration({
			open: 250,
			close: 250
		})
		// .targetEvent($event)
		// .defaultAnimation('md-panel-animate-fly')
		// .closeTo('.show-button');

	var config = {
      attachTo: angular.element(document.body),
      controller: 'HomeController',
      position: panelPosition,
      animation: panelAnimation,
      targetEvent: $event,
      templateUrl: '/app/home/settingsMenu.html',
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true		
	};
		$mdPanel.open(config)
		.then(result => {
			console.log(result)
			result.show()
			.then(function(showing) {
				console.log(showing)
			})
		});
}





Users.getUsers()
.then(users => $scope.users = users);


})