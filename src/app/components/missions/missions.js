function missionsController() {
  this.text = 'Missions';
}

angular
  .module('app')
  .component('missions', {
    templateUrl: 'app/components/missions/missions.html',
    controller: missionsController
  });

