function benevolesController() {
  this.text = 'Bénévoles';
}

angular
  .module('app')
  .component('benevoles', {
    templateUrl: 'app/components/benevoles.html',
    controller: benevolesController
  });

