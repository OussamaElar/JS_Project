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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_goalkeeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/goalkeeper */ \"./src/scripts/goalkeeper.js\");\n\n\n\nwindow.onload = function() {\n      const canvas = document.getElementById(\"canvas\")\n      canvas.width = 1000;\n      canvas.height = 500;\n      const ctx = canvas.getContext(\"2d\");\n      const dir = Math.ceil(Math.random() * 7) * (Math.round(Math.random()) ? 1 : -1)\n      const ball = new _scripts_ball__WEBPACK_IMPORTED_MODULE_0__.default(dir, -8);\n      const goalkeeper = new _scripts_goalkeeper__WEBPACK_IMPORTED_MODULE_2__.default();\n      new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.default(ball, goalkeeper, ctx).start();\n      \n      \n};\n\n//# sourceURL=webpack://js_project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// import Img from './SoccerBall.png'\n\nclass Ball {\n      constructor(dx, dy) {\n            \n            this.dx = dx;\n            this.dy = dy;\n      }\n\n      drawBall(ctx) {\n            ctx.save() // begin a new path \n            ctx.beginPath();\n            ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI * 2);\n            var background = new Image();\n            background.src = \"./SoccerBall.png\";\n            // background.onload = function () {\n                  \n                  ctx.drawImage(background, Ball.x - Ball.radius, Ball.y - Ball.radius, Ball.ballHeight, Ball.ballWidth)    \n            // }\n            // ctx.clip();\n            \n      }\n\n\n      draw(ctx) {\n            \n            \n            Ball.x += this.dx;\n            Ball.y += this.dy;\n            ctx.restore();\n            // requestAnimationFrame(Ball.draw)\n      }\n}\n\n\nBall.width = 1000;\nBall.height = 500;\nBall.x = Ball.width/2;\nBall.y = Ball.height - 80;\nBall.radius = 10;\nBall.ballHeight = 30;\nBall.ballWidth = 30;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack://js_project/./src/scripts/ball.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _goalkeeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goalkeeper */ \"./src/scripts/goalkeeper.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/scripts/ball.js\");\n\n\nclass Game {\n      constructor(ball, goalkeeper, ctx) {\n            this.ctx = ctx;\n            this.ball = ball;\n            this.goalkeeper = goalkeeper;\n            this.goalkeeper_save = 0;\n            this.player_scored = 0;\n            this.attempts_left = 5;\n            this.rightKey = false;\n            this.leftKey = false;\n            \n            document.addEventListener(\"keydown\", this.keyDownHandler.bind(this));\n            document.addEventListener(\"keyup\", this.keyUpHandler.bind(this));\n            \n            // this.drawPitch();\n      //       this.addBtn.bind(this);\n      //       this.handleClick = this.handleClick.bind(this);\n      }\n      score() {\n            this.ctx.font = \"20px Arial\";\n            this.ctx.fillStyle = \"#ff900\";\n            this.ctx.fillText(\"Score: \" + this.player_scored, 10, 20);\n      }\n\n      attempts() {\n            this.ctx.font = \"20px Arial\";\n            this.ctx.fillStyle = \"#ff900\";\n            this.ctx.fillText(\"Attempts: \" + this.attempts_left, 10, 50);\n      }\n\n      drawPitch() {\n            this.ctx.clearRect(0, 0, 1000, 500);\n            this.ball.drawBall(this.ctx);\n            this.goalkeeper.drawGoalKeeper(this.ctx);\n            this.goalkeeper.drawGoal(this.ctx)\n      }\n\n      keyDownHandler (e) {\n            if (e.keyCode == 39) {\n                  console.log(e.keyCode);\n                  this.rightKey = true;\n            }\n            else if (e.keyCode == 37) {\n                  this.leftKey = true;\n            }\n      }\n\n      keyUpHandler (e){\n            if (e.keyCode == 39) {\n                  this.rightKey = false;\n            }\n            else if (e.keyCode == 37) {\n                  this.leftKey = false;\n            }\n      }\n      // resetpitch() {\n      //       Ball.width = 1000;\n      //       Ball.height = 500;\n      //       Ball.x = Ball.width/2;\n      //       Ball.y = Ball.height - 80;\n      //       GoalKeeper.width = 1000;\n      //       GoalKeeper.height = 500;\n      //       GoalKeeper.posKeeperX = (GoalKeeper.width - 75) / 2;\n      //       GoalKeeper.posKeeperY = 40;\n      //       GoalKeeper.goalPosX = (GoalKeeper.width - 350) / 2;\n      //       GoalKeeper.goalPosY = 0;\n      // }\n      animate() {\n            this.ctx.clearRect(0, 0, 1000, 500);\n            this.score();\n            this.attempts();\n            this.ball.drawBall(this.ctx);\n            this.ball.draw(this.ctx);\n            this.goalkeeper.drawGoalKeeper(this.ctx)\n            this.goalkeeper.drawGoal(this.ctx)\n            if (this.rightKey && _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperX < _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.width - _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalWidth) {\n                  _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperX += 6\n            } else if (this.leftKey && _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperX > _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalPosX - 40) {\n                  _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperX -= 6\n            }\n            // debugger\n            if (_ball__WEBPACK_IMPORTED_MODULE_1__.default.x > _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperX && _ball__WEBPACK_IMPORTED_MODULE_1__.default.x < _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperX + _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.Kwidth && _ball__WEBPACK_IMPORTED_MODULE_1__.default.y > _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperY && _ball__WEBPACK_IMPORTED_MODULE_1__.default.y < _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.posKeeperY + _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.Kheight) {\n                  alert(\"You Saved The Ball\");\n                  return;\n            } else if (_ball__WEBPACK_IMPORTED_MODULE_1__.default.x > _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalPosX && _ball__WEBPACK_IMPORTED_MODULE_1__.default.x < _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalPosX + _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalWidth && _ball__WEBPACK_IMPORTED_MODULE_1__.default.y > _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalPosY && _ball__WEBPACK_IMPORTED_MODULE_1__.default.y < _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalPosY + _goalkeeper__WEBPACK_IMPORTED_MODULE_0__.default.goalHeight) {\n                  alert(\"You missed\");\n                  // document.location.reload();\n                  // window.requestAnimationFrame(this.animate.bind(this))\n                  return;\n                  \n                  \n            } //else {\n            //       alert(\"You Missed\");\n            //       // cancelAnimationFrame(myReq)\n            // }\n\n            window.requestAnimationFrame(this.animate.bind(this))\n\n      }\n      start() {\n            // window.setInterval(this.animate.bind(this), 1)\\\n            \n            window.requestAnimationFrame(this.animate.bind(this))\n      }\n      \n      \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game); \n\n//# sourceURL=webpack://js_project/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/goalkeeper.js":
/*!***********************************!*\
  !*** ./src/scripts/goalkeeper.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass GoalKeeper {\n      constructor() {\n            \n      }\n\n      drawGoal(ctx) {\n            // ctx.globalAlpha = 0.5\n            ctx.beginPath();\n            ctx.rect(GoalKeeper.goalPosX, GoalKeeper.goalPosY, GoalKeeper.goalWidth, GoalKeeper.goalHeight);\n            // ctx.fill();\n      }\n\n      drawGoalKeeper(ctx) {\n            ctx.beginPath();\n            ctx.rect(GoalKeeper.posKeeperX, GoalKeeper.posKeeperY, GoalKeeper.Kwidth, GoalKeeper.Kheight);\n            // ctx.fill();\n            var keeper = new Image();\n            // ctx.clip();\n            // keeper.onload = function () {\n                  \n                  keeper.src = \"./goalkeeper.png\";\n            // ctx.drawImage(keeper, 425, 40, 150, 250)\n            ctx.drawImage(keeper, GoalKeeper.posKeeperX - 37, GoalKeeper.posKeeperY ,GoalKeeper.Kwidth + 70, GoalKeeper.Kheight + 25 )\n            // }\n      }\n\n      keeperJump(ctx) {\n            \n\n      }\n}\nGoalKeeper.width = 1000;\nGoalKeeper.height = 500;\nGoalKeeper.posKeeperX = (GoalKeeper.width - 50) / 2;\nGoalKeeper.posKeeperY = 80;\nGoalKeeper.goalPosX = (GoalKeeper.width - 350) / 2;\nGoalKeeper.goalPosY = 0;\nGoalKeeper.Kheight = 175;\nGoalKeeper.Kwidth = 50;\nGoalKeeper.goalHeight = 250;\nGoalKeeper.goalWidth = 350;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalKeeper);\n\n//# sourceURL=webpack://js_project/./src/scripts/goalkeeper.js?");

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