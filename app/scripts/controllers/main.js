'use strict';

/**
 * @ngdoc function
 * @name myResumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myResumeApp
 */
angular.module('myResumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
