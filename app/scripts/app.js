'use strict';


var APP_NAME = 'ngRepeatSampleWeb';

angular
    .module(APP_NAME, [
        'ngAnimate',
        'ui.router',
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        console.log('start');
        $urlRouterProvider.otherwise('/container');
        $stateProvider
            .state('default', {
                url: '/container',
                views: {
                    containerView: {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl as aboutCtrl'
                    }
                }
            })
    }]);
