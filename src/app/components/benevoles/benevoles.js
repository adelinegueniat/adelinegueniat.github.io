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
    var id = '';
    var titre = $ctrl.title;
    var name = $ctrl.name;
    var firstName = $ctrl.firstName;
    var address = $ctrl.address;
    var phone = $ctrl.phone;
    var onDuty = false;
    var benevole = [id, titre, name, firstName, address, phone, onDuty];
    $ctrl.benevoles.push(benevole);
    saveLocalStorage();
  };

  $ctrl.getBenevolePosition = function () {
    var position = $ctrl.benevoles.indexOf(); // on utilise la méthode indexOf() pour obtenir la position du nom entré
    return position;
  };

  $ctrl.getBenevole = function () {
    var position = $ctrl.getBenevolePosition();
    var benevole = $ctrl.benevoles[position];
    return benevole;
  };

  $ctrl.removeBenevole = function ($index) {
    $ctrl.benevoles.splice($index, 1);
    localStorage.removeItem($index);
    saveLocalStorage();
  };

  $ctrl.toggle = function (onDuty) {
    return !onDuty;
  };

  $ctrl.putOffDuty = function () { };
}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles/benevoles.html',
    controller: benevolesController
  });

