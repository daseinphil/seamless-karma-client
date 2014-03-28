var app = angular.module('myApp.controllers', []);

app.controller('OrgsCtrl', ['$scope', 'OrgsFactory', 'OrgFactory', '$location',
    function ($scope, OrgsFactory, OrgFactory, $location) {
        // callback for ng-click 'createOrganization':
        $scope.createOrganization = function () {
            $location.path('/organizations/create');
        };

        $scope.organizations = OrgsFactory.query();
    
}]);

app.controller('OrganizationDetailCtrl', ['$scope', '$stateParams', 'OrgsFactory', 'OrgFactory', '$location',
  function ($scope, $stateParams, OrgsFactory, OrgFactory, $location) {

    /* callback for ng-click 'updateOrganization': */
    $scope.updateOrganization = function () {
      OrgFactory.update($scope.organization);
      $location.path('/organizations');
    };

	// callback for ng-click 'deleteOrganization':
	$scope.deleteOrganization = function (Id) {
	    OrganizationFactory.delete({ id: Id });
	    $location.path('/organizations');
	};

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/organizations/detail/' + $stateParams.id);
    };

    $scope.organization = OrgFactory.show({id: $stateParams.id});
  }]);

app.controller('OrganizationCreationCtrl', ['$scope', 'OrgsFactory', '$location',
    function ($scope, OrgsFactory, $location) {

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/organizations');
    };

     // callback for ng-click 'createNewOrganization':
     $scope.createNewOrganization = function () {
       OrgsFactory.create($scope.organization);
       $location.path('/organizations');
       }
    }]);


app.controller('VendorsCtrl', ['$scope', 'VendorsFactory', 'VendorFactory', '$location',
    function ($scope, VendorsFactory, VendorFactory, $location) {

	// callback for ng-click 'createVendor':
	$scope.createVendor = function () {
	    $location.path('/vendors/create');
	};

        $scope.vendors = VendorsFactory.query();
    }]);

app.controller('VendorDetailCtrl', ['$scope', '$stateParams', 'VendorsFactory', 'VendorFactory', '$location',
  function ($scope, $stateParams, VendorsFactory, VendorFactory, $location) {

    /* callback for ng-click 'updateVendor': */
    $scope.updateVendor = function () {
      VendorFactory.update($scope.vendor);
      $location.path('/vendors/detail/' + $stateParams.id);
    };

	// callback for ng-click 'deleteVendor':
	$scope.deleteVendor = function (Id) {
	    VendorFactory.delete({ id: Id });
	    $scope.vendors = VendorsFactory.query();
	    $location.path('/vendors');
	};

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/vendors/detail/' + $stateParams.id);
    };

    $scope.vendor = VendorFactory.show({id: $stateParams.id});
  }]);

app.controller('VendorCreationCtrl', ['$scope', 'VendorsFactory', '$location',
    function ($scope, VendorsFactory, $location) {

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/vendors');
    };

     // callback for ng-click 'createNewVendor':
     $scope.createNewVendor = function () {
       VendorsFactory.create($scope.vendor);
       $location.path('/vendors');
       }
    }]);

app.controller('UsersCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {

        // callback for ng-click 'createUser':
        $scope.createUser = function () {
            $location.path('/users/create');
        };

        $scope.users = UsersFactory.query();
    }]);

app.controller('UserDetailCtrl', ['$scope', '$stateParams', 'UsersFactory', 'UserFactory', '$location',
  function ($scope, $stateParams, UsersFactory, UserFactory, $location) {
    
    /* callback for ng-click 'updateUser': */
    $scope.updateUser = function () {
      UserFactory.update($scope.user);
      $location.path('/users');
    }; 

    // callback for ng-click 'deleteUser':
    $scope.deleteUser = function (userId) {
        UserFactory.delete({ id: userId });
        $location.path('/users'); 
	    };
    
    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/users/detail/' + $stateParams.id); 
    };

    $scope.user = UserFactory.show({id: $stateParams.id});
  }]);

app.controller('UserCreationCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/users');
    };

     // callback for ng-click 'createNewUser':
     $scope.createNewUser = function () {
       UsersFactory.create($scope.user);
       $location.path('/users');
       }
    }]);


app.controller('LoginCtrl', ['$scope', '$http', 'AuthService', function($scope, $http, skUser) {
	$scope.login = function(username) {
		var config = {method: 'GET', url: 'http://www.seamlesskarma.com/api/users/' + username }

		$http(config)
		.success(function(data, status, headers, config) {
			if (data.status) {
				// succefull login
				skUser.isAuthenticated = true;
				skUser.username = data.username;

			}
			else {
				skUser.isAuthenticated= false;
				skUser.username = 'Anon';
			}
		})
		.error(function(data, status, headers, config) {
			skUser.isAuthenticated = false;
			skUser.username = 'Anon';
		});
	}
}]);

