angular
    .module('todoList.listState') // No array, as we are "extending" the module
    .config(listStateConfig);

function listStateConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'listState', // name of the route
        url: '/listState', // url endpoint for the route
        templateUrl: '/features/listState/listState.html', // The url to the view template
        controller: 'ListStateCtrl', // The name of the controller to use for this route
        controllerAs: 'ListStateVM' // The namespace for the view to access the view model
    })
}