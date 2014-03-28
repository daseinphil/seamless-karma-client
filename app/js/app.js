'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.services'
])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
        .state('home', { 
                url: '/',
                templateUrl: 'partials/landing.html',
		authenticate:false
        })

        .state('organizations', {
                url: '/organizations',
                templateUrl: 'partials/organizations.html',
		controller: 'OrgsCtrl',
		authenticate: false
        })
	.state('organizations.detail', {
	        url: '/detail/:id',
	        templateUrl: 'partials/organizations.detail.html',
	        controller: 'OrganizationDetailCtrl', 
	        onEnter: function(){console.log('enter org detail');},
	        authenticate: false
	})
	.state('organizations.edit', {
	        url: '/edit/:id',
	        templateUrl: 'partials/organizations.edit.html',
	        controller: 'OrganizationDetailCtrl',
	        authenticate: false
	})
        .state('organizations.create', {
                url: '/create',
                templateUrl: 'partials/organizations.create.html',
                controller: 'OrganizationCreationCtrl',
                authenticate: false
        })

	.state('users', {
	        url: '/users',
	        templateUrl: 'partials/users.html',
	        controller: 'UsersCtrl',
	        authenticate: true
	})
	.state('users.detail', {
	        url: '/detail/:id',
	        templateUrl: 'partials/users.detail.html',
	        controller: 'UserDetailCtrl',
	        authenticate: true 
	})
	.state('users.edit', {
	        url: '/edit/:id',
	        templateUrl: 'partials/users.edit.html',
	        controller: 'UserDetailCtrl',
	        authenticate: true
	})
	.state('users.create', {
	        url: '/create',
	        templateUrl: 'partials/users.create.html',
	        controller: 'UserCreationCtrl',
	        authenticate: true
	})

        .state('vendors', {
                url: '/vendors',
                templateUrl: 'partials/vendors.html',
                controller: 'VendorsCtrl',
		authenticate: true
        })
        .state('vendors.detail', {
                url: '/detail/:id',
                templateUrl: 'partials/vendors.detail.html',
                controller: 'VendorDetailCtrl',
                onEnter: function(){console.log('enter vendor detail');},
		authenticate: true
        })
        .state('vendors.edit', {
                url: '/edit/:id',
                templateUrl: 'partials/vendors.edit.html',
                controller: 'VendorDetailCtrl',
		authenticate: true
        })
	.state('vendors.create', {
	        url: '/create',
	        templateUrl: 'partials/vendors.create.html',
	        controller: 'VendorCreationCtrl',
	        authenticate: true
	})

        .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl',
                authenticate: false
        })

}])

angular.module("myApp")
  .run(function ($rootScope, $state, AuthService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !AuthService.isAuthenticated){
        // User isn’t authenticated
        $state.transitionTo("home");
	console.log('redirected from controlled state')
        event.preventDefault(); 
      }
    });
  });
