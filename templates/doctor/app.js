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
        .when('/consulta', {
            templateUrl: 'consulta.html',
            controller: 'ConsultaCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}])
