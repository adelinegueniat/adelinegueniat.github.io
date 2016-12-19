function benevolesController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles.html',
    controller: benevolesController
  });

