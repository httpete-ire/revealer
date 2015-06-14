describe('revealer directive', function() {
  var element;
  var $scope;
  var scope;

  beforeEach(module('revealer'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();

    element = $compile(angular.element('<revealer topimage="test.png" bottomimage="test1.png"></revealer>'))($scope);

    scope = element.isolateScope();

    scope.$apply();
  }));

  it('should be defined', function() {
    expect(scope).to.be.defined;
    expect(element).to.be.defined;
  });

  it('should have the values set on it', function() {
    expect(scope.topimage).to.equal('test.png');
    expect(scope.bottomimage).to.equal('test1.png');
  });

});

