var app = angular.module('loja', []);
app.controller('controler', ['$scope', function($scope){
    $scope.user = {meuNome: 'Christian Zornoff'};
    $scope.contador = 0;

    $scope.addNumero = function () {
        $scope.contador++;
    };
    

    $scope.pessoas = ['a', 'b', 'c'];
}]);