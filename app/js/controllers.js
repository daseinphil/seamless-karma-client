var app = angular.module('myApp.controllers', []);

app.controller('LandingCtrl', function($scope) {
	$scope.message = 'Waste not, want not.';
});


app.controller('UsersCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {

        // callback for ng-click 'editUser':
        $scope.editUser = function (userId) {
            $location.path('/user-detail/' + userId);
        };

        // callback for ng-click 'deleteUser':
        $scope.deleteUser = function (userId) {
            UserFactory.delete({ id: userId });
            $scope.users = UsersFactory.query();
        };

        // callback for ng-click 'createUser':
        $scope.createNewUser = function () {
            $location.path('/user-creation');
        };

        $scope.users = UsersFactory.query();
    }]);

app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
  function ($scope, $routeParams, UserFactory, $location) {

    /* callback for ng-click 'updateUser': */
    $scope.updateUser = function () {
      UserFactory.update($scope.user);
      $location.path('/users');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/users');
    };

    $scope.user = UserFactory.show({id: $routeParams.id});
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

app.controller('VendorsCtrl', ['$scope', 'VendorsFactory', 'VendorFactory', '$location',
    function ($scope, VendorsFactory, VendorFactory, $location) {

	// callback for ng-click 'editVendor':
	$scope.editVendor = function (Id) {
	    $location.path('/vendor-detail/' + Id);
	};

	// callback for ng-click 'deleteVendor':
	$scope.deleteVendor = function (Id) {
	    VendorFactory.delete({ id: Id });
	    $scope.vendors = VendorsFactory.query();
	};

	// callback for ng-click 'createVendor':
	$scope.createNewVendor = function () {
	    $location.path('/vendor-creation');
	};

        $scope.vendors = VendorsFactory.query();
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

app.controller('VendorDetailCtrl', ['$scope', '$routeParams', 'VendorFactory', '$location',
  function ($scope, $routeParams, VendorFactory, $location) {

    /* callback for ng-click 'updateVendor': */
    $scope.updateVendor = function () {
      VendorFactory.update($scope.vendor);
      $location.path('/vendors');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/vendors');
    };

    $scope.vendor = VendorFactory.show({id: $routeParams.id});
  }]);

app.controller('OrgsCtrl', ['$scope', 'OrgsFactory', 'OrgFactory', '$location',
    function ($scope, OrgsFactory, OrgFactory, $location) {
	// callback for ng-click 'editOrganization':
	$scope.editOrganization = function (Id) {
	    $location.path('/organization-detail/' + Id);
	};

	// callback for ng-click 'deleteOrganization':
	$scope.deleteOrganization = function (Id) {
	    OrgFactory.delete({ id: Id });
	    $scope.organizations = OrgsFactory.query();
	};

	// callback for ng-click 'createOrganization':
	$scope.createNewOrganization = function () {
	    $location.path('/organization-creation');
	};

        $scope.organizations = OrgsFactory.query();
    }]);

app.controller('OrganizationDetailCtrl', ['$scope', '$routeParams', 'OrgFactory', '$location',
  function ($scope, $routeParams, OrgFactory, $location) {

    /* callback for ng-click 'updateOrganization': */
    $scope.updateOrganization = function () {
      OrgFactory.update($scope.organization);
      $location.path('/organizations');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/organizations');
    };

    $scope.organization = OrgFactory.show({id: $routeParams.id});
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
