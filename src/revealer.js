(function() {
  'use strict';

  angular
  .module('revealer', [])
  .directive('revealer', revealer);

  var multipleEvents = [{
    action: 'mousedown',
    move: 'mousemove',
    release: 'mouseup'
  }, {
    action: 'touchstart',
    move: 'touchmove',
    release: 'touchend'
  }];

  revealer.$inject = ['$document'];

  function revealer($document) {
    return {
      restrcit: 'E',
      template: ['<div class="revealer__container">',
                  '<img class="revealer__image" ng-src="{{bottomimage || bottomImage}}">',
                  '<span class="revealer__label revealer__label--right">{{bottomlabel || bottomLabel}}</span>',
                  '<div class="revealer__top-image">',
                    '<img class="revealer__image" ng-src="{{topimage || topImage}}">',
                    '<span class="revealer__label revealer__label--left">{{toplabel || topLabel}}</span>',
                  '</div>',
                  '<span class="revealer__handle"></span>',
                '</div>'].join(''),
      scope: {
        bottomlabel: '@',  bottomLabel: '@',
        toplabel: '@',     topLabel: '@',
        bottomimage: '@',  bottomImage: '@',
        topimage: '@',     topImage: '@',
        startPosition: '@'
      },
      link: link
    };

    function link(scope, elem, attr) {

      // throw error when image path not provided
      if ((!scope.topimage && !scope.topImage) ||
          (!scope.bottomimage && !scope.bottomImage)) {
        throw Error('please provide a valid path for the top and bottom image attributes on the revealer directive');
      }

      // ensure the start position is a valid number and is less then 100%
      var validStartPosition = (!isNaN(parseInt(scope.startPosition, 10)) && scope.startPosition < 100);

      var startPosition = scope.startPosition = (validStartPosition) ? parseInt(scope.startPosition, 10) : 50;

      $document.ready(function() {

        // store the needed elements
        var handle = getElem(elem, '.revealer__handle');
        var topImage = getElem(elem, '.revealer__top-image');
        var revealer = getElem(elem, '.revealer__container');
        var handleClass = 'revealer__handle--drag';

        setRevealPosition(handle, topImage, startPosition);

        var revealerSettings;
        var handlerSettings;
        var handleOffset = 0;

        angular.forEach(multipleEvents, function(eventConfig) {

          handle.on(eventConfig.action, function(e) {
            var clickPos;

            handle.addClass(handleClass);
            revealerSettings = getDimensions(revealer);
            handlerSettings = getDimensions(handle);

            // get the click/touch postiton of the handler
            clickPos = mousePos(e, handlerSettings).x;

            // if the click position is on the other side of the handler
            // we have to set a negative offset, also do some maths to
            // calculate the actual value to offset
            if (clickPos > handlerSettings.width / 2) {
              handleOffset = -(clickPos - handlerSettings.width / 2);
            } else {
              handleOffset = (handlerSettings.width / 2 - clickPos);
            }

            // when the handle is dragged, can either
            // be a 'mousemove' or 'touchmove' event,
            // caluclate the position of the overlay
            $document.on(eventConfig.move, handleDrag);

            // when the release action is triggered unbind
            // event listerners on drag an elements
            $document.on(eventConfig.release, removeListeners);
          });

        });

        /**
         * handle the drag of the handle, if the handle is
         * draged outside the container do nothing. Otherwise
         * calculate the percentage and set the position of
         * the handle and the width of the topImage container
         * @param  {Event Object} e : Event Object
         */
        function handleDrag(e) {
          e.preventDefault();

          var eventObject = (e.type === 'mousemove') ? e : e.changedTouches[0];
          var position = mousePos(eventObject, revealerSettings);
          var percentage;

          position.x += handleOffset;

          if (position.x < 0 || position.x > revealerSettings.width) {
            return;
          }

          percentage = (position.x / revealerSettings.width) * 100;

          setRevealPosition(handle, topImage, percentage);
        }

        /**
         * ensure only the correct event listener functions
         * are removed from the 'document' object
         * @param  {Object} config
         * @param  {Event object} e
         */
        function removeListeners(e) {
          var configIndex = (e.type === multipleEvents[0].release) ? 0 : 1;
          var config = multipleEvents[configIndex];

          handle.removeClass(handleClass);
          $document.off(config.move, handleDrag);
          $document.off(config.release, removeListeners);
        }

      });
    }

  }

  /**
   * set the position of the handler and the revealer
   * @param {DOM Object} handle   : drag handler
   * @param {DOM object} revealer : top image to reveal
   * @param {Number} position     : position of revealer
   */
  function setRevealPosition(handle, revealer, position) {
    handle.css({ left: appendPercentage(position) });
    revealer.css({ width: appendPercentage(position) });
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
      x: e.clientX - target.left
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
   * return the value as a string with '%' appendPercentage
   * @param  {Number} value
   * @return {String} string representation of value
   */
  function appendPercentage(value) {
    return value + '%';
  }

})();
