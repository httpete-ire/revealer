(function() {
  'use strict';

  angular
  .module('revealer', [])
  .directive('revealer', revealer);

  revealer.$inject = ['$document'];

  function revealer($document) {
    return {
      restrcit: 'E',
      template: ['<div class="revealer__container">',
                  '<img class="revealer__image" ng-src="{{bottomimage}}">',
                  '<span class="revealer__label revealer__label--right">{{bottomlabel}}</span>',
                  '<div class="revealer__top-image">',
                    '<img class="revealer__image" ng-src="{{topimage}}">',
                    '<span class="revealer__label revealer__label--left">{{toplabel}}</span>',
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

    function link(scope, elem, attr) {

      angular.element(document).ready(function() {

        // store the needed elements
        var handle = getElem(elem, '.revealer__handle');
        var topImage = getElem(elem, '.revealer__top-image');
        var revealer = getElem(elem, '.revealer__container');
        var handleClass = 'revealer__handle--drag';

        var revealerSettings = getDimensions(revealer);
        var handlerSettings = getDimensions(handle);

        handle.on('mousedown', function(e) {

          // add class to handler to change color
          handle.addClass(handleClass);

          $document.on('mousemove', handleDrag);

          // remove the reveal function when mouse released
          $document.on('mouseup', function(e) {
            handle.removeClass(handleClass);
            $document.off('mouseup');
            $document.off('mousemove');
          });
        });

        function handleDrag(e) {
          e.preventDefault();

          var position = mousePos(e, revealerSettings);

          if (position.x < 0 || position.x > revealerSettings.width) {
            return;
          }

          var percentage = (position.x / revealerSettings.width) * 100;

          handle.css({
            left: px(percentage)
          });

          topImage.css({
            width: px(percentage)
          });

        }

      });

    }

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

  /**
   * get the mouse coordsinatea based on a target element
   * @param  {Event object}  e
   * @param  {Object} target position of target element on page
   * @return {Object}        x and y coordinates of mouse
   */
  function mousePos(e, target) {
    return {
      x: e.clientX - target.left,
      y: e.clientY - target.top
    };
  }

  /**
   * get the settings of the DOM element passed as a parameter
   * @param  {DOM element} elem
   * @return {Object}      getBoundingClientRect() results
   */
  function getDimensions(elem) {
    return elem[0].getBoundingClientRect();
  }

  /**
   * return the value as a string with 'px' appended
   * @param  {Number} value
   * @return {String} string representation of value
   */
  function px(value) {
    return value + '%';
  }

})();
