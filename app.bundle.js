/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.node_modules.nosync/html-loader/dist/runtime/getUrl.js":
/*!*****************************************************************!*\
  !*** ./.node_modules.nosync/html-loader/dist/runtime/getUrl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/clod.svg":
/*!**********************!*\
  !*** ./src/clod.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bb16582fec379ec6072499c5899ba3ef.svg");

/***/ }),

/***/ "./src/development.png":
/*!*****************************!*\
  !*** ./src/development.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c3d15699d14b2f2bf8be18d65826dad3.png");

/***/ }),

/***/ "./src/development@2x.png":
/*!********************************!*\
  !*** ./src/development@2x.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bf7d114f4706cc58534793c19f24c26a.png");

/***/ }),

/***/ "./src/draw-bg.js":
/*!************************!*\
  !*** ./src/draw-bg.js ***!
  \************************/
/*! exports provided: bgCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgCanvas", function() { return bgCanvas; });
/* harmony import */ var _clod_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clod.svg */ "./src/clod.svg");
/* harmony import */ var _handsome_clod_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handsome_clod.svg */ "./src/handsome_clod.svg");
/* harmony import */ var _glasses_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glasses.svg */ "./src/glasses.svg");




function bgCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';

  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let coveringWidth = 0;
  let coveringHeight = 0;
  const canvasAngle = (Math.PI/180)*(-10);

  let max_i = 0;
  let max_j = 0;

  const glasses = new Image();
  glasses.src = _glasses_svg__WEBPACK_IMPORTED_MODULE_2__["default"];

  const clodBuffer = document.createElement('canvas');
  clodBuffer.width = 120;
  clodBuffer.height = 68;
  const handsomeClodBuffer = document.createElement('canvas');
  handsomeClodBuffer.width = 120;
  handsomeClodBuffer.height = 68;
  const tinyClodBuffer = document.createElement('canvas');
  tinyClodBuffer.width = 90;
  tinyClodBuffer.height = 51;
  const superTinyClodBuffer = document.createElement('canvas');
  superTinyClodBuffer.width = 30;
  superTinyClodBuffer.height = 17;
  
  const clod = new Image();
  clod.addEventListener('load', function() {
    const clodBufferCtx = clodBuffer.getContext("2d");
    clodBufferCtx.drawImage(clod, 0, 0);
  }, false);

  function buildHandsomeClods() {
    const handsomeClodCtx = handsomeClodBuffer.getContext("2d");
    handsomeClodCtx.clearRect(0, 0, handsomeClodBuffer.width, handsomeClodBuffer.height);
    handsomeClodCtx.drawImage(handsomeClod, 0, 0);

    const tinyClodCtx = tinyClodBuffer.getContext("2d");
    tinyClodCtx.clearRect(0, 0, tinyClodBuffer.width, tinyClodBuffer.height);
    tinyClodCtx.drawImage(handsomeClod, 0, 0);
    tinyClodCtx.globalCompositeOperation = "source-in";
    tinyClodCtx.fillStyle = "#e9fcff";
    tinyClodCtx.fillRect(0, 0, tinyClodBuffer.width, tinyClodBuffer.height);
    tinyClodCtx.globalCompositeOperation = "source-over";

    const superTinyClodCtx = superTinyClodBuffer.getContext("2d");
    superTinyClodCtx.clearRect(0, 0, superTinyClodBuffer.width, superTinyClodBuffer.height);
    superTinyClodCtx.drawImage(handsomeClod, 0, 0);
    superTinyClodCtx.globalCompositeOperation = "source-in";
    superTinyClodCtx.fillStyle = "#c6f7ff";
    superTinyClodCtx.fillRect(0, 0, superTinyClodBuffer.width, superTinyClodBuffer.height);
    superTinyClodCtx.globalCompositeOperation = "source-over";
    superTinyClodCtx.drawImage(glasses, 15, 4, 15, 6);
  }

  const handsomeClod = new Image();
  handsomeClod.addEventListener('load', buildHandsomeClods);
  glasses.addEventListener('load', buildHandsomeClods);

  clod.src = _clod_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  handsomeClod.src = _handsome_clod_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  
  let oldTick = 59;
  let tick = 60;

  let handsomeClods = [];
  let tinyClods = [];

  requestAnimationFrame(drawCanvas)

  function HandsomeClod(i, j) {
    this.i = i;
    this.j = j;
    this.live = true;

    this.update = function() {
      this.i += 1;
      if (this.i > max_i) {
        this.live = false;
      }
    }
  }

  function TinyClod(y) {
    this.x = -(coveringWidth-canvas.width)/2 - tinyClodBuffer.width;
    this.y = y;
    this.live = true;
    this.superTiny = (Math.random() > 0.8);

    this.update = function() {
      if (this.superTiny) {
        this.x += 6;
      } else {
        this.x += 2;
      }
      if (this.x > coveringWidth) {
        this.live = false;
      }
    }
  }

  function isHandsome(i, j) {
    for (let x = 0; x < handsomeClods.length; x++) {
      if (handsomeClods[x].i == i && handsomeClods[x].j == j) {
        return true;
      }
    }

    return false;
  }

  function resize(canvas) {
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (displayWidth != canvas.width ||
        displayHeight != canvas.height) {

      coveringWidth = Math.ceil(displayWidth*Math.cos(Math.abs(canvasAngle)) +
                            displayHeight*Math.sin(Math.abs(canvasAngle)));
      coveringHeight = Math.ceil(displayWidth*Math.sin(Math.abs(canvasAngle)) +
                             displayHeight*Math.cos(Math.abs(canvasAngle)));

      canvas.width = displayWidth;
      canvas.height = displayHeight;

      max_i = (coveringWidth/clodXOffset)+1
      max_j = (coveringHeight/clodYOffset)+1

      handsomeClods = [];
      tinyClods = [];

      const obj = new HandsomeClod(Math.floor(Math.random()*max_i), Math.floor(Math.random()*max_j));
      handsomeClods.push(obj);

      return true;
    }

    return false;
  }

  const clodXOffset = 200;
  const clodYOffset = 100;
  
  function drawCanvas(now) {
    ctx.resetTransform();

    resize(canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(canvasAngle);
    ctx.translate(-canvas.width/2, -canvas.height/2);

    // generate and draw tiny clouds
    if (Math.random() > 0.99) {
      const obj = new TinyClod(Math.floor(Math.random()*canvas.height));
      tinyClods.push(obj);
    }

    let tempTinyClods = [];
    for (let i = 0; i < tinyClods.length; i++) {
      // ctx.clearRect(tinyClods[i].x-1, tinyClods[i].y-1, tinyClodBuffer.width+2, tinyClodBuffer.height+2);
      tinyClods[i].update();
      if (tinyClods[i].live) {
        tempTinyClods.push(tinyClods[i]);

        if (tinyClods[i].superTiny) {
          ctx.drawImage(superTinyClodBuffer, tinyClods[i].x, tinyClods[i].y);
        } else {
          ctx.drawImage(tinyClodBuffer, tinyClods[i].x, tinyClods[i].y);
        }
      }
    }
    tinyClods = tempTinyClods;

    // draw large clouds
    for (let i = 0; i < max_i; i++) {
      for (let j = 0; j < max_j; j++) {
        const oldX = -(coveringWidth - canvas.width)/2 - 240 + i*clodXOffset + oldTick + (j%2)*(clodXOffset/2);

        const x = -(coveringWidth - canvas.width)/2 - 240 + i*clodXOffset + tick + (j%2)*(clodXOffset/2);
        const y = -(coveringHeight - canvas.height)/2 - 30 + j*clodYOffset;

        // ctx.clearRect(oldX-1, y-1, clodBuffer.width+2, clodBuffer.height+2);

        if (i == 0 && tick == 0) {
          // mayhaps consider generating a handsome clod
          // if we're just starting off
          if (Math.random() > 0.95) {
            const obj = new HandsomeClod(i, j);
            handsomeClods.push(obj);
          }
        }

        if (isHandsome(i, j)) {
          ctx.drawImage(handsomeClodBuffer, x, y);
        } else {
          ctx.drawImage(clodBuffer, x, y);
        }
      }
    }

    oldTick = tick;
    tick += 1;

    if (tick == clodXOffset) {
      tick = 0;

      let tempClods = [];

      for (let i = 0; i < handsomeClods.length; i++) {
        handsomeClods[i].update();

        if (handsomeClods[i].live) {
          tempClods.push(handsomeClods[i]);
        }
      }

      handsomeClods = tempClods;
    }
    
    requestAnimationFrame(drawCanvas);
  }
}

