angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup, $http, $rootScope) {

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
             $rootScope.user = user.validate.id;
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
    
     $scope.showAlert2 = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Information',
		 template: msg
	   });
	 };
  //--------------------------------------------
})

.controller('ShapesCtrl', function($scope, $stateParams , Profiles, $ionicModal) {
   
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
  
  $scope.rectangleaudio = function() {
    document.getElementById('rectangle').play();
  };
  
  $scope.circleaudio = function() {
    document.getElementById('circle').play();
  };
  
  $scope.ovalaudio = function() {
    document.getElementById('oval').play();
  };
  
  $scope.triangleaudio = function() {
    document.getElementById('triangle').play();
  };
  
  $scope.heartaudio = function() {
    document.getElementById('heart').play();
  };
  
  $scope.staraudio = function() {
    document.getElementById('star').play();
  };
  
  $scope.diamondaudio = function() {
    document.getElementById('diamond').play();
  };
  
  $scope.squareaudio = function() {
    document.getElementById('square').play();
  };
})

.controller('abcCtrl', function($scope, $stateParams , Profiles,  $ionicModal) {  
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
    
    
   $scope.Aaudio = function() {
    document.getElementById('A').play();
  };
     $scope.Baudio = function() {
    document.getElementById('B').play();
  };
     $scope.Caudio = function() {
    document.getElementById('C').play();
  };
    $scope.Daudio = function() {
    document.getElementById('D').play();
  };
    $scope.Eaudio = function() {
    document.getElementById('E').play();
  };
    $scope.Faudio = function() {
    document.getElementById('F').play();
  };
    $scope.Gaudio = function() {
    document.getElementById('G').play();
  };
    $scope.Haudio = function() {
    document.getElementById('H').play();
  };
    $scope.Iaudio = function() {
    document.getElementById('I').play();
  };
    $scope.Jaudio = function() {
    document.getElementById('J').play();
  };
    $scope.Kaudio = function() {
    document.getElementById('K').play();
  };
    $scope.Laudio = function() {
    document.getElementById('L').play();
  };
    $scope.Maudio = function() {
    document.getElementById('M').play();
  };
    $scope.Naudio = function() {
    document.getElementById('N').play();
  };
    $scope.Oaudio = function() {
    document.getElementById('O').play();
  };
    $scope.Paudio = function() {
    document.getElementById('P').play();
  };
    $scope.Qaudio = function() {
    document.getElementById('Q').play();
  };
    $scope.Raudio = function() {
    document.getElementById('R').play();
  };
    $scope.Saudio = function() {
    document.getElementById('S').play();
  };
    $scope.Taudio = function() {
    document.getElementById('T').play();
  };
    $scope.Uaudio = function() {
    document.getElementById('U').play();
  };
    $scope.Vaudio = function() {
    document.getElementById('V').play();
  };
    $scope.Waudio = function() {
    document.getElementById('W').play();
  };
    $scope.Xaudio = function() {
    document.getElementById('X').play();
  };
    $scope.Yaudio = function() {
    document.getElementById('Y').play();
  };
    $scope.Zaudio = function() {
    document.getElementById('Z').play();
  };
    
})

