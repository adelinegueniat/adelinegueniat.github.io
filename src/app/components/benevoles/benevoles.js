function benevolesController(Benevolesservices) {
  var $ctrl = this;
  $ctrl.titre = 'Bénévoles';
  $ctrl.addBenevole = addBenevole;
  $ctrl.benevoles = ['null'];
  $ctrl.showBenevoles = showBenevoles;
  $ctrl.title = '';
  $ctrl.name = '';
  $ctrl.firstName = '';
  $ctrl.address = '';
  $ctrl.phone = '';
  var listebenevoleskey = 'lbkey';
 //saveLocalStorage() si nouvelle key //
  $ctrl.benevoles = getListe();
  function getListe() {
    $ctrl.liste = angular.fromJson(localStorage.getItem(listebenevoleskey));
    return $ctrl.liste;
  }
  function saveLocalStorage() {
    localStorage.setItem(listebenevoleskey, angular.toJson($ctrl.benevoles));
  }


  // Modification #3b : RAJOUTER UN NOM A LA LISTE
  $ctrl.addToBenevoles = function () {
    var id = '';
    var titre = $ctrl.title;
    var name = $ctrl.name;
    var firstName = $ctrl.firstName;
    var address = $ctrl.address;
    var phone = $ctrl.phone;
    var newBenevole = [id, titre, name, firstName, address, phone];
    $ctrl.benevoles.push(newBenevole);
    saveLocalStorage();
  };




  function showBenevoles() {
    $ctrl.liste = Benevolesservices.getBenevoles();
    return $ctrl.liste;
  }


  function showListe() {
    $ctrl.liste = Benevolesservices.getBenevoles();
    return $ctrl.liste;
  }



  $ctrl.add = function () {
    var id = '';
    var titre = $ctrl.title;
    var name = $ctrl.name;
    var firstName = $ctrl.firstName;
    var address = $ctrl.address;
    var phone = $ctrl.phone;
    var newBenevole = [id, titre, name, firstName, address, phone];
    Benevolesservices.createBenevole(titre, name, firstName, address, phone);
  };

  function addBenevole() {
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

