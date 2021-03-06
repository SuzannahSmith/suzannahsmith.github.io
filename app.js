/*
Author: Suzannah Smith
February 9, 2017
*/

var suzieApp = angular.module('suzieApp', ['ui.router']);

suzieApp.controller('mainController', function($scope) {
	$scope.message = 'This is my profile';
});


suzieApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'homeController'
        })
        .state('experience', {
            url: '/experience',
            templateUrl: 'app/experience/experience.html',
            controller: 'experienceController'
        })
        // .state('projects', {
        //     url: '/projects',
        //     templateUrl: 'app/projects/projects.html',   
        //     controller: 'projectsController'
        // })
        .state('travel', {
            url: '/travel',
            templateUrl: 'app/travel/travel.html',
            controller: 'travelController'     
        });
});