.controller('123Ctrl', function($scope, $stateParams , Profiles, $ionicModal) {

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
  
  $ionicModal.fromTemplateUrl('templates/modals/number11.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number11 = modal;
  });
  $scope.openModal = function() {
    $scope.number11.show();
  };
  $scope.closeModal = function() {
    $scope.number11.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number12.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number12 = modal;
  });
  $scope.openModal = function() {
    $scope.number12.show();
  };
  $scope.closeModal = function() {
    $scope.number12.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number13.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number13 = modal;
  });
  $scope.openModal = function() {
    $scope.number13.show();
  };
  $scope.closeModal = function() {
    $scope.number13.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number14.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number14 = modal;
  });
  $scope.openModal = function() {
    $scope.number14.show();
  };
  $scope.closeModal = function() {
    $scope.number14.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number15.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number15 = modal;
  });
  $scope.openModal = function() {
    $scope.number15.show();
  };
  $scope.closeModal = function() {
    $scope.number15.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number16.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number16 = modal;
  });
  $scope.openModal = function() {
    $scope.number16.show();
  };
  $scope.closeModal = function() {
    $scope.number16.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number17.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number17 = modal;
  });
  $scope.openModal = function() {
    $scope.number17.show();
  };
  $scope.closeModal = function() {
    $scope.number17.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number18.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number18 = modal;
  });
  $scope.openModal = function() {
    $scope.number18.show();
  };
  $scope.closeModal = function() {
    $scope.number18.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number19.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number19 = modal;
  });
  $scope.openModal = function() {
    $scope.number19.show();
  };
  $scope.closeModal = function() {
    $scope.number19.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/number20.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.number20 = modal;
  });
  $scope.openModal = function() {
    $scope.number20.show();
  };
  $scope.closeModal = function() {
    $scope.number20.hide();
  };
  
   $scope.number1audio = function() {
    document.getElementById('number1').play();
  };
  
  $scope.number2audio = function() {
    document.getElementById('number2').play();
  };
  
  $scope.number3audio = function() {
    document.getElementById('number3').play();
  };
  
  $scope.number4audio = function() {
    document.getElementById('number4').play();
  };
  
  $scope.number5audio = function() {
    document.getElementById('number5').play();
  };
  
  $scope.number6audio = function() {
    document.getElementById('number6').play();
  };
  
  $scope.number7audio = function() {
    document.getElementById('number7').play();
  };
  
  $scope.number8audio = function() {
    document.getElementById('number8').play();
  };
  
  $scope.number9audio = function() {
    document.getElementById('number9').play();
  };
  
  $scope.number10audio = function() {
    document.getElementById('number10').play();
  };
  
   $scope.number11audio = function() {
    document.getElementById('number11').play();
  };
  
  $scope.number12audio = function() {
    document.getElementById('number12').play();
  };
  
  $scope.number13audio = function() {
    document.getElementById('number13').play();
  };
  
  $scope.number14audio = function() {
    document.getElementById('number14').play();
  };
  
  $scope.number15audio = function() {
    document.getElementById('number15').play();
  };
  
  $scope.number16audio = function() {
    document.getElementById('number16').play();
  };
  
  $scope.number17audio = function() {
    document.getElementById('number17').play();
  };
  
  $scope.number18audio = function() {
    document.getElementById('number18').play();
  };
  
  $scope.number19audio = function() {
    document.getElementById('number19').play();
  };
  
  $scope.number20audio = function() {
    document.getElementById('number20').play();
  };
})

.controller('colorCtrl', function($scope, $stateParams , Profiles, $ionicModal) {    
    $ionicModal.fromTemplateUrl('templates/modals/red.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.red = modal;
  });
  $scope.openModal = function() {
    $scope.red.show();
  };
  $scope.closeModal = function() {
    $scope.red.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/orange.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.orange = modal;
  });
  $scope.openModal = function() {
    $scope.orange.show();
  };
  $scope.closeModal = function() {
    $scope.orange.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/yellow.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.yellow = modal;
  });
  $scope.openModal = function() {
    $scope.yellow.show();
  };
  $scope.closeModal = function() {
    $scope.yellow.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/green.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.green = modal;
  });
  $scope.openModal = function() {
    $scope.green.show();
  };
  $scope.closeModal = function() {
    $scope.green.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/blue.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.blue = modal;
  });
  $scope.openModal = function() {
    $scope.blue.show();
  };
  $scope.closeModal = function() {
    $scope.blue.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/purple.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.purple = modal;
  });
  $scope.openModal = function() {
    $scope.purple.show();
  };
  $scope.closeModal = function() {
    $scope.purple.hide();
  };
    
    $ionicModal.fromTemplateUrl('templates/modals/pink.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.pink = modal;
  });
  $scope.openModal = function() {
    $scope.pink.show();
  };
  $scope.closeModal = function() {
    $scope.pink.hide();
  };
  
  $scope.blueaudio = function() {
    document.getElementById('blue').play();
  };
  
  $scope.greenaudio = function() {
    document.getElementById('green').play();
  };
  
  $scope.orangeaudio = function() {
    document.getElementById('orange').play();
  };
  
  $scope.pinkaudio = function() {
    document.getElementById('pink').play();
  };
  
  $scope.purpleaudio = function() {
    document.getElementById('purple').play();
  };
  
  $scope.redaudio = function() {
    document.getElementById('red').play();
  };
  
  $scope.yellowaudio = function() {
    document.getElementById('yellow').play();
  };
})

