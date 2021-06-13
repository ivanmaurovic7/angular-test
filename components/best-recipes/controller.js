angular.
  module('app').
  component('bestRecipes', {
    templateUrl: 'components/best-recipes/template.html',
    controller: function ($rootScope, $scope) {
      $scope.recipes = fetchRecipes();
    }
});