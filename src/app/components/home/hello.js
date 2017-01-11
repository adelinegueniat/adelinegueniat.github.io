function helloController(Loginservices) {
  var $ctrl = this;

  $ctrl.getUser = function () {
    Loginservices.getUser();
  };
}


angular
  .module('app')
  .component('hello', {
    templateUrl: 'app/components/home/hello.html',
    controller: helloController
  });
