'use strict'

var FellowSocialNetwork = angular.module('FellowSocialNetwork', ['ngRoute']);

FellowSocialNetwork.constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api');

FellowSocialNetwork.config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'MainController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'MainController'
        })
        .when('/', {
            templateUrl: 'templates/.html',
            controller: 'MainController'
        })
        .when('/user/home', {
            templateUrl: 'templates/all-ads.html',
            controller: 'MainController'
        })
        .run(function ($rootScope, $location) {
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if ($rootScope.loggedInUser == null) {
                  $location.path('/login')
                }
            })
        })
});

