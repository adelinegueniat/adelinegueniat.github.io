function Userslocalstorage() {
}

Userslocalstorage.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('Userslocalstorage', Userslocalstorage);

