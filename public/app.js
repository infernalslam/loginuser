/* global angular alert*/
angular.module('todoApp', [])
  .controller('TodoListController', function ($http) {
    var todoList = this
    todoList.sub = function () {
      alert('Yes')
    }
  })
