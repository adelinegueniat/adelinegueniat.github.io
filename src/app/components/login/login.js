function loginController() {
  var $ctrl = this;
  $ctrl.text = '';
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginController
  });

