/*!
 * nss-console - v0.0.8
 * Compiled Sat, 08 Sep 2018 15:35:57 UTC
 *
 * nss-console is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.NSS = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Console = function () {
  function Console() {
    _classCallCheck(this, Console);
  }

  Console.getBox = function getBox(width, height) {
    return {
      string: '+',
      style: 'font-size: 1px; padding: ' + Math.floor(height / 2) + 'px ' + Math.floor(width / 2) + 'px; line-height: ' + height + 'px;'
    };
  };

  Console.message = function message(_message) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var invertColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _message = _message.split('://').join(': //');
    var colorBase = '#030307';
    if (color === undefined) {
      color = NSS.Console.colors[NSS.Console.colorsCurrentIndex];
      NSS.Console.colorsCurrentIndex++;
      if (NSS.Console.colorsCurrentIndex >= NSS.Console.colors.length) {
        NSS.Console.colorsCurrentIndex = 0;
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

  Console.image = function image(url) {
    var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var silentFail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    return new Promise(function (resolve, reject) {
      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var img = new Image();
        img.onload = function () {
          var dim = NSS.Console.getBox(this.width * scale, this.height / 2 * scale);
          console.log('%c' + dim.string, dim.style + 'background: url(' + url + ') no-repeat; background-size: ' + this.width * scale + 'px ' + this.height * scale + 'px; color: transparent;');
          resolve();
        };
        img.src = url;
      } else {
        if (!silentFail) {
          console.log('failed to show this image: ' + url);
        }
        resolve();
      }
    });
  };

  Console.log = function log() {
    console.log(Array.prototype.slice.call(arguments));
  };

  return Console;
}();

exports.Console = Console;
Console.colors = ['#b5cdf1', '#f8674f', '#a7cd79', '#c9a0dc', '#ffef00', '#fb9912'];
Console.colorsCurrentIndex = 0;


global.NSS = exports; // eslint-disable-line

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});


//# sourceMappingURL=nss-console.js.map
