'use strict';

angular.module('random')
  .controller('MainCtrl', function ($scope) {

    $scope.winner = 'And the winner is...';
    $scope.numberOfPeople = '';
    $scope.resultGiven = false;

    $scope.getRandomNumber = function()
    {
      var random = _.random(1, $scope.numberOfPeople);
      $scope.winner = '#' + random;
      $scope.resultGiven = true;
    };

  });
