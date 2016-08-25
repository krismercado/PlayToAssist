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
       
       if(typeof(user)=='undefined'){
			$scope.showAlert('Please fill username and password to proceed.');	
			return false;
		}
       else{
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
       }
       

		
	};

  //--------------------------------------------
  $scope.logout = function() {    $location.path('/app/login');   };

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

.controller('ShapesCtrl', function($scope, $stateParams , Profiles, $ionicModal) {
	var initial_state = false;
   
    $scope.decagonisVisible = initial_state;
    $scope.nonagonisVisible = initial_state;
    $scope.octagonisVisible = initial_state;
    $scope.heptagonisVisible = initial_state;
    $scope.hexagonisVisible = initial_state;
    $scope.pentagonisVisible = initial_state;
    $scope.rectangleisVisible = initial_state;
    $scope.parallelogramisVisible = initial_state;
    $scope.diamondisVisible = initial_state;
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
    
    $scope.diamond = function(){
        $scope.diamondisVisible = !$scope.diamondisVisible;
    }
    
    $scope.square = function(){
        $scope.squareisVisible = !$scope.squareisVisible;
    }
    
    $scope.triangle = function(){
        $scope.triangleisVisible = !$scope.triangleisVisible;
    }
    
    $scope.oval = function(){
        $scope.ovalisVisible = !$scope.ovalisVisible;
    }
    
    $scope.circle = function(){
        $scope.circleisVisible = !$scope.circleisVisible;
    }
    
    $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/nonagon.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.nonagon = modal;
  });
  $scope.openModal = function() {
    $scope.nonagon.show();
  };
  $scope.closeModal2 = function() {
    $scope.nonagon.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/octagon.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.octagon = modal;
  });
  $scope.openModal = function() {
    $scope.octagon.show();
  };
  $scope.closeModal3 = function() {
    $scope.octagon.hide();
  };
    
        $ionicModal.fromTemplateUrl('templates/modals/heptagon.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.heptagon = modal;
  });
  $scope.openModal = function() {
    $scope.heptagon.show();
  };
  $scope.closeModal4 = function() {
    $scope.heptagon.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/rectangle.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.rectangle = modal;
  });
  $scope.openModal = function() {
    $scope.rectangle.show();
  };
  $scope.closeModal5 = function() {
    $scope.rectangle.hide();
  };
    
    
    $ionicModal.fromTemplateUrl('templates/modals/pentagon.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.pentagon = modal;
  });
  $scope.openModal = function() {
    $scope.pentagon.show();
  };
  $scope.closeModal6 = function() {
    $scope.pentagon.hide();
  };
    
    
    $ionicModal.fromTemplateUrl('templates/modals/hexagon.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.hexagon = modal;
  });
  $scope.openModal = function() {
    $scope.hexagon.show();
  };
  $scope.closeModal7 = function() {
    $scope.hexagon.hide();
  };
    
    
    $ionicModal.fromTemplateUrl('templates/modals/parallelogram.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.parallelogram = modal;
  });
  $scope.openModal = function() {
    $scope.parallelogram.show();
  };
  $scope.closeModal8 = function() {
    $scope.parallelogram.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/circle.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.circle = modal;
  });
  $scope.openModal = function() {
    $scope.ciircle.show();
  };
  $scope.closeModal9 = function() {
    $scope.circle.hide();
  };
    
    
    $ionicModal.fromTemplateUrl('templates/modals/diamond.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.diamond = modal;
  });
  $scope.openModal = function() {
    $scope.diamond.show();
  };
  $scope.closeModal10 = function() {
    $scope.diamond.hide();
  };
    
    
    $ionicModal.fromTemplateUrl('templates/modals/oval.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oval = modal;
  });
  $scope.openModal = function() {
    $scope.oval.show();
  };
  $scope.closeModal11 = function() {
    $scope.oval.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/square.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.square = modal;
  });
  $scope.openModal = function() {
    $scope.square.show();
  };
  $scope.closeModal12 = function() {
    $scope.square.hide();
  };
    
        $ionicModal.fromTemplateUrl('templates/modals/triangle.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.triangle = modal;
  });
  $scope.openModal = function() {
    $scope.triangle.show();
  };
  $scope.closeModal13 = function() {
    $scope.triangle.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/star.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.star = modal;
  });
  $scope.openModal = function() {
    $scope.star.show();
  };
  $scope.closeModal = function() {
    $scope.star.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/heart.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.heart = modal;
  });
  $scope.openModal = function() {
    $scope.heart.show();
  };
  $scope.closeModal = function() {
    $scope.heart.hide();
  };
})

