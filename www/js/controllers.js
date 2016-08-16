angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
       $http({
          method: 'POST',
          url: 'http://assistwebportal.com/main/applogin',
           transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
           },
          data: { username: user.username,password:user.password }
        }).then(function successCallback(response) {
            //$scope.user = response.data;
           user.validate = response.data;
           console.log(user.validate);
          
           if(user.validate != 'false'){
			$location.path('/app/dashboard');
            }else{
                $scope.showAlert('Invalid username or password.');	
            }
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
           console.log('error');
       });

		if(typeof(user)=='undefined'){
			$scope.showAlert('Please fill username and password to proceed.');	
			return false;
		}
	};

  //--------------------------------------------
  $scope.logout = function() {    $window.location.reload('/app/login');   };

  //--------------------------------------------
   // An alert dialog
	 $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Warning Message',
		 template: msg
	   });
	 };
  //--------------------------------------------
})

.controller('ShapesCtrl', function($scope, $stateParams , Profiles) {
	var initial_state = false;
   
    $scope.decagonisVisible = initial_state;
    $scope.nonagonisVisible = initial_state;
    $scope.octagonisVisible = initial_state;
    $scope.heptagonisVisible = initial_state;
    $scope.hexagonisVisible = initial_state;
    $scope.pentagonisVisible = initial_state;
    $scope.rectangleisVisible = initial_state;
    $scope.parallelogramisVisible = initial_state;
    $scope.rhombusisVisible = initial_state;
    $scope.diamondisVisible = initial_state;
    $scope.trapeziumisVisible = initial_state;
    $scope.squareisVisible = initial_state;
    $scope.traingleisVisible = initial_state;
    $scope.ovalisVisible = initial_state;
    $scope.circleisVisible = initial_state;
    
    $scope.decagon = function(){
        $scope.decagonisVisible = !$scope.decagonisVisible;
    }
    
    $scope.nonagon = function(){
        $scope.nonagonisVisible = !$scope.nonagonisVisible;
    }
    
    $scope.octagon = function(){
        $scope.octagonisVisible = !$scope.octagonisVisible;
    }
    
    $scope.heptagon = function(){
        $scope.heptagonisVisible = !$scope.heptagonisVisible;
    }
    
    $scope.hexagon = function(){
        $scope.hexagonisVisible = !$scope.hexagonisVisible;
    }
    
    $scope.pentagon = function(){
        $scope.pentagonisVisible = !$scope.pentagonisVisible;
    }
    
    $scope.rectangle = function(){
        $scope.rectangleisVisible = !$scope.rectangleisVisible;
    }
    
    $scope.parallelogram = function(){
        $scope.parallelogramisVisible = !$scope.parallelogramisVisible;
    }
    
    $scope.rhombus = function(){
        $scope.rhombusisVisible = !$scope.rhombusisVisible;
    }
    
    $scope.diamond = function(){
        $scope.diamondisVisible = !$scope.diamondisVisible;
    }
    
    $scope.trapezium = function(){
        $scope.trapeziumisVisible = !$scope.trapeziumisVisible;
    }
    
    $scope.square = function(){
        $scope.squareisVisible = !$scope.squareisVisible;
    }
    
    $scope.traingle = function(){
        $scope.traingleisVisible = !$scope.traingleisVisible;
    }
    
    $scope.oval = function(){
        $scope.ovalisVisible = !$scope.ovalisVisible;
    }
    
    $scope.circle = function(){
        $scope.circleisVisible = !$scope.circleisVisible;
    }
})


.controller('DashCtrl', function($scope, $stateParams , Profiles) {
    /*
    $scope.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                items: $scope.profiles,
                update: function (filteredItems, filterText) {
                    $scope.profiles = filteredItems;
                    if (filterText) {
                        console.log(filterText);
                    }
                }
            });
        };
    **/
});

