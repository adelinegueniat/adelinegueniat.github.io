function benevolesController(SharingData) {
  var $ctrl = this;
  $ctrl.titre = 'Bénévoles';
  $ctrl.benevoles = [];
  $ctrl.title = '';
  $ctrl.name = '';
  $ctrl.firstName = '';
  $ctrl.address = '';
  $ctrl.phone = '';
  var listebenevoleskey = 'lbkey';
  $ctrl.listemissions = SharingData.sharedMissions;

  // Créer un localStorage à la première utilisation
  if (localStorage.getItem(listebenevoleskey) === null) {
    saveLocalStorage();
  }

  $ctrl.benevoles = getListeBenevoles();

  function getListeBenevoles() {
    $ctrl.liste = angular.fromJson(localStorage.getItem(listebenevoleskey));
    return $ctrl.liste;
  }

  function saveLocalStorage() {
    localStorage.setItem(listebenevoleskey, angular.toJson($ctrl.benevoles));
  }


  $ctrl.addToBenevoles = function () {
    var benevole = { id: null, titre: $ctrl.title, name: $ctrl.name, firstName: $ctrl.firstName, address: $ctrl.address, phone: $ctrl.phone, isWorking: false, onDuty: false };
    var lastBenevole = $ctrl.benevoles[$ctrl.benevoles.length - 1] || { id: 0 };
    benevole.id = lastBenevole.id + 1;
    $ctrl.benevoles.push(benevole);
    saveLocalStorage();
  };

  $ctrl.getBenevolePosition = function (benevole) {
    var position = $ctrl.benevoles.indexOf(benevole); // on utilise la méthode indexOf() pour obtenir la position du nom entré
    return position;
  };

  $ctrl.getBenevole = function () {
    var position = SharingData.getBenevolePosition();
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
    benevole.isWorking = !benevole.isWorking;
    saveLocalStorage();
  };

  $ctrl.rollback = function () {
    $ctrl.benevoles.pop();
    saveLocalStorage();
  };


  // DONNEES TEST

  $ctrl.dataTest = function () {
    var a = {
      id : 1, 
      titre: "Monsieur",
      name: "Alpha",
      firstName: "Bertrand",
      address: "Rue de la Gare 7, 2000 Neuchâtel",
      phone: "032 123 45 67",
      isWorking: false,
      onDuty: false
    };
    var b = {
       id : 2, 
      titre: "Monsieur",
      name: "Bravo",
      firstName: "Tom",
      address: "Rue du lac 22, 2502 Bienne",
      phone: "032 987 65 43",
      isWorking: true,
      onDuty: false

    };
    var c = {
      id : 3, 
      titre: "Monsieur",
      name: "Charlie",
      firstName: "Jake",
      address: "Rue des Prés 9, 3000 Berne",
      phone: "032 341 60 66",
      isWorking: false, 
      onDuty: true

    };
    var d = {
      id : 4,
      titre: "Madame",
      name: "Delta",
      firstName: "Irene",
      address: "Rue de l'Hôpital 41, 2800 Delémont",
      phone: "032 000 11 22",
      isWorking: false, 
      onDuty: false

    };
    var e = {
      id : 5,
      titre: "Madame",
      name: "Echo",
      firstName: "Aline",
      address: "Rue de l'Hôpital 45, 2800 Delémont",
      phone: "076 000 11 85",
      isWorking: true, 
      onDuty: false

    };
    var f = {
      id : 6,
      titre: "Monsieur",
      name: "Foxtrot",
      firstName: "Mark",
      address: "Rue des voitures 3, 6000 Chur",
      phone: "078 456 28 96",
      isWorking: false, 
      onDuty: false

    };
    $ctrl.benevoles.push(a, b, c, d, e, f);
    saveLocalStorage();
  };

  $ctrl.deleteData = function () {
    localStorage.removeItem(listebenevoleskey);
    location.reload();
  };
}



angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles/benevoles.html',
    controller: benevolesController
  });

