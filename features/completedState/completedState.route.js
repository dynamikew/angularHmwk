angular
    .module('todoList.completedState') // No array, as we are "extending" the module
    .config(completedStateConfig);

function completedStateConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'ompletedState', // name of the route
        url: '/completedState', // url endpoint for the route
        templateUrl: '/features/completedState/completedState.html', // The url to the view template
        controller: 'completedStateCtrl', // The name of the controller to use for this route
        controllerAs: 'completedStateVM' // The namespace for the view to access the view model
    })
}
