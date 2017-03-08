angular
    .module('todoList.listState') // No array, as we are "extending" the module
    .controller('ListStateCtrl', DashboardCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function ListStateCtrl($scope, $http) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    vm.list = {
        name: '',
        item: '',
        
    };

    $http({
        method: 'GET',
        url: 'https://randomuser.me/api/'
    }).then(function(response) {
        vm.story.name = response.data.results[0].name;
        vm.story.item = response.data.results[0].item;
        
    });
}