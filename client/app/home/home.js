angular.module('hang.home', [])

	.controller('HomeController', function ($scope, Users, $mdPanel, $location, $mdDialog, $route, Auth) {

		$scope.eventGuests = [];
		$scope.currentNavItem = "hang";

		Users.getCurrentUser()
			.then(user => $scope.user = user[0]);

		$scope.toggleHang = function () {
			$scope.user.hang = !$scope.user.hang;
			console.log($scope.user.hang)
			Users.updateUser($scope.user)
				.then(resp => console.log('updated ', resp))
		}

		$scope.getCurrentUser = Users.getCurrentUser;

		$scope.toEvent = function (ev) {
			$mdDialog.show({
					controller: 'EventController',
					templateUrl: 'app/event/createEvent.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: $scope.customFullscreen
				});
		}

		$scope.changeUrl = function (ev) {
			var confirm = $mdDialog.prompt()
				.title('enter new profile picture url')
				.placeholder('url link')
				.ariaLabel('url link')
				.targetEvent(ev)
				.ok('Confirm!')
				.cancel('Cancel');

			$mdDialog.show(confirm).then((result) => {
				Users.updateUser({
						email: $scope.user.email,
						profile_url: result
					})
					.then($route.reload())
			});
		}

		$scope.userEventAdd = function () {
			this.item.invited = this.item.invited === undefined ? true : !this.item.invited;
			if (this.item.invited) {
				$scope.eventGuests.push(this.item.email);
			} else {
				$scope.eventGuests.splice($scope.eventGuests.indexOf(this.item.email), 1)
			}
			console.log($scope.eventGuests);
		}

		$scope.signout = function () {
			Auth.signout();
		}

		Users.getUsers()
			.then(users => $scope.users = users);
	})
