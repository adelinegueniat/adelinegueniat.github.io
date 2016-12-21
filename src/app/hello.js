angular
  .module('app')
  .component('accueil', {
    templateUrl: 'app/hello.html',
    controller: function () {
      var $ctrl = this; // Ajout pour sécuriser le this
      $ctrl.accueil = 'Bienvenue';
    }
  });
