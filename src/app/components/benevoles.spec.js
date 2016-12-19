describe('benevoles component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('benevoles', function () {
      return {
        templateUrl: 'app/benevoles.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<benevoles></benevoles>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
