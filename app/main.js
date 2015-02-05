(function(ng, React) 
    var app = ng.module('app', []);

    var UserFactory = function() {
        var users = [
            {id: 1, firstName: "Denis", lastName: "Stoyanov", age:26},
            {id: 2, firstName: "Alex", lastName: "Alexeev", age:24},
            {id: 3, firstName: "Peter", lastName: "Petrov", age:21},
            {id: 4, firstName: "Ivan", lastName: "Ivanov", age:20}
        ];

        return {
            users: users
        };
    };

    var UserCtrl = function($scope, $log, User) {
        $scope.users = User.users;

        this.getUser = function(user) {
            $log.info('A selected user %O', user);
        };
    };
    app.factory('User', [UserFactory]);

    app.controller('MainCtrl', ['$scope', '$log', 'User', UserCtrl]);


    return app;

})(angular, React);