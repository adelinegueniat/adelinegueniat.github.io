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
    .state('home', {
      url: '/accueil',
      component: 'home'
    })
    .state('benevoles', {
      url: '/benevoles',
      component: 'benevoles'
    })
    .state('missions', {
      url: '/missions',
      component: 'missions'
    })
    .state('inscriptions', {
      url: '/inscription',
      component: 'inscriptions'
    });
}
