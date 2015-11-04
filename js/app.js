var materialCard = angular.module("materialCard", ['ngMaterial']);

materialCard.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('deep-orange');
});

materialCard.controller("cardController", function ($scope) {
    console.log('hoi');
    $scope.topDirections = ['left', 'up'];
    $scope.bottomDirections = ['down', 'right'];
    $scope.isOpen = false;
    $scope.availableModes = ['md-fling', 'md-scale'];
    $scope.selectedMode = 'md-fling';
    $scope.availableDirections = ['up', 'down', 'left', 'right'];
    $scope.selectedDirection = 'up';

    $scope.destinations = [
        {
            "name": "Amsterdam",
            "price": "€199,-",
            "image": "./img/cities/ams.jpg",
            "text": "Depart today"
        },
        {
            "name": "Los Angeles",
            "price": "€799,-",
            "image": "./img/cities/lax.jpg",
            "text": "Depart tomorrow"
        },
        {
            "name": "Paris",
            "price": "€99,-",
            "image": "./img/cities/par.jpg",
            "text": "Depart nex week"
        },
        {
            "name": "New York",
            "price": "€599,-",
            "image": "./img/cities/nyc.jpg",
            "text": "Depart today"
        }
    ];

    $scope.continents = [
        {
            "name": "Europe",
            "price": "from €199,-",
            "image": "./img/cities/ams.jpg",
            "selected": true,
            "text": "Depart today"
        },
        {
            "name": "North America",
            "price": "from €799,-",
            "image": "./img/cities/lax.jpg",
            "selected": true,
            "text": "Depart tomorrow"
        },
        {
            "name": "Asia",
            "price": "from €99,-",
            "image": "./img/cities/par.jpg",
            "selected": true,
            "text": "Depart nex week"
        },
        {
            "name": "South America",
            "price": "from €599,-",
            "image": "./img/cities/nyc.jpg",
            "selected": true,
            "text": "Depart today"
        },
        {
            "name": "Africa",
            "price": "from €599,-",
            "image": "./img/cities/nyc.jpg",
            "selected": true,
            "text": "Depart today"
        },
        {
            "name": "Ociania",
            "price": "from €599,-",
            "image": "./img/cities/nyc.jpg",
            "selected": true,
            "text": "Depart today"
        }
    ];

});