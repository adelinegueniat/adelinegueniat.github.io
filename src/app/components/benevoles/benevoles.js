function benevolesController(Benevolesservices) {
  var $ctrl = this;
  $ctrl.titre = 'Bénévoles';
  $ctrl.addBenevole = addBenevole;
  $ctrl.liste = [];
  $ctrl.showBenevoles = showBenevoles;


  function showBenevoles() {
    var benevoles = Benevolesservices.getBenevoles();
    return benevoles;
  }

  function addBenevole(benevole) {
    var benevoles = Benevolesservices.getBenevoles();
    var lastBenevole = benevoles[benevoles.length - 1] || { id: 0 };
    benevole.id = lastBenevole.id + 1;
    benevoles.push(benevole);
    Benevolesservices.saveLocalStorage();
  }
}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles/benevoles.html',
    controller: benevolesController
  });

