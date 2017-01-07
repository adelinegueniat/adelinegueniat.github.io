function Identite() {
}

Identite.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('Identite', Identite);

