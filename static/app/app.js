var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  // страница по умолчанию
  .when('/',{
    templateUrl : 'static/pages/homepage.html',
    controller : 'BookController'
  })
  // страница о книге
  .when('/about',{
    templateUrl : 'static/pages/about.html',
    controller : 'About'
  })
  // страница редактирования
  .when('/edit',{
    templateUrl : 'static/pages/book_edit.html',
    controller : 'Edit'
  });
});

