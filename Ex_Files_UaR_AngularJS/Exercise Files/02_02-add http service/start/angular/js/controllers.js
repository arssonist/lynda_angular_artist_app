////////BASIC RETREIVAL OF JSON/////////////////////

var myApp = angular.module('myApp', []);

// myApp.controller('MyController', function MyController($scope, $http) {
//   $http.get('js/data.json').success(function(data){
//     $scope.artists = data;
//   });//add http to MyController so it can be utiltized inside
// });//call http  .get to retireve the data, and succcess attach to scope



////////SAME BUT FOR MINIFIED JS////////////////////


myApp.controller('MyController',['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data){
    $scope.artists = data;
  });
}]);//puts internals into an array as seen to protect form minfication
