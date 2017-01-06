var myApp = angular.module('myApp', [
  'ngRoute', //call to use ngRoute
  'artistControllers' //link to this contoller
]);

myApp.config(['$routeProvider',
// routeProvider is service added like $http
function($routeProvider){
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
