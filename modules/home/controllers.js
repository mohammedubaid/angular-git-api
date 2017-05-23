'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope', 'UsersService',
    function ($scope, UsersService) {
      var onInputChange = function(){
          if(this.last){
            UsersService.getUsers(this.last, function(response){
                if(response.data.items && response.data.items.length > 0){
                    $scope.users = response.data.items
                }
            });
          }
      }
      $scope.users = [];
      $scope.searchInput = "";
      $scope.$watch('searchInput', onInputChange);
    }]);