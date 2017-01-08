angular.module('spaApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider //add resolve function is pending.
        .when('/', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',

        })
        .when('/perfil', {
            templateUrl: 'perfil.html',
            controller: 'PerfilCtrl',
        })
        .when('/emergencias', {
            templateUrl: 'emergencias.html',
            controller: 'EmergenciasCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}])
