'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'LandingCtrl'});

  $routeProvider.when('/organizations', {templateUrl: 'partials/organizations-list.html', controller: 'OrgsCtrl'});
  $routeProvider.when('/organization-detail/:id', {templateUrl: 'partials/organization-detail.html', controller: 'OrganizationDetailCtrl'});
  $routeProvider.when('/organization-creation', {templateUrl: 'partials/organization-create.html', controller: 'OrganizationCreationCtrl'});

  $routeProvider.when('/users', {templateUrl: 'partials/users-list.html', controller: 'UsersCtrl'});
  $routeProvider.when('/user-detail/:id', {templateUrl: 'partials/user-detail.html', controller: 'UserDetailCtrl'});
  $routeProvider.when('/user-creation', {templateUrl: 'partials/user-create.html', controller: 'UserCreationCtrl'});

  $routeProvider.when('/vendors', {templateUrl: 'partials/vendors-list.html', controller: 'VendorsCtrl'});
  $routeProvider.when('/vendor-detail/:id', {templateUrl: 'partials/vendor-detail.html', controller: 'VendorDetailCtrl'});
  $routeProvider.when('/vendor-creation', {templateUrl: 'partials/vendor-create.html', controller: 'VendorCreationCtrl'});

  $routeProvider.otherwise({redirectTo: '/'});
}]);
