function homeController(Loginservices) {
  var $ctrl = this;

  $ctrl.getUser = function () {
    return Loginservices.getUser();
  };
}

angular
  .module('app')
  .component('home', {
    templateUrl: 'app/components/home/home.html',
    controller: homeController
  });

