/* global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function ($http) {
    var todoList = this
    todoList.macaddress = []
    todoList.sub = function () {
      console.log('Get mac address')
    }
    todoList.Get = function () {
      GetMac()
    }
    function GetMac () {
      $http.get('/data')
        .then(function success (response) {
          // console.log(response)
          todoList.macaddress.push(response)
          console.log(todoList.macaddress)
        }, function error (response) {
          console.log(response)
        })
    }
  })
