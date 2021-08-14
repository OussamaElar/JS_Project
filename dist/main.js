/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n      const canvas = document.getElementById(\"canvas\")\n      canvas.width = 400;\n      canvas.height = 300;\n      const ctx = canvas.getContext(\"2d\");\n      const ball = new _scripts_ball__WEBPACK_IMPORTED_MODULE_0__.default();\n      new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.default(ball, ctx).start()\n\n});\n\n//# sourceURL=webpack://js_project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ball {\n      constructor() {\n            this.x = 400/2;\n            this.y = 300-30;\n      }\n\n      drawBall(ctx) {\n            ctx.beginPath();\n            ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);\n            ctx.fillStyle = \"#0095DD\";\n            ctx.fill();\n            ctx.closePath();\n      }\n\n\n      draw(ctx) {\n            ctx.clearRect(0, 0, 400, 300);\n            this.drawBall(ctx);\n            this.x += -0.3;\n            this.y += -1;\n      }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack://js_project/./src/scripts/ball.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass Game {\n      constructor(ball, ctx) {\n            \n            this.ctx = ctx;\n            this.ball = ball;\n      }\n\n      animate() {\n            \n            this.ball.draw(this.ctx);\n      }\n      start() {\n            setInterval(this.animate.bind(this), 0.5)\n      }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game); \n\n//# sourceURL=webpack://js_project/./src/scripts/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;