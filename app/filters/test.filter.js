define(['./modules'], function (filters) {
    'use strict';
    filters.filter('test', function() {
	    return false;
	});
});