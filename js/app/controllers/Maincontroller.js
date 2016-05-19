function MainController($scope){
  $scope.name = 'Pedro';
  $scope.email = 'pedro.acosta613@gmail.com';
  $scope.phone = '347-600-5097';
}

angular
  .module('app')
  .controller("MainController", MainController);