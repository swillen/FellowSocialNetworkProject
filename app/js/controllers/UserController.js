/**
 * Created by Swillen on 21.5.2015 ã..
 */
FellowSocialNetwork.controller('UserController', function ($scope, authenticatation) {

    var DataCleared =  function() {
      $scope.loginData = "";

    };
    $scope.login = function () {
        authenticatation.Login($scope.loginData,function(serverData){

        })
    }




});