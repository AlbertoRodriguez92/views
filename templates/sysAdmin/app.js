angular.module('spaApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider //add resolve function is pending.
        .when('/', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',

        })
        .when('/registro', {
            templateUrl: 'register.html',
            controller: 'RegistroCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}])
