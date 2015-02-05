(function(ng, React){ 
    var app = ng.module('app', []);    
    
    app.service('User', function() {
        var users = [
            {id: 1, firstName: "Denis", lastName: "Stoyanov", age:26},
            {id: 2, firstName: "Alex", lastName: "Alexeev", age:24},
            {id: 3, firstName: "Peter", lastName: "Petrov", age:21},
            {id: 4, firstName: "Ivan", lastName: "Ivanov", age:20}
        ];

        return {
            users: users
        };
    });

    app.controller('MainCtrl', function($scope, $log, User) {
        $scope.users = User.users;

        this.getUser = function(user) {
            $log.info('A selected user %O', user);
        };
    });

    app.directive('userList', function() {
        return {
            restrict: 'AE',
            scope: {
                users: '=',
                userSelected: '&'
            },
            link: function(scope, element, attrs) {
                scope.$watchCollection('users', function() {
                    React.renderComponent(UserList({scope: scope}), element[0]);
                });
            }
        };
    });

    return app;

})(angular, React);