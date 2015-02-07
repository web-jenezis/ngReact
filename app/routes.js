define(['./app'], function (app) {
     'use strict';
     return app.config(['$routeProvider', function ($routeProvider) {
         $routeProvider.when('/index', {
             templateUrl: 'partials/main.tpl.html',
             controller: 'MainCtrl'
         });
     }]);
});