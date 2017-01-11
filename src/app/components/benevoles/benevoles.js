function benevolesController() {
  var $ctrl = this;
  $ctrl.titre = 'Bénévoles';
  $ctrl.benevoles = [];
  $ctrl.title = '';
  $ctrl.name = '';
  $ctrl.firstName = '';
  $ctrl.address = '';
  $ctrl.phone = '';
  var listebenevoleskey = 'lbkey';

  // saveLocalStorage() si nouvelle key //

  $ctrl.benevoles = getListe();

  function getListe() {
    $ctrl.liste = angular.fromJson(localStorage.getItem(listebenevoleskey));
    return $ctrl.liste;
  }

  function saveLocalStorage() {
    localStorage.setItem(listebenevoleskey, angular.toJson($ctrl.benevoles));
  }

  $ctrl.addToBenevoles = function () {
    var benevole = {"titre": $ctrl.title, "name": $ctrl.name, "firstName": $ctrl.firstName, "address": $ctrl.address, "phone": $ctrl.phone, onDuty: false};
    $ctrl.benevoles.push(benevole);
    saveLocalStorage();
  };

  $ctrl.getBenevolePosition = function (benevole) {
    var position = $ctrl.benevoles.indexOf(benevole); // on utilise la méthode indexOf() pour obtenir la position du nom entré
    return position;
  };

  $ctrl.getBenevole = function () {
    var position = $ctrl.getBenevolePosition();
    var benevole = $ctrl.benevoles[position];
    return benevole;
  };

  $ctrl.removeBenevole = function (benevole) {
    var position = $ctrl.getBenevolePosition(benevole);
    $ctrl.benevoles.splice(position, 1);
    localStorage.removeItem(position);
    saveLocalStorage();
  };

  $ctrl.toggle = function (benevole) {
    benevole.onDuty = !benevole.onDuty;
    saveLocalStorage();
  };


}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles/benevoles.html',
    controller: benevolesController
  });

