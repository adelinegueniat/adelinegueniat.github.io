function missionsController() {
  this.text = 'Missions';
}

angular
  .module('app')
  .component('missions', {
    templateUrl: 'app/components/missions.html',
    controller: missionsController
  });

