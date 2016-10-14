/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 299);
/******/ })
/************************************************************************/
/******/ ({

/***/ 114:
/***/ function(module, exports) {

"use strict";
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var timeMachine = function timeMachine(preloadedState) {

  var state = preloadedState ? [preloadedState] : [];
  var index = 0;

  var updateIndex = function updateIndex() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : index;


    if (isNaN(val)) {

      val = index;
    }

    val = val > state.length - 1 ? state.length - 1 : val < 0 ? 0 : val;

    index = val;

    return getState();
  };

  var getState = function getState() {
    return state[index];
  };

  var next = function next(val) {

    state = [].concat(_toConsumableArray(state.slice(0, index + 1)), [val]);

    return updateIndex(val ? state.length - 1 : index + 1);
  };

  var previous = function previous() {
    return updateIndex(index - 1);
  };

  var current = function current() {
    return getState(state.length - 1);
  };

  return { getState: getState, next: next, previous: previous, current: current };
};

var test = timeMachine();

console.log(test.next({ test: 1 }));
console.log(test.next({ test: 2 }));
console.log(test.next({ test: 3 }));
console.log(test.previous());
console.log(test.previous());
console.log(test.next({ test: 4 }));

/***/ },

/***/ 115:
/***/ function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/lance/Documents/Node/Time Machine/node_modules/babel-polyfill/lib/index.js'\n    at Error (native)");

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(114);


/***/ }

/******/ });