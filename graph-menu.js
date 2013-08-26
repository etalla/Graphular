app = angular.module("graphmenu", ["ngAnimate"]);

function MenuCtrl($scope, $http) {
    $http.get("menu.json").then(function (response) {
        $scope.option = {
            options: response.data
        };
    });
}