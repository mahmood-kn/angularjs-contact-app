'use strict';

angular
  .module('myApp.contactList', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/contactList', {
        templateUrl: 'contactList/contactList.html',
        controller: 'ContactListCtrl',
      });
    },
  ])

  .controller('ContactListCtrl', [
    '$scope',
    function ($scope) {
      $scope.contacts = JSON.parse(localStorage.getItem('contacts'));
    },
  ]);