.controller('sensesCtrl', function($scope, $stateParams , Profiles, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/modals/skin.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.skin = modal;
  });
  $scope.openModal = function() {
    $scope.skin.show();
  };
  $scope.closeModal = function() {
    $scope.skin.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/eye.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.eye = modal;
  });
  $scope.openModal = function() {
    $scope.eye.show();
  };
  $scope.closeModal = function() {
    $scope.eye.hide();
  };
  
   $ionicModal.fromTemplateUrl('templates/modals/ear.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.ear = modal;
  });
  $scope.openModal = function() {
    $scope.ear.show();
  };
  $scope.closeModal = function() {
    $scope.ear.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/nose.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.nose = modal;
  });
  $scope.openModal = function() {
    $scope.nose.show();
  };
  $scope.closeModal = function() {
    $scope.nose.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/tongue.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.tongue = modal;
  });
  $scope.openModal = function() {
    $scope.tongue.show();
  };
  $scope.closeModal = function() {
    $scope.tongue.hide();
  };
  
  $scope.hearingaudio = function() {
    document.getElementById('hearing').play();
  };
  
  $scope.sightaudio = function() {
    document.getElementById('sight').play();
  };
  
  $scope.smellaudio = function() {
    document.getElementById('smell').play();
  };
  
  $scope.tasteaudio = function() {
    document.getElementById('taste').play();
  };
  
  $scope.touchaudio = function() {
    document.getElementById('touch').play();
  };
  })

.controller('tasteCtrl', function($scope, $stateParams , Profiles, $ionicModal) {
	var initial_state = false;

    $ionicModal.fromTemplateUrl('templates/modals/sweet.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.sweet = modal;
  });
  $scope.openModal = function() {
    $scope.sweet.show();
  };
  $scope.closeModal = function() {
    $scope.sweet.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/salty.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.salty = modal;
  });
  $scope.openModal = function() {
    $scope.salty.show();
  };
  $scope.closeModal = function() {
    $scope.salty.hide();
  };
  
   $ionicModal.fromTemplateUrl('templates/modals/sour.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.sour = modal;
  });
  $scope.openModal = function() {
    $scope.sour.show();
  };
  $scope.closeModal = function() {
    $scope.sour.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/bitter.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.bitter = modal;
  });
  $scope.openModal = function() {
    $scope.bitter.show();
  };
  $scope.closeModal = function() {
    $scope.bitter.hide();
  };
  
  $ionicModal.fromTemplateUrl('templates/modals/spicy.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.spicy = modal;
  });
  $scope.openModal = function() {
    $scope.spicy.show();
  };
  $scope.closeModal = function() {
    $scope.spicy.hide();
  };
  
  $scope.sweetaudio = function() {
    document.getElementById('sweet').play();
  };
  
  $scope.bitteraudio = function() {
    document.getElementById('bitter').play();
  };
  
  $scope.saltyaudio = function() {
    document.getElementById('salty').play();
  };
  
  $scope.souraudio = function() {
    document.getElementById('sour').play();
  };
  
  $scope.spicyaudio = function() {
    document.getElementById('spicy').play();
  };
  })  
  
.controller('QuizCtrl', function($http, $scope, $rootScope, $stateParams , $ionicModal,  $location) {
    
      $scope.id = $rootScope.user;
     $scope.endquiz = function(score,quiz_type) {
        $http({
          method: 'POST',
          url: 'http://assistwebportal.com/Main/studentscore',
           transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
           },
          data: { user_id: $scope.id,quiz_type:quiz_type,quiz_score:score}
        }).then(function successCallback(response) {
            $scope.showAlert2('Score Saved!');	
             $location.path('/app/quiz');
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
           console.log('error');
       });

	};
    
    $ionicModal.fromTemplateUrl('templates/modals/correct.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.correct = modal;
      });
      $scope.openCorrectModal = function(data) {
        $scope.correct.show();
          console.log(data);
       $rootScope.quizloc = data;
          
      };
      $scope.closeModal = function() {
        $scope.correct.hide();
      };
    
    $scope.nextquestion = function(){
         $scope.correct.hide();
        $location.path($rootScope.quizloc);
    }
    
    $ionicModal.fromTemplateUrl('templates/modals/wrong.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.wrong = modal;
      });
      $scope.openWrongModal = function() {
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

