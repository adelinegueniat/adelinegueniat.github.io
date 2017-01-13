function SharingData() {
  var $ctrl = this;
  $ctrl.sharedBenevoles = angular.fromJson(localStorage.getItem('lbkey'));
  $ctrl.sharedMissions = angular.fromJson(localStorage.getItem('lmkey'));

  $ctrl.getBenevolePosition = function (benevole) {
    var position = $ctrl.sharedBenevoles.indexOf(benevole); // on utilise la méthode indexOf() pour obtenir la position du nom entré
    return position;
  };

  $ctrl.putBenevoleOnDuty = function (benevole, mission) {
    benevole.onDuty = !benevole.onDuty;
    mission.isWaiting = false;
    mission.driver = { drivern: benevole.name, driverfn: benevole.firstName };
    localStorage.setItem('lbkey', angular.toJson($ctrl.sharedBenevoles));

  };

  $ctrl.getBenevoleByNames

  $ctrl.putBenevoleOffDuty = function (name) {
    for (var i = 0; i < $ctrl.sharedBenevoles.length; i++) {
      if ($ctrl.sharedBenevoles[i].benevole.name.equals(name) === true) {
        $ctrl.sharedBenevoles[i].onDuty = false;
      }
    }
    localStorage.setItem('lmkey', angular.toJson($ctrl.sharedBenevoles));

  };


$ctrl.saveChangesBenevole = function () {
      localStorage.setItem('lbkey', angular.toJson($ctrl.sharedBenevoles));
};

}

angular
  .module('app')
  .service('SharingData', SharingData);

