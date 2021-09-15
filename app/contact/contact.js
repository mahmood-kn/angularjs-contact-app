'use strict';

angular
  .module('myApp.contact', ['ngRoute', 'firebase'])

  .config([
    '$routeProvider',

    function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'contact/contact.html',
        controller: 'ContactCtrl',
      });
    },
  ])

  .controller('ContactCtrl', [
    '$scope',
    '$firebaseArray',
    function ($scope, $firebaseArray) {
      // var ref = new Firebase(
      //   'https://angularjs-contact-default-rtdb.firebaseio.com/'
      // );
      // $scope.contacts = $firebaseArray(ref);
      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
      var contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      console.log(contacts);

      function clearInputs() {
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
      }

      $scope.addContact = function () {
        // console.log($scope.name);
        if ($scope.name !== '' && $scope.email !== '' && $scope.phone !== '') {
          var newContact = {
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
          };
          contacts.push(newContact);
          localStorage.setItem('contacts', JSON.stringify(contacts));
          clearInputs();
        }
      };
    },
  ]);
