describe('Loginservices service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Loginservices) {
    expect(Loginservices.getData()).toEqual(3);
  }));
});
