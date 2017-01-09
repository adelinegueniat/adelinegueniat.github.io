function loginController() {
  var $ctrl = this;
  $ctrl.text = '';
  $ctrl.loggedAs = 'déconnecté';

  $ctrl.loggedAsAdmin = function () {
    $ctrl.isAdmin = true;
    $ctrl.isUser = false;
    $ctrl.loggedAs = 'administrateur';
  };

  $ctrl.testlog = function (id) {
    $ctrl.utilisateur = document.getElementById(id).value;

    sessionStorage.setItem("testUser", $ctrl.utilisateur);
    //sessionStorage.getItem("variableName");
  };

  $ctrl.loggedAsUser = function () {
    $ctrl.isUser = true;
    $ctrl.isAdmin = false;
    $ctrl.loggedAs = 'utilisateur';
  };

}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginController
  });

