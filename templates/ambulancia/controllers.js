angular.module('spaApp')
  .controller('InicioCtrl', function ($scope) {
    $scope.message = "Inicio.";
  });

angular.module('spaApp')
  .controller('PerfilCtrl', function ($scope) {
    $scope.message = "Perfil.";
  });

angular.module('spaApp')
  .controller('EmergenciasCtrl', function ($scope) {
    $scope.message = "Emergencias.";
  });
