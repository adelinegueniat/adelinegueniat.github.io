function loginController(Loginservices) {
  var $ctrl = this;

  $ctrl.getUser = function () {
    Loginservices.getUser();
  };

  $ctrl.userLogin = function (usr, pwd) {
    Loginservices.userLogin(usr, pwd);
  };
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginController
  });

