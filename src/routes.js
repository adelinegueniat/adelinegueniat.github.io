angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
   .state('login', {
      url: '/',
      component: 'login'
    })
    .state('hello', {
      url: '/accueil',
      component: 'hello'
    })
    .state('benevoles', {
      url: '/benevoles',
      component: 'benevoles'
    })
    .state('missions', {
      url: '/missions',
      component: 'missions'
    });
}
