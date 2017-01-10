function Benevolesservices() {
  var service = {};
  var benevoleskey = 'benevoleskey';

  service.addBenevole = addBenevole;
  service.getBenevoles = getBenevoles;
  if (localStorage.getItem(benevoleskey) === null) {
    localStorage.setItem(benevoleskey, angular.toJson(benevoles));
  }

  var benevoles = [];

  function saveLocalStorage() {
    localStorage.setItem(benevoleskey, angular.toJson(benevoles));
  }

  function addBenevole(benevole) {
    benevoles = getBenevoles();
    var lastBenevole = benevoles[benevoles.length - 1] || {id: 0};
    benevole.id = lastBenevole.id + 1;
    benevoles.push(benevole);
    saveLocalStorage();
  }

  function getBenevoles() {
    var liste = angular.fromJson(localStorage.getItem(benevoleskey));
    return liste;
  }
}

angular
  .module('app')
  .service('Benevolesservices', Benevolesservices);

