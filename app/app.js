'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var app = angular
    .module('app', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'geolocation',
        'firebase',
        'angularGeoFire',
        'google-maps'
    ]);

app.constant('apiUrl', 'https://scope-db.firebaseio.com');

app.config(function ($stateProvider, $urlRouterProvider, apiUrl) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
});
