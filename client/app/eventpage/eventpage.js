angular.module('eventPageCtrl', function($scope, $location, Insert, Events){
  		$scope.mockEvent = {
  			description: 'After Hours',
  			venue: 'Hack Reactor',
  			address: '369 Lexington Ave NY, NY',
  			when: '7:00 PM'
  		}
  		$scope.mockUsers = [
  			{
  				name: 'JP',
  				profile_url: 'https://avatars3.githubusercontent.com/u/22504731?v=3&s=460'
  			},
  			{
  				name: 'Mike',
  				profile_url: 'http://michaeljchan.com/image/profile.PNG'
  			},
  			{
  				name: 'Kyle',
  				profile_url: 'https://avatars0.githubusercontent.com/u/25232894?v=3&s=460'
  			}
  		]
  		$scope.escapedAddress = $scope.mockEvent.address.split(" ").join("%20");
  		$scope.untrustedMapUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDanwxT0CdlMhsj0D2Yn-t6gNZ6K3_Pjfs&q="+$scope.escapedAddress;
  		$scope.mapUrl = $sce.trustAsResourceUrl($scope.untrustedMapUrl)
})
