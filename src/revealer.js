(function() {
  'use strict';

  angular
  .module('revealer', [])
  .directive('revealer', revealer);

  function revealer() {
    return {
      restrcit: 'E',
      template: ['<div class="revealer__container">',
                  '<img class="revealer__image" ng-src="{{bottomimage}}">',
                  '<span class="revealer__label">{{bottomlabel}}</span>',
                  '<div class="revealer__top-image">',
                    '<img class="revealer__image" ng-src="{{topimage}}">',
                    '<span class="revealer__label">{{toplabel}}</span>',
                  '</div>',
                  '<span class="revealer__handle"></span>',
                '</div>'].join(''),
      scope: {
        bottomlabel: '@',
        toplabel: '@',
        bottomimage: '@',
        topimage: '@'
      },
      link: link
    };
  }

  function link(scope, elem, attr) {

    // store the needed elements
    var handle = getElem(elem, '.revealer__handle');

    handle.on('click', function(e) {
      alert('working');
    });
  }

  /**
   * return an angular element based on the querySelector of the elem provided
   * @param  {DOM Element} elem : element to find elements near
   * @param  {String} value     : class to search for
   * @return {DOM Element}
   */
  function getElem(elem, value) {
    return angular.element(elem[0].querySelector(value));
  }

})();
