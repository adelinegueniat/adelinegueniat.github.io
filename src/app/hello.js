
angular
  .module('app')
  .component('hello', {
    templateUrl: 'app/hello.html',
    controller: function () {
      var $ctrl = this; // Ajout pour sécuriser le this
      $ctrl.hello = 'Bienvenue';
    }
  });
