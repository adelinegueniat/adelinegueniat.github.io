describe('missions component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('missions', function () {
      return {
        templateUrl: 'app/missions.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<missions></missions>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
