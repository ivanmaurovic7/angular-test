angular.
  module('app').
  component('search', {
    templateUrl: 'components/search/template.html',
    controller: function ($rootScope, $scope) {
      $rootScope.searchQuery = "";
      
      $scope.categories = [
        {
          src: "./assets/food5.png",
          label: 'Dalmacija na pijatu'
        },
        {
          src: "./assets/food1.png",
          label: 'Zdravo i dijetalno'
        },
        {
          src: "./assets/food4.png",
          label: 'Tradicionalno'
        },
        {
          src: "./assets/food6.png",
          label: 'Slavni hrvatski recepti'
        },
        {
          src: "./assets/food5.png",
          label: 'Dalmacija na pijatu'
        },
        {
          src: "./assets/food4.png",
          label: 'Tradicionalno'
        },
        {
          src: "./assets/food6.png",
          label: 'Sirova hrana'
        },
        {
          src: "./assets/food7.png",
          label: 'Veganski recepti'
        },
        {
          src: "./assets/food2.jpg",
          label: 'Popularno'
        },
        {
          src: "./assets/food3.jpg",
          label: 'Brzo'
        },
        {
          src: "./assets/food1.png",
          label: 'Zdravo i dijetalno'
        },
        {
          src: "./assets/food2.jpg",
          label: 'Popularno'
        },
      ]
    }
});