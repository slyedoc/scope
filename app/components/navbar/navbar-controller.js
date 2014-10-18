angular.module('app').controller('NavBarCtrl', function($scope, $modal, $firebase, apiUrl) {

	var ref = new Firebase(apiUrl);

	$scope.facebookLogin = function() {
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			console.log(error);
			console.log(authData);
		});
	}

	$scope.twitterLogin = function() {
		ref.authWithOAuthPopup("twitter", function(error, authData) {
			console.log(error);
			console.log(authData);
		});
	}

	$scope.githubLogin = function() {
		ref.authWithOAuthPopup("github", function(error, authData) {
			console.log(error);
			console.log(authData);
		});
	}

	$scope.googleLogin = function() {
		ref.authWithOAuthPopup("google", function(error, authData) {
			console.log(error);
			console.log(authData);
		});
	}

});