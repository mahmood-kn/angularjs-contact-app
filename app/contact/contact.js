'use strict';

angular
  .module('myApp.contact', ['ngRoute'])

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
    function ($scope) {
      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
      $scope.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      $scope.addForm = true;
      $scope.editForm = false;
      $scope.currentItem = null;

      $scope.editMode = function (c) {
        $scope.addForm = false;
        $scope.editForm = true;
        $scope.currentItem = c;
        $scope.name = c.name;
        $scope.email = c.email;
        $scope.phone = c.phone;
      };
      $scope.cancelEdit = function () {
        $scope.addForm = true;
        $scope.editForm = false;
        $scope.currentItem = null;
        clearInputs();
      };

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
          $scope.contacts.push(newContact);
          localStorage.setItem('contacts', JSON.stringify($scope.contacts));
          clearInputs();
        }
      };

      $scope.editContact = function () {
        if ($scope.name !== '' && $scope.email !== '' && $scope.phone !== '') {
          angular.forEach($scope.contacts, function (contact, key) {
            if (
              $scope.currentItem.phone != null &&
              contact.phone === $scope.currentItem.phone
            ) {
              contact.name = $scope.name;
              contact.email = $scope.email;
              contact.phone = $scope.phone;
            }
          });
          localStorage.setItem('contacts', JSON.stringify($scope.contacts));
          $scope.cancelEdit();
        }
      };

      $scope.removeContact = function (c) {
        $scope.contacts = $scope.contacts.filter(function (contact) {
          if (contact.phone !== c.phone) {
            return contact;
          }
        });
        localStorage.setItem('contacts', JSON.stringify($scope.contacts));
      };
    },
  ]);