.controller('abcCtrl', function($scope, $stateParams , Profiles,  $ionicModal) {
	var initial_state = false;
   
    $scope.AisVisible = initial_state;
    $scope.BisVisible = initial_state;
    $scope.CisVisible = initial_state;
    $scope.DisVisible = initial_state;
    $scope.EisVisible = initial_state;
    $scope.FisVisible = initial_state;
    $scope.GisVisible = initial_state;
    $scope.HisVisible = initial_state;
    $scope.IisVisible = initial_state;
    $scope.JisVisible = initial_state;
    $scope.KisVisible = initial_state;
    $scope.LisVisible = initial_state;
    $scope.MisVisible = initial_state;
    $scope.NisVisible = initial_state;
    $scope.OisVisible = initial_state;
    $scope.PisVisible = initial_state;
    $scope.QisVisible = initial_state;
    $scope.RisVisible = initial_state;
    $scope.SisVisible = initial_state;
    $scope.TisVisible = initial_state;
    $scope.UisVisible = initial_state;
    $scope.VisVisible = initial_state;
    $scope.WisVisible = initial_state;
    $scope.XisVisible = initial_state;
    $scope.YisVisible = initial_state;
    $scope.ZisVisible = initial_state;
    
    $scope.A = function(){
        $scope.AisVisible = !$scope.AisVisible;
    }
    
    $scope.B = function(){
        $scope.BisVisible = !$scope.BisVisible;
    }
    
    $scope.C = function(){
        $scope.CisVisible = !$scope.CisVisible;
    }
    
    $scope.D = function(){
        $scope.DisVisible = !$scope.DisVisible;
    }
    
    $scope.E = function(){
        $scope.EisVisible = !$scope.EisVisible;
    }
    
    $scope.F = function(){
        $scope.FisVisible = !$scope.FisVisible;
    }
    
    $scope.G = function(){
        $scope.GisVisible = !$scope.GisVisible;
    }
    
    $scope.H = function(){
        $scope.HisVisible = !$scope.HisVisible;
    }
    
    $scope.I = function(){
        $scope.IisVisible = !$scope.IisVisible;
    }
    
    $scope.J = function(){
        $scope.JisVisible = !$scope.JisVisible;
    }
    
    $scope.K = function(){
        $scope.KisVisible = !$scope.KisVisible;
    }
    
    $scope.L = function(){
        $scope.LisVisible = !$scope.LisVisible;
    }
    
    $scope.M = function(){
        $scope.MisVisible = !$scope.MisVisible;
    }
    
    $scope.N = function(){
        $scope.NisVisible = !$scope.NisVisible;
    }
    
    $scope.O = function(){
        $scope.OisVisible = !$scope.OisVisible;
    }
    $scope.P = function(){
        $scope.PisVisible = !$scope.PisVisible;
    }
    $scope.Q = function(){
        $scope.QisVisible = !$scope.QisVisible;
    }
    $scope.R = function(){
        $scope.RisVisible = !$scope.RisVisible;
    }
    $scope.S = function(){
        $scope.SisVisible = !$scope.SisVisible;
    }
    $scope.T = function(){
        $scope.TisVisible = !$scope.TisVisible;
    }
    $scope.U = function(){
        $scope.UisVisible = !$scope.UisVisible;
    }
    $scope.V = function(){
        $scope.VisVisible = !$scope.VisVisible;
    }
    $scope.W = function(){
        $scope.WisVisible = !$scope.WisVisible;
    }
    $scope.X = function(){
        $scope.XisVisible = !$scope.XisVisible;
    }
    $scope.Y = function(){
        $scope.YisVisible = !$scope.YisVisible;
    }
    $scope.Z = function(){
        $scope.ZisVisible = !$scope.ZisVisible;
    }
    
    $ionicModal.fromTemplateUrl('templates/modals/A.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.A = modal;
  });
  $scope.openModal = function() {
    $scope.A.show();
  };
  $scope.closeModal = function() {
    $scope.A.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/B.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.B = modal;
  });
  $scope.openModal = function() {
    $scope.B.show();
  };
  $scope.closeModal = function() {
    $scope.B.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/C.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.C = modal;
  });
  $scope.openModal = function() {
    $scope.C.show();
  };
  $scope.closeModal = function() {
    $scope.C.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/D.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.D = modal;
  });
  $scope.openModal = function() {
    $scope.D.show();
  };
  $scope.closeModal = function() {
    $scope.D.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/E.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.E = modal;
  });
  $scope.openModal = function() {
    $scope.E.show();
  };
  $scope.closeModal = function() {
    $scope.E.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/F.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.F = modal;
  });
  $scope.openModal = function() {
    $scope.F.show();
  };
  $scope.closeModal = function() {
    $scope.F.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/G.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.G = modal;
  });
  $scope.openModal = function() {
    $scope.G.show();
  };
  $scope.closeModal = function() {
    $scope.G.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/H.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.H = modal;
  });
  $scope.openModal = function() {
    $scope.H.show();
  };
  $scope.closeModal = function() {
    $scope.H.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/I.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.I = modal;
  });
  $scope.openModal = function() {
    $scope.I.show();
  };
  $scope.closeModal = function() {
    $scope.I.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/J.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.J = modal;
  });
  $scope.openModal = function() {
    $scope.J.show();
  };
  $scope.closeModal = function() {
    $scope.J.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/K.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.K = modal;
  });
  $scope.openModal = function() {
    $scope.K.show();
  };
  $scope.closeModal = function() {
    $scope.K.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/L.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.L = modal;
  });
  $scope.openModal = function() {
    $scope.L.show();
  };
  $scope.closeModal = function() {
    $scope.L.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/M.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.M = modal;
  });
  $scope.openModal = function() {
    $scope.M.show();
  };
  $scope.closeModal = function() {
    $scope.M.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/N.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.N = modal;
  });
  $scope.openModal = function() {
    $scope.N.show();
  };
  $scope.closeModal = function() {
    $scope.N.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/O.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.O = modal;
  });
  $scope.openModal = function() {
    $scope.O.show();
  };
  $scope.closeModal = function() {
    $scope.O.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/P.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.P = modal;
  });
  $scope.openModal = function() {
    $scope.P.show();
  };
  $scope.closeModal = function() {
    $scope.P.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/Q.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.Q = modal;
  });
  $scope.openModal = function() {
    $scope.Q.show();
  };
  $scope.closeModal = function() {
    $scope.Q.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/R.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.R = modal;
  });
  $scope.openModal = function() {
    $scope.R.show();
  };
  $scope.closeModal = function() {
    $scope.R.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/S.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.S = modal;
  });
  $scope.openModal = function() {
    $scope.S.show();
  };
  $scope.closeModal = function() {
    $scope.S.hide();
  };
  
