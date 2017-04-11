
var app = angular.module("simonApp", []);
// alert("Welcome To Simon!");
app.controller('simonController', ['$scope', '$timeout', function($scope, $timeout){
  $scope.count = 0;
  $scope.red = 'red';
  $scope.yellow = 'yellow';
  $scope.green = 'green';
  $scope.blue = 'blue';
  $scope.currentGame = [];
  $scope.player1 = true;
  $scope.player2 = false;

  var player1moves = [];
  var player2moves = [];
  var gameover = false;
  var newGame = true;

  $scope.player = function(){
    if($scope.player1 === true){
      $scope.player1 = false;
      $scope.player2 = true;
    } else {
      $scope.player1 = true;
      $scope.player2 = false;
    }
  }

  $scope.buttonPress = function(id){
    $scope.clickVisualEffect(id);
  };

  $scope.clickVisualEffect = function(id){
    switch(id){
      case 1:
        $scope.red = 'white';
        $timeout(function() {
        $scope.red = 'red';
          }, 500);
        break;
      case 2:
        $scope.green = 'white';
        $timeout(function() {
          $scope.green = 'green';
           }, 500);
        break;
      case 3:
        $scope.yellow = 'white';
        $timeout(function() {
          $scope.yellow = 'yellow';
              }, 500);
        break;
      case 4:
        $scope.blue = 'white';
        $timeout(function() {
          $scope.blue = 'blue';
           }, 500);
        break;
    }
  }

  $scope.clearGame = function(){
    $scope.currentGame = [];
    $scope.count = 0;
    addCount();
  }
  $scope.addCount = function(){
    $scope.count++;
  }
  $scope.newGame = function(){
    $scope.clearGame();
  }
  $scope.generateMove = function(){

  }

}])
