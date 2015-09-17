'use strict';

/**
 * @ngdoc function
 * @name DAuth.controller:RestrictedCtrl
 * @description
 * # RestrictedCtrl
 * Controller of the DAuth
 */
angular.module('DAuth')
  .controller('RestrictedCtrl', function ($scope, $location) {
    $scope.$on('djangoAuth.logged_in', function() {
      $location.path('/');
    });
  });