$ionicModal.fromTemplateUrl('templates/modals/T.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.T = modal;
  });
  $scope.openModal = function() {
    $scope.T.show();
  };
  $scope.closeModal = function() {
    $scope.T.hide();
  };  
  
  $ionicModal.fromTemplateUrl('templates/modals/U.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.U = modal;
  });
  $scope.openModal = function() {
    $scope.U.show();
  };
  $scope.closeModal = function() {
    $scope.U.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/V.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.V = modal;
  });
  $scope.openModal = function() {
    $scope.V.show();
  };
  $scope.closeModal = function() {
    $scope.V.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/W.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.W = modal;
  });
  $scope.openModal = function() {
    $scope.W.show();
  };
  $scope.closeModal = function() {
    $scope.W.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/X.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.X = modal;
  });
  $scope.openModal = function() {
    $scope.X.show();
  };
  $scope.closeModal = function() {
    $scope.X.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/Y.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.Y = modal;
  });
  $scope.openModal = function() {
    $scope.Y.show();
  };
  $scope.closeModal = function() {
    $scope.Y.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/Z.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.Z = modal;
  });
  $scope.openModal = function() {
    $scope.Z.show();
  };
  $scope.closeModal = function() {
    $scope.Z.hide();
  };
})

.controller('123Ctrl', function($scope, $stateParams , Profiles, $ionicModal) {
	var initial_state = false;
   
    $scope.a1isVisible = initial_state;
    $scope.a2isVisible = initial_state;
    $scope.a3isVisible = initial_state;
    $scope.a4isVisible = initial_state;
    $scope.a5isVisible = initial_state;
    $scope.a6isVisible = initial_state;
    $scope.a7isVisible = initial_state;
    $scope.a8isVisible = initial_state;
    $scope.a9isVisible = initial_state;
    $scope.a10isVisible = initial_state;
    
    
    $scope.a1 = function(){
        $scope.a1isVisible = !$scope.a1isVisible;
    }
    
    $scope.a2 = function(){
        $scope.a2isVisible = !$scope.a2isVisible;
    }
    
    $scope.a3 = function(){
        $scope.a3isVisible = !$scope.a3isVisible;
    }
    
    $scope.a4 = function(){
        $scope.a4isVisible = !$scope.a4isVisible;
    }
    
    $scope.a5 = function(){
        $scope.a5isVisible = !$scope.a5isVisible;
    }
    
    $scope.a6 = function(){
        $scope.a6isVisible = !$scope.a6isVisible;
    }
    
    $scope.a7 = function(){
        $scope.a7isVisible = !$scope.a7isVisible;
    }
    
    $scope.a8 = function(){
        $scope.a8isVisible = !$scope.a8isVisible;
    }
    
    $scope.a9 = function(){
        $scope.a9isVisible = !$scope.a9isVisible;
    }
    
    $scope.a10 = function(){
        $scope.a10isVisible = !$scope.a10isVisible;
    }
    
    $ionicModal.fromTemplateUrl('templates/modals/number1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number1 = modal;
  });
  $scope.openModal = function() {
    $scope.number1.show();
  };
  $scope.closeModal = function() {
    $scope.number1.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number2 = modal;
  });
  $scope.openModal = function() {
    $scope.number2.show();
  };
  $scope.closeModal = function() {
    $scope.number2.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number3.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number3 = modal;
  });
  $scope.openModal = function() {
    $scope.number3.show();
  };
  $scope.closeModal = function() {
    $scope.number3.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number4.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number4 = modal;
  });
  $scope.openModal = function() {
    $scope.number4.show();
  };
  $scope.closeModal = function() {
    $scope.number4.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number5.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number5 = modal;
  });
  $scope.openModal = function() {
    $scope.number5.show();
  };
  $scope.closeModal = function() {
    $scope.number5.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number6.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number6 = modal;
  });
  $scope.openModal = function() {
    $scope.number6.show();
  };
  $scope.closeModal = function() {
    $scope.number6.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number7.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number7 = modal;
  });
  $scope.openModal = function() {
    $scope.number7.show();
  };
  $scope.closeModal = function() {
    $scope.number7.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number8.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number8 = modal;
  });
  $scope.openModal = function() {
    $scope.number8.show();
  };
  $scope.closeModal = function() {
    $scope.number8.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number9.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number9 = modal;
  });
  $scope.openModal = function() {
    $scope.number9.show();
  };
  $scope.closeModal = function() {
    $scope.number9.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number10.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number10 = modal;
  });
  $scope.openModal = function() {
    $scope.number10.show();
  };
  $scope.closeModal = function() {
    $scope.number10.hide();
  };
})

.controller('QuizCtrl', function($scope, $stateParams , $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/modals/correct.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.correct = modal;
      });
      $scope.openModal = function() {
        $scope.correct.show();
      };
      $scope.closeModal = function() {
        $scope.correct.hide();
      };
    
    $ionicModal.fromTemplateUrl('templates/modals/wrong.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.wrong = modal;
      });
      $scope.openModal = function() {
        $scope.wrong.show();
      };
      $scope.closeModal = function() {
        $scope.wrong.hide();
      };
    
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

