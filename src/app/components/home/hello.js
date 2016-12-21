
angular
  .module('app')
  .component('hello', {
    templateUrl: 'app/components/home/hello.html',
    controller: function () {
      var $ctrl = this; // Ajout pour sécuriser le this
      $ctrl.hello = 'Bienvenue';
    }
  });
