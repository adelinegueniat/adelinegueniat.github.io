function missionsController(SharingData) {
  var $ctrl = this;
  $ctrl.missions = [];
  var listemissionskey = 'lmkey';
  $ctrl.listebenevoles = SharingData.getAllBenevoles();


  // Créer un localStorage à la première utilisation
  if (localStorage.getItem(listemissionskey) === null) {
    saveLocalStorage();
  }

  $ctrl.missions = getListeMissions();

  function getListeMissions() {
    $ctrl.liste = angular.fromJson(localStorage.getItem(listemissionskey));
    return $ctrl.liste;
  }

  $ctrl.addToMissions = function () {
    var mission = {
      date: Date($ctrl.date),
      heure: Date($ctrl.heure),
      depart: $ctrl.depart,
      destination: $ctrl.destination,
      client: $ctrl.client,
      clientPhone: $ctrl.clientPhone,
      driver: { id: null, name: '', firstname: '' },
      isDone: false,
      isWaiting: true
    };
    $ctrl.missions.push(mission);
    saveLocalStorage();
  };

  $ctrl.getMissionPosition = function (mission) {
    var position = $ctrl.missions.indexOf(mission); // on utilise la méthode indexOf() pour obtenir la position du nom entré
    return position;
  };

  $ctrl.cancelMission = function (mission) {
    var position = $ctrl.getMissionPosition(mission);
    $ctrl.missions.splice(position, 1);
    localStorage.removeItem(position);
    saveLocalStorage();
  };

  $ctrl.putOnDuty = function (benevole, mission) {
    SharingData.putBenevoleOnDuty(benevole, mission);
    saveLocalStorage();
  };

  $ctrl.toggle = function (mission) {
    mission.isWaiting = false;
    mission.isDone = false;
    saveLocalStorage();
  };

  $ctrl.archive = function (mission) {
    mission.isDone = true;
    saveLocalStorage();
    SharingData.putOffDuty(mission.driver.id);


  };

  function saveLocalStorage() {
    localStorage.setItem(listemissionskey, angular.toJson($ctrl.missions));
  }

  // DONNEES TEST

  $ctrl.dataTest = function () {
    var a = {
      date: "21 décembre 2016",
      heure: "21:20",
      depart: "Delémont",
      destination: "Neuchâtel",
      client: "Phil Collins",
      clientPhone: "032 123 45 67",
      driver: { drivern: '', driverfn: '' },
      isDone: false,
      isWaiting: true
    };
    $ctrl.missions.push(a);
    saveLocalStorage();
  };

  $ctrl.deleteData = function () {
    localStorage.removeItem(listemissionskey);
    location.reload();
  };

}

angular
  .module('app')
  .component('missions', {
    templateUrl: 'app/components/missions/missions.html',
    controller: missionsController
  });

