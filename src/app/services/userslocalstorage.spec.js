describe('Userslocalstorage service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Userslocalstorage) {
    expect(Userslocalstorage.getData()).toEqual(3);
  }));
});
