describe('bottombar component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('bottombar', function () {
      return {
        templateUrl: 'app/bottombar.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<bottombar></bottombar>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