/***/ }),

/***/ "./src/glasses.svg":
/*!*************************!*\
  !*** ./src/glasses.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7eb05363801a3cfc2e91606d9b96db57.svg");

/***/ }),

/***/ "./src/handsome_clod.svg":
/*!*******************************!*\
  !*** ./src/handsome_clod.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd5ac80996d68ac90e7b34b053600794.svg");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../.node_modules.nosync/html-loader/dist/runtime/getUrl.js */ "./.node_modules.nosync/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./development.png */ "./src/development.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./development@2x.png */ "./src/development@2x.png");
// Module
var ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACER_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Under Construction - Sakib's Personal Website</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  </head>\n  <body>\n    <div id=\"under-construction\">\n      <img src=\"" + ___HTML_LOADER_REPLACER_0___ + "\" srcset=\"" + ___HTML_LOADER_REPLACER_1___ + " 2x\">\n      <h1>Under construction...</h1>\n    </div>\n\n    <footer>\n      <p>&copy; 2020 Sakib Chowdhury. All rights reserved.</p>\n    </footer>\n  </body>\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _draw_bg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-bg.js */ "./src/draw-bg.js");





// import { hanging } from './pendulum.js';

window.onload = function() {
  Object(_draw_bg_js__WEBPACK_IMPORTED_MODULE_3__["bgCanvas"])();
  // hanging();
};



