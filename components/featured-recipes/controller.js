angular.
  module('app').
  component('featuredRecipes', {
    templateUrl: 'components/featured-recipes/template.html',
    controller: function ($rootScope, $scope) {
      $scope.recipes = [
        {
          img: './assets/image1.png',
          duration: 30,
          rating: 4,
          isVideo: true,
          title: 'Panna Cotta'
        },
        {
          img: './assets/image2.png',
          duration: 30,
          rating: 4,
          isVideo: false,
          title: 'Kineska piletina u umaku od avokada i svježeg...'
        },
        {
          img: './assets/image3.png',
          duration: 30,
          rating: 4,
          isVideo: true,
          title: 'Istarski steak sa šparogama i začinskim...'
        },
        {
          img: './assets/image4.png',
          duration: 30,
          rating: 4,
          isVideo: true,
          title: 'Losos na viški s kuhanim povrćem'
        },
      ];
    }
});