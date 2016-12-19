function missionsController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('missions', {
    templateUrl: 'app/components/missions.html',
    controller: missionsController
  });

