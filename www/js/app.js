// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' , 'starter.services'])

.run(function($ionicPlatform , $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

     $rootScope.authStatus = false;
	 //stateChange event
	  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
		  $rootScope.authStatus = toState.authStatus;
		  if($rootScope.authStatus){
			  
			
		  }
    });

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		console.log("URL : "+toState.url);
		if(toState.url=='/dashboard'){
			console.log("match : "+toState.url);
			$timeout(function(){
				angular.element(document.querySelector('#leftMenu' )).removeClass("hide");
			},1000);
		}	
	});

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//--------------------------------------

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/signin.html'
      }
    },
	authStatus: false
  })

//--------------------------------------


  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.grades', {
    url: '/grades',
    views: {
      'menuContent': {
        templateUrl: 'templates/grades.html',
		controller: 'GradesCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.hygene', {
    url: '/hygene',
    views: {
      'menuContent': {
        templateUrl: 'templates/hygene.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapes', {
    url: '/shapes',
    views: {
      'menuContent': {
        templateUrl: 'templates/shapes.html',
		controller: 'ShapesCtrl'
           }
     },
	 authStatus: true
  })
  
  .state('app.stories', {
    url: '/stories',
    views: {
      'menuContent': {
        templateUrl: 'templates/stories.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.quiz', {
    url: '/quiz',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.tutorials', {
    url: '/tutorials',
    views: {
      'menuContent': {
        templateUrl: 'templates/tutorials.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.abc', {
    url: '/abc',
    views: {
      'menuContent': {
        templateUrl: 'templates/abc.html',
		controller: 'abcCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.123', {
    url: '/123',
    views: {
      'menuContent': {
        templateUrl: 'templates/123.html',
		controller: '123Ctrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz1', {
    url: '/shapesquiz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz2', {
    url: '/shapesquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes2.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz3', {
    url: '/shapesquiz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes3.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz4', {
    url: '/shapesquiz4',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes4.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz5', {
    url: '/shapesquiz5',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes5.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz6', {
    url: '/shapesquiz6',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes6.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz7', {
    url: '/shapesquiz7',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes7.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz8', {
    url: '/shapesquiz8',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes8.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz9', {
    url: '/shapesquiz9',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes9.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz10', {
    url: '/shapesquiz10',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes/shapes10.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz1', {
    url: '/numberquiz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz2', {
    url: '/numberquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number2.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz3', {
    url: '/numberquiz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number3.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz4', {
    url: '/numberquiz4',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number4.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz5', {
    url: '/numberquiz5',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number5.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz6', {
    url: '/numberquiz6',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number6.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz7', {
    url: '/numberquiz7',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number7.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz8', {
    url: '/numberquiz8',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number8.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz9', {
    url: '/numberquiz9',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number9.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.numberquiz10', {
    url: '/numberquiz10',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/counting/number10.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz1', {
    url: '/colorquiz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz2', {
    url: '/colorquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz2.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz3', {
    url: '/colorquiz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz3.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz4', {
    url: '/colorquiz4',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz4.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz5', {
    url: '/colorquiz5',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz5.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz6', {
    url: '/colorquiz6',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz6.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.colorquiz7', {
    url: '/colorquiz7',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/colors/colorquiz7.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.sensesquiz1', {
    url: '/sensesquiz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/senses/senses1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.sensesquiz2', {
    url: '/sensesquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/senses/senses2.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.sensesquiz3', {
    url: '/sensesquiz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/senses/senses3.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.sensesquiz4', {
    url: '/sensesquiz4',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/senses/senses4.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.sensesquiz5', {
    url: '/sensesquiz5',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/senses/senses5.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.tastesquiz1', {
    url: '/tastesquiz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/tastes/taste1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.tastesquiz2', {
    url: '/tastesquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/tastes/taste2.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.tastesquiz3', {
    url: '/tastesquiz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/tastes/taste3.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.tastesquiz4', {
    url: '/tastesquiz4',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/tastes/taste4.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.tastesquiz5', {
    url: '/tastesquiz5',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/tastes/taste5.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.alphaquiz1', {
    url: '/alphaquiz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/alphabet/alpha1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.alphaquiz2', {
    url: '/alphaquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/alphabet/alpha2.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.alphaquiz3', {
    url: '/alphaquiz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/alphabet/alpha3.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.alphaquiz4', {
    url: '/alphaquiz4',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/alphabet/alpha4.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.alphaquiz5', {
    url: '/alphaquiz5',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/alphabet/alpha5.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
   .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutus.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
     .state('app.tutorial', {
    url: '/tutorial',
    views: {
      'menuContent': {
        templateUrl: 'templates/tutorial.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.color', {
    url: '/color',
    views: {
      'menuContent': {
        templateUrl: 'templates/color.html',
		controller: 'colorCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.senses', {
    url: '/senses',
    views: {
      'menuContent': {
        templateUrl: 'templates/senses.html',
		controller: 'sensesCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.taste', {
    url: '/taste',
    views: {
      'menuContent': {
        templateUrl: 'templates/taste.html',
		controller: 'tasteCtrl'
      }
     },
	 authStatus: true
  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
