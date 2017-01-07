describe('inscriptions component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('inscriptions', function () {
      return {
        templateUrl: 'app/inscriptions.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<inscriptions></inscriptions>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
