angular
    .module('todoList.completedState') // No array, as we are "extending" the module
    .controller('CompletedStateCtrl', CompletedStateCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CompletedStateCtrl($scope, $http) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    vm.todoList = {
        name: '',
        item: '',
        
    };

    $http({
        method: 'GET',
        url: 'https://randomuser.me/api/'
    }).then(function(response) {
        vm.todoList.name = response.data.results[0].name;
        vm.todoList.item = response.data.results[0].item;
        
    });
}