/**
 * Created by Swillen on 22.5.2015 ã..
 */
FellowSocialNetwork.controller('LoginController',function($scope,$location,$rootScope, authentication){
    $scope.login = function () {
        authentication.Login($scope.loginData,
            function(serverData) {
                console.log("Successful Login!");
                authentication.SetCredentials(serverData);
                $rootScope.loggedInUser = $scope.username;
                $location.path('/home');

            },
            function (serverError) {
                console.log("Unsuccessful Login!", serverError)
            });
    };
});
