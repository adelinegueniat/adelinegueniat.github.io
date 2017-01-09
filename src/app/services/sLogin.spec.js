describe('Login service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Login) {
    expect(Login.getData()).toEqual(3);
  }));
});
