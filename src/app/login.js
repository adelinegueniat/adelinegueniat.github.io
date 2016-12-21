function loginController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/login.html',
    controller: loginController
  });

