'use strict'
FellowSocialNetwork.factory('authentication',function($http, BASE_URL){

    var service = {};

    var serviceURL = BASE_URL + '/user';

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

});