'use strict';

/**
 * @ngdoc function
 * @name myResumeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myResumeApp
 */
angular.module('myResumeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
