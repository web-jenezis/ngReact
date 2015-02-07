define(['./modules'], function (controllers) {
    'use strict';
    controllers.controller('MainCtrl', function($scope, $log, User) {
	    $scope.users = User.users;

	    this.getUser = function(user) {
	        $log.info('A selected user %O', user);
	    };
	});
});