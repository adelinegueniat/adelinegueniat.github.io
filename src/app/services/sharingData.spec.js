describe('SharingData service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (SharingData) {
    expect(SharingData.getData()).toEqual(3);
  }));
});
