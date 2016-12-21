describe('Identite service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Identite) {
    expect(Identite.getData()).toEqual(3);
  }));
});
