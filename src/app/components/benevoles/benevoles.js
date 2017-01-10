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
saveLocalStorage();
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
    var benevole = [id, titre, name, firstName, address, phone];
    $ctrl.benevoles.push(benevole);
    saveLocalStorage();
  };
}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles/benevoles.html',
    controller: benevolesController
  });

