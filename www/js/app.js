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
        templateUrl: 'templates/quiz/shapes1.html',
		controller: 'QuizCtrl'
      }
     },
	 authStatus: true
  })
  
  .state('app.shapesquiz2', {
    url: '/shapesquiz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz/shapes2.html',
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
