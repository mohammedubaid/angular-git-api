'use strict';
 
angular.module('Details')
 
.factory('UserDetailsService',
    ['$http',
    function ($http) {
        var service = {};

        service.getUserInfo = function (name, callback) {
            
           $http({method:'GET', url: 'https://api.github.com/users/'+ name, headers: { 
               //repalce TOKEN with your OAuth Token
               'Authorization': 'token TOKEN',
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