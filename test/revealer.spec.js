describe('revealer directive', function() {
  var element;
  var $scope;
  var scope;

  beforeEach(module('revealer'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();

    element = $compile(angular.element('<revealer start="50"></revealer>'))($scope);

    scope = element.isolateScope();

    scope.$apply();
  }));

  it('should be defined', function() {
    expect(scope).to.be.defined;
    expect(element).to.be.defined;
  });

  it('start value should be set', function() {
    expect(Number(scope.start)).to.equal(50);
  });

});

