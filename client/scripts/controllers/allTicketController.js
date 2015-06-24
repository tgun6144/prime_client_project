App.controller('allTicketController', ['$scope', '$http', function($scope, $http){

    $scope.allTickets = [];
    $scope.ticket = {};
    $scope.users = [];
    $scope.userInfo = {};

    $http.get('/users/admin').success(
        function(data) {
            console.log("All tickets page User response: ", data);
            $scope.admin = data;
        });

    $scope.getTickets = function() {
        $http.get('/ticket/getTickets').then(
            function(response) {
                console.log("All Tickets", response);
                $scope.allTickets = response.data;
            });
    };

    $scope.ticketClass = function(ticket, status){
        console.log("Ticket: ",ticket);
        console.log("Ticket Status: ",status);
        $scope.chgTktSts = {
            tktStatus: status,
            _id: ticket._id
        };
        return $http.put('/ticket/updateStatus/', $scope.chgTktSts).success($scope.getTickets);
    };
    $scope.showHide = function(status){
        $scope.tktArchived.addClass(hide);
        if (status == 'tktArchived'){
            $scope.tktArchived.removeClass(hide);
        }
    };
    $scope.showHide = function(status) {
        if (status == 'tktArchived') {
            $scope.ticket.tktStatus = 'tktArchive';
        }else if (status == 'tktArchive') {
            $scope.ticket.tktStatus = 'tktArchived'}
    };

    $scope.getTickets();
}]);