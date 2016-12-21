angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('accueil', {
      url: '/',
      component: 'accueil'
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
