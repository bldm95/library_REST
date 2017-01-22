app.controller('Homepage',['$scope',function($scope){
  $scope.homepage = "Главная";
}]);
app.controller('About',['$scope', function($scope){
  $scope.about = "Lorem ipsum...";
}]);
app.controller('Edit',['$scope', function($scope) {
  $scope.edit = new Edit();
}]);



app.controller('BookController', ['$scope', '$http', function($scope, $http) {
     var bookId = 1;
     $http.get('book/json' + bookId).success(function(bookData) {
          $scope.book = bookData;
     });
}]);