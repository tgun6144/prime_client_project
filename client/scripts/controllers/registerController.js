App.controller('registerController', ['$scope', '$http', function($scope, $http){

    $scope.newUser = {};

    $scope.createUser = function(newUser) {
        $http.post('/users/create', newUser).success(
            function(data, status, headers, config) {
                console.log("User Created ", status);
                $scope.newUser = {};
        });
    }



}]).directive('pwCheck',function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = angular.element(document.getElementById(attrs.pwCheck));
            elem.on('keyup', function () {
                console.log("Retype password: ",elem.val());
                scope.$apply(function () {
                    console.log("first password: ",firstPassword.val());
                    console.log(elem.val() === firstPassword.val());
                    ctrl.$setValidity('pwMatch', elem.val() === firstPassword.val());
                });
            });
        }
    }
});