'use strict';
 
angular.module('Details')
 
.factory('UserDetailsService',
    ['$http',
    function ($http) {
        var service = {};

        service.getUserInfo = function (name, callback) {
            
           $http({method:'GET', url: 'https://api.github.com/users/'+ name, headers: { 
               'Authorization': 'token 8897b38e5d8141f4e796743d7ccf4a9fd4f65ecb',
               'Accept': 'application/json'
            }}).
                then(function(response) {
                    console.log("response", response);
                    callback(response);
                }, function(response) {
                    callback({s: 0});
                });
        };
 
        return service;
    }])