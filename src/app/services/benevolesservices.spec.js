describe('Benevolesservices service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Benevolesservices) {
    expect(Benevolesservices.getData()).toEqual(3);
  }));
});
