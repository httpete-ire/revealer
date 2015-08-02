describe('revealer directive', function() {
  var element;
  var $scope;
  var scope;
  var compile;

  beforeEach(module('revealer'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();

    compile = $compile;

    element = render($compile, '<revealer topimage="test.png" bottomimage="test1.png"></revealer>', $scope);

  }));

  it('should be defined', function() {
    expect(scope).to.be.defined;
    expect(element).to.be.defined;
  });

  it('should have the values set on it', function() {
    expect(scope.topimage).to.equal('test.png');
    expect(scope.bottomimage).to.equal('test1.png');
  });

  it('should have a start postion attribute', function () {
    expect(scope.startPosition).to.equal(50);
  });

  it('should set the start postion attribute', function () {

    element = render(compile, '<revealer topimage="test.png" bottomimage="test1.png" start-position="45"></revealer>', $scope);

    expect(Number(scope.startPosition)).to.equal(45);
  });

  function render(compile, template, s) {

    var el = compile(angular.element(template))(s);
    scope = el.isolateScope();

    scope.$apply();

    return el;
  }

});
