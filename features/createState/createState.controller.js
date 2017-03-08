angular
    .module('todoList.createdState') // No array, as we are "extending" the module
    .controller('createdStateCtrl', createdStateCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function createdStateCtrl($scope, $http) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    

    $http({
        method: 'GET',
        url: 'https://randomuser.me/api/'
    }).then(function(response) {
        
    });
}