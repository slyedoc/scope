'use strict';

angular.module('app').controller('HomeCtrl', function($scope, geolocation, apiUrl, Firebase, $geofire) {

    var $geo = $geofire(new Firebase(apiUrl));	//Allow angulargeofire to talk to Firebase
    $scope.geolocation = geolocation;			//Gets the users lat and long
    $scope.closeDistance = 0.0;					//Will hold the close distance
    $scope.calDistance = 0.0;					//Will hold the far away distance


});