function Alertes() {
}

Alertes.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('Alertes', Alertes);