/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLm5vZGVfbW9kdWxlcy5ub3N5bmMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xvZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldmVsb3BtZW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV2ZWxvcG1lbnRAMngucG5nIiwid2VicGFjazovLy8uL3NyYy9kcmF3LWJnLmpzIiwid2VicGFjazovLy8uL3NyYy9nbGFzc2VzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZHNvbWVfY2xvZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNldC5jc3M/MmNhMCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiMTY1ODJmZWMzNzllYzYwNzI0OTljNTg5OWJhM2VmLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjM2QxNTY5OWQxNGIyZjJiZjhiZTE4ZDY1ODI2ZGFkMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmY3ZDExNGY0NzA2Y2M1ODUzNDc5M2MxOWYyNGMyNmEucG5nXCI7IiwiaW1wb3J0IENsb2QgZnJvbSAnLi9jbG9kLnN2Zyc7XG5pbXBvcnQgSGFuZHNvbWVDbG9kSW1nIGZyb20gJy4vaGFuZHNvbWVfY2xvZC5zdmcnO1xuaW1wb3J0IEdsYXNzZXMgZnJvbSAnLi9nbGFzc2VzLnN2Zyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiZ0NhbnZhcygpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5pZCA9ICdiZy1jYW52YXMnO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IGNvdmVyaW5nV2lkdGggPSAwO1xuICBsZXQgY292ZXJpbmdIZWlnaHQgPSAwO1xuICBjb25zdCBjYW52YXNBbmdsZSA9IChNYXRoLlBJLzE4MCkqKC0xMCk7XG5cbiAgbGV0IG1heF9pID0gMDtcbiAgbGV0IG1heF9qID0gMDtcblxuICBjb25zdCBnbGFzc2VzID0gbmV3IEltYWdlKCk7XG4gIGdsYXNzZXMuc3JjID0gR2xhc3NlcztcblxuICBjb25zdCBjbG9kQnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNsb2RCdWZmZXIud2lkdGggPSAxMjA7XG4gIGNsb2RCdWZmZXIuaGVpZ2h0ID0gNjg7XG4gIGNvbnN0IGhhbmRzb21lQ2xvZEJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBoYW5kc29tZUNsb2RCdWZmZXIud2lkdGggPSAxMjA7XG4gIGhhbmRzb21lQ2xvZEJ1ZmZlci5oZWlnaHQgPSA2ODtcbiAgY29uc3QgdGlueUNsb2RCdWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgdGlueUNsb2RCdWZmZXIud2lkdGggPSA5MDtcbiAgdGlueUNsb2RCdWZmZXIuaGVpZ2h0ID0gNTE7XG4gIGNvbnN0IHN1cGVyVGlueUNsb2RCdWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgc3VwZXJUaW55Q2xvZEJ1ZmZlci53aWR0aCA9IDMwO1xuICBzdXBlclRpbnlDbG9kQnVmZmVyLmhlaWdodCA9IDE3O1xuICBcbiAgY29uc3QgY2xvZCA9IG5ldyBJbWFnZSgpO1xuICBjbG9kLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjbG9kQnVmZmVyQ3R4ID0gY2xvZEJ1ZmZlci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY2xvZEJ1ZmZlckN0eC5kcmF3SW1hZ2UoY2xvZCwgMCwgMCk7XG4gIH0sIGZhbHNlKTtcblxuICBmdW5jdGlvbiBidWlsZEhhbmRzb21lQ2xvZHMoKSB7XG4gICAgY29uc3QgaGFuZHNvbWVDbG9kQ3R4ID0gaGFuZHNvbWVDbG9kQnVmZmVyLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBoYW5kc29tZUNsb2RDdHguY2xlYXJSZWN0KDAsIDAsIGhhbmRzb21lQ2xvZEJ1ZmZlci53aWR0aCwgaGFuZHNvbWVDbG9kQnVmZmVyLmhlaWdodCk7XG4gICAgaGFuZHNvbWVDbG9kQ3R4LmRyYXdJbWFnZShoYW5kc29tZUNsb2QsIDAsIDApO1xuXG4gICAgY29uc3QgdGlueUNsb2RDdHggPSB0aW55Q2xvZEJ1ZmZlci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGlueUNsb2RDdHguY2xlYXJSZWN0KDAsIDAsIHRpbnlDbG9kQnVmZmVyLndpZHRoLCB0aW55Q2xvZEJ1ZmZlci5oZWlnaHQpO1xuICAgIHRpbnlDbG9kQ3R4LmRyYXdJbWFnZShoYW5kc29tZUNsb2QsIDAsIDApO1xuICAgIHRpbnlDbG9kQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XG4gICAgdGlueUNsb2RDdHguZmlsbFN0eWxlID0gXCIjZTlmY2ZmXCI7XG4gICAgdGlueUNsb2RDdHguZmlsbFJlY3QoMCwgMCwgdGlueUNsb2RCdWZmZXIud2lkdGgsIHRpbnlDbG9kQnVmZmVyLmhlaWdodCk7XG4gICAgdGlueUNsb2RDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXG4gICAgY29uc3Qgc3VwZXJUaW55Q2xvZEN0eCA9IHN1cGVyVGlueUNsb2RCdWZmZXIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHN1cGVyVGlueUNsb2RDdHguY2xlYXJSZWN0KDAsIDAsIHN1cGVyVGlueUNsb2RCdWZmZXIud2lkdGgsIHN1cGVyVGlueUNsb2RCdWZmZXIuaGVpZ2h0KTtcbiAgICBzdXBlclRpbnlDbG9kQ3R4LmRyYXdJbWFnZShoYW5kc29tZUNsb2QsIDAsIDApO1xuICAgIHN1cGVyVGlueUNsb2RDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2UtaW5cIjtcbiAgICBzdXBlclRpbnlDbG9kQ3R4LmZpbGxTdHlsZSA9IFwiI2M2ZjdmZlwiO1xuICAgIHN1cGVyVGlueUNsb2RDdHguZmlsbFJlY3QoMCwgMCwgc3VwZXJUaW55Q2xvZEJ1ZmZlci53aWR0aCwgc3VwZXJUaW55Q2xvZEJ1ZmZlci5oZWlnaHQpO1xuICAgIHN1cGVyVGlueUNsb2RDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuICAgIHN1cGVyVGlueUNsb2RDdHguZHJhd0ltYWdlKGdsYXNzZXMsIDE1LCA0LCAxNSwgNik7XG4gIH1cblxuICBjb25zdCBoYW5kc29tZUNsb2QgPSBuZXcgSW1hZ2UoKTtcbiAgaGFuZHNvbWVDbG9kLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBidWlsZEhhbmRzb21lQ2xvZHMpO1xuICBnbGFzc2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBidWlsZEhhbmRzb21lQ2xvZHMpO1xuXG4gIGNsb2Quc3JjID0gQ2xvZDtcbiAgaGFuZHNvbWVDbG9kLnNyYyA9IEhhbmRzb21lQ2xvZEltZztcbiAgXG4gIGxldCBvbGRUaWNrID0gNTk7XG4gIGxldCB0aWNrID0gNjA7XG5cbiAgbGV0IGhhbmRzb21lQ2xvZHMgPSBbXTtcbiAgbGV0IHRpbnlDbG9kcyA9IFtdO1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3Q2FudmFzKVxuXG4gIGZ1bmN0aW9uIEhhbmRzb21lQ2xvZChpLCBqKSB7XG4gICAgdGhpcy5pID0gaTtcbiAgICB0aGlzLmogPSBqO1xuICAgIHRoaXMubGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pICs9IDE7XG4gICAgICBpZiAodGhpcy5pID4gbWF4X2kpIHtcbiAgICAgICAgdGhpcy5saXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gVGlueUNsb2QoeSkge1xuICAgIHRoaXMueCA9IC0oY292ZXJpbmdXaWR0aC1jYW52YXMud2lkdGgpLzIgLSB0aW55Q2xvZEJ1ZmZlci53aWR0aDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdXBlclRpbnkgPSAoTWF0aC5yYW5kb20oKSA+IDAuOCk7XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc3VwZXJUaW55KSB7XG4gICAgICAgIHRoaXMueCArPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy54ICs9IDI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54ID4gY292ZXJpbmdXaWR0aCkge1xuICAgICAgICB0aGlzLmxpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0hhbmRzb21lKGksIGopIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGhhbmRzb21lQ2xvZHMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChoYW5kc29tZUNsb2RzW3hdLmkgPT0gaSAmJiBoYW5kc29tZUNsb2RzW3hdLmogPT0gaikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemUoY2FudmFzKSB7XG4gICAgY29uc3QgZGlzcGxheVdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYgKGRpc3BsYXlXaWR0aCAhPSBjYW52YXMud2lkdGggfHxcbiAgICAgICAgZGlzcGxheUhlaWdodCAhPSBjYW52YXMuaGVpZ2h0KSB7XG5cbiAgICAgIGNvdmVyaW5nV2lkdGggPSBNYXRoLmNlaWwoZGlzcGxheVdpZHRoKk1hdGguY29zKE1hdGguYWJzKGNhbnZhc0FuZ2xlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIZWlnaHQqTWF0aC5zaW4oTWF0aC5hYnMoY2FudmFzQW5nbGUpKSk7XG4gICAgICBjb3ZlcmluZ0hlaWdodCA9IE1hdGguY2VpbChkaXNwbGF5V2lkdGgqTWF0aC5zaW4oTWF0aC5hYnMoY2FudmFzQW5nbGUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIZWlnaHQqTWF0aC5jb3MoTWF0aC5hYnMoY2FudmFzQW5nbGUpKSk7XG5cbiAgICAgIGNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5SGVpZ2h0O1xuXG4gICAgICBtYXhfaSA9IChjb3ZlcmluZ1dpZHRoL2Nsb2RYT2Zmc2V0KSsxXG4gICAgICBtYXhfaiA9IChjb3ZlcmluZ0hlaWdodC9jbG9kWU9mZnNldCkrMVxuXG4gICAgICBoYW5kc29tZUNsb2RzID0gW107XG4gICAgICB0aW55Q2xvZHMgPSBbXTtcblxuICAgICAgY29uc3Qgb2JqID0gbmV3IEhhbmRzb21lQ2xvZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbWF4X2kpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbWF4X2opKTtcbiAgICAgIGhhbmRzb21lQ2xvZHMucHVzaChvYmopO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjbG9kWE9mZnNldCA9IDIwMDtcbiAgY29uc3QgY2xvZFlPZmZzZXQgPSAxMDA7XG4gIFxuICBmdW5jdGlvbiBkcmF3Q2FudmFzKG5vdykge1xuICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xuXG4gICAgcmVzaXplKGNhbnZhcyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKTtcbiAgICBjdHgucm90YXRlKGNhbnZhc0FuZ2xlKTtcbiAgICBjdHgudHJhbnNsYXRlKC1jYW52YXMud2lkdGgvMiwgLWNhbnZhcy5oZWlnaHQvMik7XG5cbiAgICAvLyBnZW5lcmF0ZSBhbmQgZHJhdyB0aW55IGNsb3Vkc1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45OSkge1xuICAgICAgY29uc3Qgb2JqID0gbmV3IFRpbnlDbG9kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjYW52YXMuaGVpZ2h0KSk7XG4gICAgICB0aW55Q2xvZHMucHVzaChvYmopO1xuICAgIH1cblxuICAgIGxldCB0ZW1wVGlueUNsb2RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW55Q2xvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGN0eC5jbGVhclJlY3QodGlueUNsb2RzW2ldLngtMSwgdGlueUNsb2RzW2ldLnktMSwgdGlueUNsb2RCdWZmZXIud2lkdGgrMiwgdGlueUNsb2RCdWZmZXIuaGVpZ2h0KzIpO1xuICAgICAgdGlueUNsb2RzW2ldLnVwZGF0ZSgpO1xuICAgICAgaWYgKHRpbnlDbG9kc1tpXS5saXZlKSB7XG4gICAgICAgIHRlbXBUaW55Q2xvZHMucHVzaCh0aW55Q2xvZHNbaV0pO1xuXG4gICAgICAgIGlmICh0aW55Q2xvZHNbaV0uc3VwZXJUaW55KSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShzdXBlclRpbnlDbG9kQnVmZmVyLCB0aW55Q2xvZHNbaV0ueCwgdGlueUNsb2RzW2ldLnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGlueUNsb2RCdWZmZXIsIHRpbnlDbG9kc1tpXS54LCB0aW55Q2xvZHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGlueUNsb2RzID0gdGVtcFRpbnlDbG9kcztcblxuICAgIC8vIGRyYXcgbGFyZ2UgY2xvdWRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhfaTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heF9qOyBqKyspIHtcbiAgICAgICAgY29uc3Qgb2xkWCA9IC0oY292ZXJpbmdXaWR0aCAtIGNhbnZhcy53aWR0aCkvMiAtIDI0MCArIGkqY2xvZFhPZmZzZXQgKyBvbGRUaWNrICsgKGolMikqKGNsb2RYT2Zmc2V0LzIpO1xuXG4gICAgICAgIGNvbnN0IHggPSAtKGNvdmVyaW5nV2lkdGggLSBjYW52YXMud2lkdGgpLzIgLSAyNDAgKyBpKmNsb2RYT2Zmc2V0ICsgdGljayArIChqJTIpKihjbG9kWE9mZnNldC8yKTtcbiAgICAgICAgY29uc3QgeSA9IC0oY292ZXJpbmdIZWlnaHQgLSBjYW52YXMuaGVpZ2h0KS8yIC0gMzAgKyBqKmNsb2RZT2Zmc2V0O1xuXG4gICAgICAgIC8vIGN0eC5jbGVhclJlY3Qob2xkWC0xLCB5LTEsIGNsb2RCdWZmZXIud2lkdGgrMiwgY2xvZEJ1ZmZlci5oZWlnaHQrMik7XG5cbiAgICAgICAgaWYgKGkgPT0gMCAmJiB0aWNrID09IDApIHtcbiAgICAgICAgICAvLyBtYXloYXBzIGNvbnNpZGVyIGdlbmVyYXRpbmcgYSBoYW5kc29tZSBjbG9kXG4gICAgICAgICAgLy8gaWYgd2UncmUganVzdCBzdGFydGluZyBvZmZcbiAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IG5ldyBIYW5kc29tZUNsb2QoaSwgaik7XG4gICAgICAgICAgICBoYW5kc29tZUNsb2RzLnB1c2gob2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIYW5kc29tZShpLCBqKSkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaGFuZHNvbWVDbG9kQnVmZmVyLCB4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGNsb2RCdWZmZXIsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2xkVGljayA9IHRpY2s7XG4gICAgdGljayArPSAxO1xuXG4gICAgaWYgKHRpY2sgPT0gY2xvZFhPZmZzZXQpIHtcbiAgICAgIHRpY2sgPSAwO1xuXG4gICAgICBsZXQgdGVtcENsb2RzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZHNvbWVDbG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYW5kc29tZUNsb2RzW2ldLnVwZGF0ZSgpO1xuXG4gICAgICAgIGlmIChoYW5kc29tZUNsb2RzW2ldLmxpdmUpIHtcbiAgICAgICAgICB0ZW1wQ2xvZHMucHVzaChoYW5kc29tZUNsb2RzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoYW5kc29tZUNsb2RzID0gdGVtcENsb2RzO1xuICAgIH1cbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0NhbnZhcyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2ViMDUzNjM4MDFhM2NmYzJlOTE2MDZkOWI5NmRiNTcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJkNWFjODA5OTZkNjhhYzkwZTdiMzRiMDUzNjAwNzk0LnN2Z1wiOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy5ub2RlX21vZHVsZXMubm9zeW5jL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9kZXZlbG9wbWVudC5wbmdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9kZXZlbG9wbWVudEAyeC5wbmdcIik7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFUl8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRVJfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjwhZG9jdHlwZSBodG1sPlxcbjxodG1sPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIj5cXG4gICAgPHRpdGxlPlVuZGVyIENvbnN0cnVjdGlvbiAtIFNha2liJ3MgUGVyc29uYWwgV2Vic2l0ZTwvdGl0bGU+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVxcXCI+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGRpdiBpZD1cXFwidW5kZXItY29uc3RydWN0aW9uXFxcIj5cXG4gICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFUl8wX19fICsgXCJcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFUl8xX19fICsgXCIgMnhcXFwiPlxcbiAgICAgIDxoMT5VbmRlciBjb25zdHJ1Y3Rpb24uLi48L2gxPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGZvb3Rlcj5cXG4gICAgICA8cD4mY29weTsgMjAyMCBTYWtpYiBDaG93ZGh1cnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxcbiAgICA8L2Zvb3Rlcj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5pbXBvcnQgeyBiZ0NhbnZhcyB9IGZyb20gJy4vZHJhdy1iZy5qcyc7XG4vLyBpbXBvcnQgeyBoYW5naW5nIH0gZnJvbSAnLi9wZW5kdWx1bS5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgYmdDYW52YXMoKTtcbiAgLy8gaGFuZ2luZygpO1xufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==