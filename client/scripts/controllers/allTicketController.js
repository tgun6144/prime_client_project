App.controller('allTicketController', ['$scope', '$http', function($scope, $http){

    $scope.allTickets = [];

    $http.get('/ticket/getTickets').success(
        function(data) {
            console.log("All Tickets", data);

            $scope.allTickets = data;
        });

}]);