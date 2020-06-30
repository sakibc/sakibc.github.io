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
    tinyClodCtx.drawImage(handsomeClod, 0, 0, tinyClodBuffer.width, tinyClodBuffer.height);
    tinyClodCtx.globalCompositeOperation = "source-in";
    tinyClodCtx.fillStyle = "#e9fcff";
    tinyClodCtx.fillRect(0, 0, tinyClodBuffer.width, tinyClodBuffer.height);
    tinyClodCtx.globalCompositeOperation = "source-over";

    const superTinyClodCtx = superTinyClodBuffer.getContext("2d");
    superTinyClodCtx.clearRect(0, 0, superTinyClodBuffer.width, superTinyClodBuffer.height);
    superTinyClodCtx.drawImage(handsomeClod, 0, 0, superTinyClodBuffer.width, superTinyClodBuffer.height);
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

// window.addEventListener('resize', () => {
//   const vh100 = window.innerHeight;
//   document.documentElement.style.setProperty('--vh100', `${vh100}px`);
// });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLm5vZGVfbW9kdWxlcy5ub3N5bmMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xvZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldmVsb3BtZW50LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV2ZWxvcG1lbnRAMngucG5nIiwid2VicGFjazovLy8uL3NyYy9kcmF3LWJnLmpzIiwid2VicGFjazovLy8uL3NyYy9nbGFzc2VzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZHNvbWVfY2xvZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNldC5jc3M/MmNhMCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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QVE7QUFDVjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiMTY1ODJmZWMzNzllYzYwNzI0OTljNTg5OWJhM2VmLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjM2QxNTY5OWQxNGIyZjJiZjhiZTE4ZDY1ODI2ZGFkMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmY3ZDExNGY0NzA2Y2M1ODUzNDc5M2MxOWYyNGMyNmEucG5nXCI7IiwiaW1wb3J0IENsb2QgZnJvbSAnLi9jbG9kLnN2Zyc7XG5pbXBvcnQgSGFuZHNvbWVDbG9kSW1nIGZyb20gJy4vaGFuZHNvbWVfY2xvZC5zdmcnO1xuaW1wb3J0IEdsYXNzZXMgZnJvbSAnLi9nbGFzc2VzLnN2Zyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiZ0NhbnZhcygpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5pZCA9ICdiZy1jYW52YXMnO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IGNvdmVyaW5nV2lkdGggPSAwO1xuICBsZXQgY292ZXJpbmdIZWlnaHQgPSAwO1xuICBjb25zdCBjYW52YXNBbmdsZSA9IChNYXRoLlBJLzE4MCkqKC0xMCk7XG5cbiAgbGV0IG1heF9pID0gMDtcbiAgbGV0IG1heF9qID0gMDtcblxuICBjb25zdCBnbGFzc2VzID0gbmV3IEltYWdlKCk7XG4gIGdsYXNzZXMuc3JjID0gR2xhc3NlcztcblxuICBjb25zdCBjbG9kQnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNsb2RCdWZmZXIud2lkdGggPSAxMjA7XG4gIGNsb2RCdWZmZXIuaGVpZ2h0ID0gNjg7XG4gIGNvbnN0IGhhbmRzb21lQ2xvZEJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBoYW5kc29tZUNsb2RCdWZmZXIud2lkdGggPSAxMjA7XG4gIGhhbmRzb21lQ2xvZEJ1ZmZlci5oZWlnaHQgPSA2ODtcbiAgY29uc3QgdGlueUNsb2RCdWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgdGlueUNsb2RCdWZmZXIud2lkdGggPSA5MDtcbiAgdGlueUNsb2RCdWZmZXIuaGVpZ2h0ID0gNTE7XG4gIGNvbnN0IHN1cGVyVGlueUNsb2RCdWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgc3VwZXJUaW55Q2xvZEJ1ZmZlci53aWR0aCA9IDMwO1xuICBzdXBlclRpbnlDbG9kQnVmZmVyLmhlaWdodCA9IDE3O1xuICBcbiAgY29uc3QgY2xvZCA9IG5ldyBJbWFnZSgpO1xuICBjbG9kLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjbG9kQnVmZmVyQ3R4ID0gY2xvZEJ1ZmZlci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY2xvZEJ1ZmZlckN0eC5kcmF3SW1hZ2UoY2xvZCwgMCwgMCk7XG4gIH0sIGZhbHNlKTtcblxuICBmdW5jdGlvbiBidWlsZEhhbmRzb21lQ2xvZHMoKSB7XG4gICAgY29uc3QgaGFuZHNvbWVDbG9kQ3R4ID0gaGFuZHNvbWVDbG9kQnVmZmVyLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBoYW5kc29tZUNsb2RDdHguY2xlYXJSZWN0KDAsIDAsIGhhbmRzb21lQ2xvZEJ1ZmZlci53aWR0aCwgaGFuZHNvbWVDbG9kQnVmZmVyLmhlaWdodCk7XG4gICAgaGFuZHNvbWVDbG9kQ3R4LmRyYXdJbWFnZShoYW5kc29tZUNsb2QsIDAsIDApO1xuXG4gICAgY29uc3QgdGlueUNsb2RDdHggPSB0aW55Q2xvZEJ1ZmZlci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGlueUNsb2RDdHguY2xlYXJSZWN0KDAsIDAsIHRpbnlDbG9kQnVmZmVyLndpZHRoLCB0aW55Q2xvZEJ1ZmZlci5oZWlnaHQpO1xuICAgIHRpbnlDbG9kQ3R4LmRyYXdJbWFnZShoYW5kc29tZUNsb2QsIDAsIDAsIHRpbnlDbG9kQnVmZmVyLndpZHRoLCB0aW55Q2xvZEJ1ZmZlci5oZWlnaHQpO1xuICAgIHRpbnlDbG9kQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XG4gICAgdGlueUNsb2RDdHguZmlsbFN0eWxlID0gXCIjZTlmY2ZmXCI7XG4gICAgdGlueUNsb2RDdHguZmlsbFJlY3QoMCwgMCwgdGlueUNsb2RCdWZmZXIud2lkdGgsIHRpbnlDbG9kQnVmZmVyLmhlaWdodCk7XG4gICAgdGlueUNsb2RDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXG4gICAgY29uc3Qgc3VwZXJUaW55Q2xvZEN0eCA9IHN1cGVyVGlueUNsb2RCdWZmZXIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHN1cGVyVGlueUNsb2RDdHguY2xlYXJSZWN0KDAsIDAsIHN1cGVyVGlueUNsb2RCdWZmZXIud2lkdGgsIHN1cGVyVGlueUNsb2RCdWZmZXIuaGVpZ2h0KTtcbiAgICBzdXBlclRpbnlDbG9kQ3R4LmRyYXdJbWFnZShoYW5kc29tZUNsb2QsIDAsIDAsIHN1cGVyVGlueUNsb2RCdWZmZXIud2lkdGgsIHN1cGVyVGlueUNsb2RCdWZmZXIuaGVpZ2h0KTtcbiAgICBzdXBlclRpbnlDbG9kQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XG4gICAgc3VwZXJUaW55Q2xvZEN0eC5maWxsU3R5bGUgPSBcIiNjNmY3ZmZcIjtcbiAgICBzdXBlclRpbnlDbG9kQ3R4LmZpbGxSZWN0KDAsIDAsIHN1cGVyVGlueUNsb2RCdWZmZXIud2lkdGgsIHN1cGVyVGlueUNsb2RCdWZmZXIuaGVpZ2h0KTtcbiAgICBzdXBlclRpbnlDbG9kQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcbiAgICBzdXBlclRpbnlDbG9kQ3R4LmRyYXdJbWFnZShnbGFzc2VzLCAxNSwgNCwgMTUsIDYpO1xuICB9XG5cbiAgY29uc3QgaGFuZHNvbWVDbG9kID0gbmV3IEltYWdlKCk7XG4gIGhhbmRzb21lQ2xvZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYnVpbGRIYW5kc29tZUNsb2RzKTtcbiAgZ2xhc3Nlcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYnVpbGRIYW5kc29tZUNsb2RzKTtcblxuICBjbG9kLnNyYyA9IENsb2Q7XG4gIGhhbmRzb21lQ2xvZC5zcmMgPSBIYW5kc29tZUNsb2RJbWc7XG4gIFxuICBsZXQgb2xkVGljayA9IDU5O1xuICBsZXQgdGljayA9IDYwO1xuXG4gIGxldCBoYW5kc29tZUNsb2RzID0gW107XG4gIGxldCB0aW55Q2xvZHMgPSBbXTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0NhbnZhcylcblxuICBmdW5jdGlvbiBIYW5kc29tZUNsb2QoaSwgaikge1xuICAgIHRoaXMuaSA9IGk7XG4gICAgdGhpcy5qID0gajtcbiAgICB0aGlzLmxpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaSArPSAxO1xuICAgICAgaWYgKHRoaXMuaSA+IG1heF9pKSB7XG4gICAgICAgIHRoaXMubGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIFRpbnlDbG9kKHkpIHtcbiAgICB0aGlzLnggPSAtKGNvdmVyaW5nV2lkdGgtY2FudmFzLndpZHRoKS8yIC0gdGlueUNsb2RCdWZmZXIud2lkdGg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmxpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3VwZXJUaW55ID0gKE1hdGgucmFuZG9tKCkgPiAwLjgpO1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnN1cGVyVGlueSkge1xuICAgICAgICB0aGlzLnggKz0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueCArPSAyO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueCA+IGNvdmVyaW5nV2lkdGgpIHtcbiAgICAgICAgdGhpcy5saXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNIYW5kc29tZShpLCBqKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBoYW5kc29tZUNsb2RzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoaGFuZHNvbWVDbG9kc1t4XS5pID09IGkgJiYgaGFuZHNvbWVDbG9kc1t4XS5qID09IGopIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplKGNhbnZhcykge1xuICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgIGlmIChkaXNwbGF5V2lkdGggIT0gY2FudmFzLndpZHRoIHx8XG4gICAgICAgIGRpc3BsYXlIZWlnaHQgIT0gY2FudmFzLmhlaWdodCkge1xuXG4gICAgICBjb3ZlcmluZ1dpZHRoID0gTWF0aC5jZWlsKGRpc3BsYXlXaWR0aCpNYXRoLmNvcyhNYXRoLmFicyhjYW52YXNBbmdsZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGVpZ2h0Kk1hdGguc2luKE1hdGguYWJzKGNhbnZhc0FuZ2xlKSkpO1xuICAgICAgY292ZXJpbmdIZWlnaHQgPSBNYXRoLmNlaWwoZGlzcGxheVdpZHRoKk1hdGguc2luKE1hdGguYWJzKGNhbnZhc0FuZ2xlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGVpZ2h0Kk1hdGguY29zKE1hdGguYWJzKGNhbnZhc0FuZ2xlKSkpO1xuXG4gICAgICBjYW52YXMud2lkdGggPSBkaXNwbGF5V2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcblxuICAgICAgbWF4X2kgPSAoY292ZXJpbmdXaWR0aC9jbG9kWE9mZnNldCkrMVxuICAgICAgbWF4X2ogPSAoY292ZXJpbmdIZWlnaHQvY2xvZFlPZmZzZXQpKzFcblxuICAgICAgaGFuZHNvbWVDbG9kcyA9IFtdO1xuICAgICAgdGlueUNsb2RzID0gW107XG5cbiAgICAgIGNvbnN0IG9iaiA9IG5ldyBIYW5kc29tZUNsb2QoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm1heF9pKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm1heF9qKSk7XG4gICAgICBoYW5kc29tZUNsb2RzLnB1c2gob2JqKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY2xvZFhPZmZzZXQgPSAyMDA7XG4gIGNvbnN0IGNsb2RZT2Zmc2V0ID0gMTAwO1xuICBcbiAgZnVuY3Rpb24gZHJhd0NhbnZhcyhub3cpIHtcbiAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcblxuICAgIHJlc2l6ZShjYW52YXMpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMik7XG4gICAgY3R4LnJvdGF0ZShjYW52YXNBbmdsZSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtY2FudmFzLndpZHRoLzIsIC1jYW52YXMuaGVpZ2h0LzIpO1xuXG4gICAgLy8gZ2VuZXJhdGUgYW5kIGRyYXcgdGlueSBjbG91ZHNcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTkpIHtcbiAgICAgIGNvbnN0IG9iaiA9IG5ldyBUaW55Q2xvZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY2FudmFzLmhlaWdodCkpO1xuICAgICAgdGlueUNsb2RzLnB1c2gob2JqKTtcbiAgICB9XG5cbiAgICBsZXQgdGVtcFRpbnlDbG9kcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlueUNsb2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBjdHguY2xlYXJSZWN0KHRpbnlDbG9kc1tpXS54LTEsIHRpbnlDbG9kc1tpXS55LTEsIHRpbnlDbG9kQnVmZmVyLndpZHRoKzIsIHRpbnlDbG9kQnVmZmVyLmhlaWdodCsyKTtcbiAgICAgIHRpbnlDbG9kc1tpXS51cGRhdGUoKTtcbiAgICAgIGlmICh0aW55Q2xvZHNbaV0ubGl2ZSkge1xuICAgICAgICB0ZW1wVGlueUNsb2RzLnB1c2godGlueUNsb2RzW2ldKTtcblxuICAgICAgICBpZiAodGlueUNsb2RzW2ldLnN1cGVyVGlueSkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3VwZXJUaW55Q2xvZEJ1ZmZlciwgdGlueUNsb2RzW2ldLngsIHRpbnlDbG9kc1tpXS55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRpbnlDbG9kQnVmZmVyLCB0aW55Q2xvZHNbaV0ueCwgdGlueUNsb2RzW2ldLnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRpbnlDbG9kcyA9IHRlbXBUaW55Q2xvZHM7XG5cbiAgICAvLyBkcmF3IGxhcmdlIGNsb3Vkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4X2k7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhfajsgaisrKSB7XG4gICAgICAgIGNvbnN0IG9sZFggPSAtKGNvdmVyaW5nV2lkdGggLSBjYW52YXMud2lkdGgpLzIgLSAyNDAgKyBpKmNsb2RYT2Zmc2V0ICsgb2xkVGljayArIChqJTIpKihjbG9kWE9mZnNldC8yKTtcblxuICAgICAgICBjb25zdCB4ID0gLShjb3ZlcmluZ1dpZHRoIC0gY2FudmFzLndpZHRoKS8yIC0gMjQwICsgaSpjbG9kWE9mZnNldCArIHRpY2sgKyAoaiUyKSooY2xvZFhPZmZzZXQvMik7XG4gICAgICAgIGNvbnN0IHkgPSAtKGNvdmVyaW5nSGVpZ2h0IC0gY2FudmFzLmhlaWdodCkvMiAtIDMwICsgaipjbG9kWU9mZnNldDtcblxuICAgICAgICAvLyBjdHguY2xlYXJSZWN0KG9sZFgtMSwgeS0xLCBjbG9kQnVmZmVyLndpZHRoKzIsIGNsb2RCdWZmZXIuaGVpZ2h0KzIpO1xuXG4gICAgICAgIGlmIChpID09IDAgJiYgdGljayA9PSAwKSB7XG4gICAgICAgICAgLy8gbWF5aGFwcyBjb25zaWRlciBnZW5lcmF0aW5nIGEgaGFuZHNvbWUgY2xvZFxuICAgICAgICAgIC8vIGlmIHdlJ3JlIGp1c3Qgc3RhcnRpbmcgb2ZmXG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjk1KSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSBuZXcgSGFuZHNvbWVDbG9kKGksIGopO1xuICAgICAgICAgICAgaGFuZHNvbWVDbG9kcy5wdXNoKG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSGFuZHNvbWUoaSwgaikpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGhhbmRzb21lQ2xvZEJ1ZmZlciwgeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShjbG9kQnVmZmVyLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9sZFRpY2sgPSB0aWNrO1xuICAgIHRpY2sgKz0gMTtcblxuICAgIGlmICh0aWNrID09IGNsb2RYT2Zmc2V0KSB7XG4gICAgICB0aWNrID0gMDtcblxuICAgICAgbGV0IHRlbXBDbG9kcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRzb21lQ2xvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGFuZHNvbWVDbG9kc1tpXS51cGRhdGUoKTtcblxuICAgICAgICBpZiAoaGFuZHNvbWVDbG9kc1tpXS5saXZlKSB7XG4gICAgICAgICAgdGVtcENsb2RzLnB1c2goaGFuZHNvbWVDbG9kc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGFuZHNvbWVDbG9kcyA9IHRlbXBDbG9kcztcbiAgICB9XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdDYW52YXMpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdlYjA1MzYzODAxYTNjZmMyZTkxNjA2ZDliOTZkYjU3LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiZDVhYzgwOTk2ZDY4YWM5MGU3YjM0YjA1MzYwMDc5NC5zdmdcIjsiLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8ubm9kZV9tb2R1bGVzLm5vc3luYy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZGV2ZWxvcG1lbnQucG5nXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vZGV2ZWxvcG1lbnRAMngucG5nXCIpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRVJfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VSXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8IWRvY3R5cGUgaHRtbD5cXG48aHRtbD5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCI+XFxuICAgIDx0aXRsZT5VbmRlciBDb25zdHJ1Y3Rpb24gLSBTYWtpYidzIFBlcnNvbmFsIFdlYnNpdGU8L3RpdGxlPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxkaXYgaWQ9XFxcInVuZGVyLWNvbnN0cnVjdGlvblxcXCI+XFxuICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRVJfMF9fXyArIFwiXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRVJfMV9fXyArIFwiIDJ4XFxcIj5cXG4gICAgICA8aDE+VW5kZXIgY29uc3RydWN0aW9uLi4uPC9oMT5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxmb290ZXI+XFxuICAgICAgPHA+JmNvcHk7IDIwMjAgU2FraWIgQ2hvd2RodXJ5LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cXG4gICAgPC9mb290ZXI+XFxuICA8L2JvZHk+XFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCAnLi9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9pbmRleC5odG1sJztcblxuaW1wb3J0IHsgYmdDYW52YXMgfSBmcm9tICcuL2RyYXctYmcuanMnO1xuLy8gaW1wb3J0IHsgaGFuZ2luZyB9IGZyb20gJy4vcGVuZHVsdW0uanMnO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuLy8gICBjb25zdCB2aDEwMCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbi8vICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoMTAwJywgYCR7dmgxMDB9cHhgKTtcbi8vIH0pO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGJnQ2FudmFzKCk7XG4gIC8vIGhhbmdpbmcoKTtcbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=