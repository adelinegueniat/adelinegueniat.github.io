function bottombarController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('bottombar', {
    templateUrl: 'app/components/bottombar/bottombar.html',
    controller: bottombarController
  });

