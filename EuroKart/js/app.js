
var euroKart = angular.module('euroKart', ['ui.router']);


euroKart.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home/homeView.html',
            controller: 'homeController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contact/contactView.html',
            controller: 'contactController'
        })
    ;
});