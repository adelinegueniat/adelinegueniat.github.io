function loginController(Loginservices) {
  var $ctrl = this;
  var loginkey = 'lgkey';
  $ctrl.usrlog = '';

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

