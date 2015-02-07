define(['./modules'], function (services) {
    'use strict';
    services.service('User', function() {
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
});