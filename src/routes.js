angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: 'projet-fheche_agueniat_2igpt/',
      component: 'login'
    })
    .state('home', {
      url: 'projet-fheche_agueniat_2igpt/accueil',
      component: 'home'
    })
    .state('benevoles', {
      url: 'projet-fheche_agueniat_2igpt/benevoles',
      component: 'benevoles'
    })
    .state('missions', {
      url: 'projet-fheche_agueniat_2igpt/missions',
      component: 'missions'
    })
    .state('inscriptions', {
      url: 'projet-fheche_agueniat_2igpt/inscription',
      component: 'inscriptions'
    });
}
