function benevolesController() {
  var $ctrl = this;
  $ctrl.titre = 'Bénévoles';
  $ctrl.benevoles = [];

  $ctrl.newName = '';
  $ctrl.newFirstName = '';
  $ctrl.newPhone = '';
  

  
}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles/benevoles.html',
    controller: benevolesController
  });

