angular.module('hang.profile', ['hang.tone', 'hang.render', 'hang.aster'])
	.controller('ProfileController', function ($scope,$http,tone,render, UserInsert, aster) {
	  $scope.user = UserInsert.user;
      $scope.twitter = $scope.user.twitter_handle;

      $scope.errorCodes = {
        "34": 'There is no Twitter user with that handle.  Please try again.',
        "888": "That user's tweets are protected.  Please try again.",
        "999": 'That user has no tweets.  Please try again.'
      };
	  
	  $scope.twitterAnalyse = function () {
	  $scope.spinner=true;
  	  $http({
		method: 'POST',
		url: 'http://sample-env.zhtjbs6sdb.us-west-2.elasticbeanstalk.com/api/handle',
        headers:{'Content-Type':'application/json'},
        data: {handle: $scope.twitter}
		})
		.then(function(results){
			$scope.userData = results.data;
			tone.grabValues(results.data.watsonResults);
			$scope.averageValues = tone.averageValues;
			render.renderData($scope.averageValues);
			console.log('---->RESULTS: ', results);
			aster.renderData($scope.averageValues);
			$scope.spinner = false;
		})
        .catch(function(error) {
          $scope.spinner = false;
          console.log(error);
          alert($scope.errorCodes[error.data]);
        });
     };
     $scope.twitterAnalyse();
});
