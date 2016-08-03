var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/login.html',

  })
  .when('/dashpage', {
    templateUrl: '/partials/dashboard.html',
  
  })
  .when('/create', {
    templateUrl: '/partials/createphoto.html'
  })
  .when('/picture/:name', {
    templateUrl: '/partials/picture.html'
  })
})
