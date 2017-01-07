function inscriptionsController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('inscriptions', {
    templateUrl: 'app/components/inscriptions/inscriptions.html',
    controller: inscriptionsController
  });

