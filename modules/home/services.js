'use strict';
 
angular.module('Home')
 
.factory('UsersService',
    ['$http',
    function ($http) {
        var service = {};

        service.getUsers = function (query, callback) {
            
           $http({method:'GET', url: 'https://api.github.com/search/users?q='+ query, headers: { 
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