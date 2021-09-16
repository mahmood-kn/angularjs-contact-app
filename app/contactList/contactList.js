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
    'NgTableParams',
    function ($scope, NgTableParams) {
      var contacts = JSON.parse(localStorage.getItem('contacts'));
      // var self = this;
      // var data = [{ name: 'Moroni', age: 50 } /*,*/];
      $scope.tableParams = new NgTableParams({}, { dataset: contacts });
    },
  ]);
