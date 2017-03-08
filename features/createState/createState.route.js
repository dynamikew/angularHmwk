angular
    .module('todoList.createdState') // No array, as we are "extending" the module
    .config(createdStateConfig);

function createdStateConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'dcreatedState', // name of the route
        url: '/createdState', // url endpoint for the route
        templateUrl: '/features/createdState/createdState.html', // The url to the view template
        controller: 'createdStateCtrl', // The name of the controller to use for this route
        controllerAs: 'createdStateVM' // The namespace for the view to access the view model
    })
}