function SharingData() {
  var $ctrl = this;
  $ctrl.sharedBenevoles = angular.fromJson(localStorage.getItem('lbkey'));
  $ctrl.sharedMissions = angular.fromJson(localStorage.getItem('lmkey'));

  $ctrl.getAllBenevoles = function () {
    $ctrl.sharedBenevoles = angular.fromJson(localStorage.getItem('lbkey'));
    return $ctrl.sharedBenevoles;
  };

  $ctrl.getBenevolePosition = function (benevole) {
    var position = $ctrl.sharedBenevoles.indexOf(benevole); // on utilise la méthode indexOf() pour obtenir la position du nom entré
    return position;
  };

  $ctrl.putBenevoleOnDuty = function (benevole, mission) {
    benevole.onDuty = !benevole.onDuty;
    mission.isWaiting = false;
    mission.driver = { id: benevole.id, name: benevole.name, firstname: benevole.firstName };
    localStorage.setItem('lbkey', angular.toJson($ctrl.sharedBenevoles));
  };


  $ctrl.putOffDuty = function (id) {
    var benevoles = $ctrl.getAllBenevoles();
    for (var i = 0; i < benevoles.length; i++) {
      var benevole = benevoles[i];
      if (benevole.id === id) {
        benevole.onDuty = !benevole.onDuty;
        break;
      }
    }
    localStorage.setItem('lbkey', angular.toJson(benevoles));

  };


  $ctrl.saveChangesBenevole = function () {
    localStorage.setItem('lbkey', angular.toJson($ctrl.sharedBenevoles));
  };

}

angular
  .module('app')
  .service('SharingData', SharingData);

