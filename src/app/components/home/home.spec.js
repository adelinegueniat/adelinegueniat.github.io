describe('home component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('home', function () {
      return {
        templateUrl: 'app/home.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<home></home>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
