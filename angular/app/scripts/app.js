'use strict';

angular.module('DAuth', [] );
angular.module('Dashboard', [] );

// Prepare the 'users' module for subsequent registration of controllers and delegates
angular.module('users', [] );

angular.module('MainApp', [
    // Dependencies (ORDER MATTERS)
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngMaterial',
    'DAuth', 'Dashboard', 'users',
  ]
);

// MAIN ROUTES
angular.module('MainApp')
  .config( ['$routeProvider',
              function($routeProvider) {
                var VIEW_PATH = 'scripts/auth/views/';

                $routeProvider
                  .when('/', {
                    templateUrl: VIEW_PATH + 'main.html',
                    controller: 'MainCtrl',
                    resolve: {
                      authenticated: ['djangoAuth', function(djangoAuth){
                        return djangoAuth.authenticationStatus();
                      }],
                    }
                  })
                  //.when('/'), {}
              }
            ]
  );
