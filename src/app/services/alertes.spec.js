describe('Alertes service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Alertes) {
    expect(Alertes.getData()).toEqual(3);
  }));
});
