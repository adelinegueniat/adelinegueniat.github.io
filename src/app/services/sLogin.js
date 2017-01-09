function sLogin() {
  var $ctrl = this;
  $ctrl.user = '';
  $ctrl.pwd = '';

  $ctrl.login = function(user, pwd){
    
    
    if (user == 'Francis' || pwd == 'Adeline'){
      $ctrl.user = user;
      $ctrl.pwd = pwd;
    }
  };

  $ctrl.logout = function(){
    $ctrl.user = '';
    $ctrl.pwd = '';
  };

  $ctrl.isLogged = function(){
    if ($ctrl.user !== '') {
      return true;
    } else {
      return false;
    }
  };
}

sLogin.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('sLogin', sLogin);

