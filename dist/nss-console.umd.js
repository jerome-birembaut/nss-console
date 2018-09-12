(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NSSConsole"] = factory();
	else
		root["NSSConsole"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/nss-console.js":
/*!****************************!*\
  !*** ./src/nss-console.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NSSConsole; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NSSConsole =
/*#__PURE__*/
function () {
  function NSSConsole() {
    _classCallCheck(this, NSSConsole);
  }

  _createClass(NSSConsole, null, [{
    key: "getBox",
    value: function getBox(width, height) {
      return {
        string: '+',
        style: "font-size: 1px; padding: ".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px; line-height: ").concat(height, "px;")
      };
    }
  }, {
    key: "message",
    value: function message(_message) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var invertColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      _message = _message.split('://').join(': //');
      var colorBase = '#030307';

      if (color === undefined) {
        color = NSSConsole.colors[NSSConsole.colorsCurrentIndex];
        NSSConsole.colorsCurrentIndex += 1;

        if (NSSConsole.colorsCurrentIndex >= NSSConsole.colors.length) {
          NSSConsole.colorsCurrentIndex = 0;
        }
      }

      if (invertColor) {
        var temp = color;
        color = colorBase;
        colorBase = temp;
      }

      if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var _console;

        var args = ["%c %c ".concat(_message, " %c %c"), "padding: 1px;border-radius: 3px 0 0 3px;background: ".concat(color), "padding: 1px; color: ".concat(color, "; background: ").concat(colorBase, ";"), "padding: 1px;border-radius: 0 3px 3px 0;background: ".concat(color), "background: ".concat(colorBase, ";")];

        (_console = console).log.apply(_console, args);
      } else {
        console.log(_message);
      }
    }
  }, {
    key: "image",
    value: function image(url) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var silentFail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new Promise(function (resolve) {
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
          var img = new Image();

          img.onload = function () {
            var dim = NSSConsole.getBox(img.width * scale, img.height / 2 * scale);
            console.log("%c".concat(dim.string), "".concat(dim.style, "background: url(").concat(url, ") no-repeat; background-size: ").concat(img.width * scale, "px ").concat(img.height * scale, "px; color: transparent;"));
            resolve();
          };

          img.src = url;
        } else {
          if (!silentFail) {
            console.log("failed to show this image: ".concat(url));
          }

          resolve();
        }
      });
    }
  }, {
    key: "log",
    value: function log() {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  }]);

  return NSSConsole;
}();

NSSConsole.colors = ['#b5cdf1', '#f8674f', '#a7cd79', '#c9a0dc', '#ffef00', '#fb9912'];
NSSConsole.colorsCurrentIndex = 0;


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/nss-console.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/nss-console.js */"./src/nss-console.js");


/***/ })

/******/ });
});
//# sourceMappingURL=nss-console.umd.js.map