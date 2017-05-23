'use strict';
 
angular.module('Details')
 
.controller('UserDetailsController',['$scope','$routeParams', 'UserDetailsService', function ($scope, $routeParams, UserDetailsService) {
    UserDetailsService.getUserInfo($routeParams.user_name, function(response){
        if(response.status == 200){
            $scope.userObj = response.data
        }
    });

}]);