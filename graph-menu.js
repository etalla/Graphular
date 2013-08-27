app = angular.module("graphmenu", ["ngAnimate"]);

function MenuCtrl($scope, $http) {
    $http.get("menu.json").then(function (response) {
        $scope.option = {
            options: response.data,
            root: true
        };

        $scope.ancestorsSelected = function(focus){
            while(1){
                focus = focus.$parent;
                if (focus.option.root) return true;
                if (focus.$parent.choice != focus.option.title) return false;
            }
        }
    });
}