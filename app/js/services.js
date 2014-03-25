'use strict';

/* Services */

var services = angular.module('myApp.services', ['ngResource']);

services.factory('UsersFactory', function ($resource) {
    return $resource('http://www.seamlesskarma.com/api/users/', {}, {
        query: { method: 'GET'},
        create: { method: 'POST' }
    })
});

services.factory('UserFactory', function ($resource) {
    return $resource('http://www.seamlesskarma.com/api/users/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

services.factory('VendorsFactory', function ($resource) {
    return $resource('http://www.seamlesskarma.com/api/vendors/', {}, {
        query: { method: 'GET'},
        create: { method: 'POST' }
    })
});

services.factory('VendorFactory', function ($resource) {
    return $resource('http://www.seamlesskarma.com/api/vendors/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});

services.factory('OrgsFactory', function ($resource) {
    return $resource('http://www.seamlesskarma.com/api/organizations/', {}, {
        query: { method: 'GET'},
        create: { method: 'POST' }
    })
});

services.factory('OrgFactory', function ($resource) {
    return $resource('http://www.seamlesskarma.com/api/organizations/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })       
});
