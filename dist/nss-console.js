/*!
 * nss-console.js - v1.0.0
 * Compiled Sat, 08 Sep 2018 11:33:37 UTC
 *
 * nss-console.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PIXI = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NSSConsole = function () {
  function NSSConsole() {
    _classCallCheck(this, NSSConsole);
  }

  NSSConsole.getBox = function getBox(width, height) {
    return {
      string: '+',
      style: 'font-size: 1px; padding: ' + Math.floor(height / 2) + 'px ' + Math.floor(width / 2) + 'px; line-height: ' + height + 'px;'
    };
  };

  NSSConsole.message = function message(_message) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var invertColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var colorBase = '#030307';
    if (color === undefined) {
      color = NSSConsole.colors[NSSConsole.colorsCurrentIndex];
      NSSConsole.colorsCurrentIndex++;
      if (NSSConsole.colorsCurrentIndex >= NSSConsole.colors.length) {
        NSSConsole.colorsCurrentIndex = 0;
      }
    }
    if (invertColor) {
      var temp = color;
      color = colorBase;
      colorBase = temp;
    }
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      var args = ['%c %c ' + _message + ' %c %c', 'padding: 1px;border-radius: 3px 0 0 3px;background: ' + color, 'padding: 1px; color: ' + color + '; background: ' + colorBase + ';', 'padding: 1px;border-radius: 0 3px 3px 0;background: ' + color, 'background: ' + colorBase + ';'];
      console.log.apply(console, args);
    } else {
      console.log(_message);
    }
  };

  NSSConsole.image = function image(url, scale) {
    scale = scale || 1;
    return new Promise(function (resolve, reject) {
      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var img = new Image();
        img.onload = function () {
          var dim = NSSConsole.getBox(this.width * scale, this.height / 2 * scale);
          console.log('%c' + dim.string, dim.style + 'background: url(' + url + ') no-repeat; background-size: ' + this.width * scale + 'px ' + this.height * scale + 'px; color: transparent;');
          resolve();
        };
        img.src = url;
      } else {
        console.log('failed to show this image: ' + url);
        resolve();
      }
    });
  };

  NSSConsole.log = function log() {
    console.log(Array.prototype.slice.call(arguments));
  };

  return NSSConsole;
}();

NSSConsole.colors = ['#b5cdf1', '#f8674f', '#a7cd79', '#c9a0dc', '#ffef00', '#fb9912'];
NSSConsole.colorsCurrentIndex = 0;
exports.default = NSSConsole;

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;

var _core = require('./core');

Object.defineProperty(exports, 'NSSConsole', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_core).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.NSSConsole = exports; // eslint-disable-line

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./core":1}]},{},[2])(2)
});


//# sourceMappingURL=nss-console.js.map
