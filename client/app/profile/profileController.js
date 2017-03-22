angular.module('hang.profile', ['hang.tone', 'hang.render', 'hang.aster'])
	.controller('ProfileController', function ($scope,$http,tone,render, UserInsert, aster) {
		$scope.user = UserInsert.user;
	$scope.twitterAnalyse = function () {
		$scope.spinner=true;
  	  $http({
		method: 'POST',
		url: 'http://sample-env.zhtjbs6sdb.us-west-2.elasticbeanstalk.com/api/handle',
        headers:{'Content-Type':'application/json'},
        data: {handle: $scope.searchRequestInput}
		})
		.then(function(results){
			$scope.userData = results.data;
			tone.grabValues(results.data.watsonResults);
			$scope.averageValues = tone.averageValues;
			render.renderData($scope.averageValues);
			console.log('---->RESULTS: ', results);
			aster.renderData();
			$scope.spinner = false;
		});
     };
});
