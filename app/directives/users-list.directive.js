define(['./modules'], function (directives) {
	directives.directive('userList', function() {
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
});