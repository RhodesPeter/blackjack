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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_create_deck__ = __webpack_require__(/*! ./modules/create-deck */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shuffle_deck__ = __webpack_require__(/*! ./modules/shuffle-deck */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_totaliser__ = __webpack_require__(/*! ./modules/totaliser */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_log_player_cards__ = __webpack_require__(/*! ./modules/log-player-cards */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_has_won__ = __webpack_require__(/*! ./modules/has-won */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_log_total__ = __webpack_require__(/*! ./modules/log-total */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_deal_cards__ = __webpack_require__(/*! ./modules/deal-cards */ 7);\n\n\n\n\n\n\n\n\nconst consoleColourBlue = '\\x1b[34m\\x1b';\nconst escapeConsoleColour = '\\x1b[0m';\nlet makeOneMove;\nlet round = 0;\n\nconst gameLoop = (cardsInPlay, gameDeck) => {\n  const sam = Object(__WEBPACK_IMPORTED_MODULE_2__modules_totaliser__[\"a\" /* default */])(cardsInPlay.sam);\n  const dealer = Object(__WEBPACK_IMPORTED_MODULE_2__modules_totaliser__[\"a\" /* default */])(cardsInPlay.dealer);\n  const playerWon = Object(__WEBPACK_IMPORTED_MODULE_4__modules_has_won__[\"a\" /* default */])(sam, dealer);\n  round += 1;\n\n  console.log(consoleColourBlue, `Round ${round}:`, escapeConsoleColour);\n  console.log(Object(__WEBPACK_IMPORTED_MODULE_3__modules_log_player_cards__[\"a\" /* default */])(cardsInPlay));\n  console.log(Object(__WEBPACK_IMPORTED_MODULE_5__modules_log_total__[\"a\" /* default */])(sam, dealer));\n\n  if (playerWon) {\n    console.log(consoleColourBlue, 'Game over!', escapeConsoleColour);\n    console.log(playerWon);\n  } else if (sam < 17) {\n    makeOneMove('sam', cardsInPlay, gameDeck);\n  } else {\n    makeOneMove('dealer', cardsInPlay, gameDeck);\n  }\n};\n\nmakeOneMove = (player, cardsInPlay, gameDeck) => {\n  const nextCard = Object(__WEBPACK_IMPORTED_MODULE_6__modules_deal_cards__[\"b\" /* dealOneCard */])(gameDeck);\n  cardsInPlay[player].push(nextCard);\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nconst startGame = () => {\n  const deck = Object(__WEBPACK_IMPORTED_MODULE_0__modules_create_deck__[\"a\" /* default */])();\n  const gameDeck = Object(__WEBPACK_IMPORTED_MODULE_1__modules_shuffle_deck__[\"a\" /* default */])(deck);\n  const cardsInPlay = Object(__WEBPACK_IMPORTED_MODULE_6__modules_deal_cards__[\"a\" /* dealCards */])(gameDeck);\n\n  console.log(consoleColourBlue, 'Game started \\n', escapeConsoleColour);\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzPzI1MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZURlY2sgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZS1kZWNrJztcbmltcG9ydCBzaHVmZmxlRGVjayBmcm9tICcuL21vZHVsZXMvc2h1ZmZsZS1kZWNrJztcbmltcG9ydCB0b3RhbGlzZXIgZnJvbSAnLi9tb2R1bGVzL3RvdGFsaXNlcic7XG5pbXBvcnQgbG9nUGxheWVyQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL2xvZy1wbGF5ZXItY2FyZHMnO1xuaW1wb3J0IGhhc1dvbiBmcm9tICcuL21vZHVsZXMvaGFzLXdvbic7XG5pbXBvcnQgbG9nVG90YWwgZnJvbSAnLi9tb2R1bGVzL2xvZy10b3RhbCc7XG5pbXBvcnQgeyBkZWFsQ2FyZHMsIGRlYWxPbmVDYXJkIH0gZnJvbSAnLi9tb2R1bGVzL2RlYWwtY2FyZHMnO1xuXG5jb25zdCBjb25zb2xlQ29sb3VyQmx1ZSA9ICdcXHgxYlszNG1cXHgxYic7XG5jb25zdCBlc2NhcGVDb25zb2xlQ29sb3VyID0gJ1xceDFiWzBtJztcbmxldCBtYWtlT25lTW92ZTtcbmxldCByb3VuZCA9IDA7XG5cbmNvbnN0IGdhbWVMb29wID0gKGNhcmRzSW5QbGF5LCBnYW1lRGVjaykgPT4ge1xuICBjb25zdCBzYW0gPSB0b3RhbGlzZXIoY2FyZHNJblBsYXkuc2FtKTtcbiAgY29uc3QgZGVhbGVyID0gdG90YWxpc2VyKGNhcmRzSW5QbGF5LmRlYWxlcik7XG4gIGNvbnN0IHBsYXllcldvbiA9IGhhc1dvbihzYW0sIGRlYWxlcik7XG4gIHJvdW5kICs9IDE7XG5cbiAgY29uc29sZS5sb2coY29uc29sZUNvbG91ckJsdWUsIGBSb3VuZCAke3JvdW5kfTpgLCBlc2NhcGVDb25zb2xlQ29sb3VyKTtcbiAgY29uc29sZS5sb2cobG9nUGxheWVyQ2FyZHMoY2FyZHNJblBsYXkpKTtcbiAgY29uc29sZS5sb2cobG9nVG90YWwoc2FtLCBkZWFsZXIpKTtcblxuICBpZiAocGxheWVyV29uKSB7XG4gICAgY29uc29sZS5sb2coY29uc29sZUNvbG91ckJsdWUsICdHYW1lIG92ZXIhJywgZXNjYXBlQ29uc29sZUNvbG91cik7XG4gICAgY29uc29sZS5sb2cocGxheWVyV29uKTtcbiAgfSBlbHNlIGlmIChzYW0gPCAxNykge1xuICAgIG1ha2VPbmVNb3ZlKCdzYW0nLCBjYXJkc0luUGxheSwgZ2FtZURlY2spO1xuICB9IGVsc2Uge1xuICAgIG1ha2VPbmVNb3ZlKCdkZWFsZXInLCBjYXJkc0luUGxheSwgZ2FtZURlY2spO1xuICB9XG59O1xuXG5tYWtlT25lTW92ZSA9IChwbGF5ZXIsIGNhcmRzSW5QbGF5LCBnYW1lRGVjaykgPT4ge1xuICBjb25zdCBuZXh0Q2FyZCA9IGRlYWxPbmVDYXJkKGdhbWVEZWNrKTtcbiAgY2FyZHNJblBsYXlbcGxheWVyXS5wdXNoKG5leHRDYXJkKTtcbiAgZ2FtZUxvb3AoY2FyZHNJblBsYXksIGdhbWVEZWNrKTtcbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZGVjayA9IGNyZWF0ZURlY2soKTtcbiAgY29uc3QgZ2FtZURlY2sgPSBzaHVmZmxlRGVjayhkZWNrKTtcbiAgY29uc3QgY2FyZHNJblBsYXkgPSBkZWFsQ2FyZHMoZ2FtZURlY2spO1xuXG4gIGNvbnNvbGUubG9nKGNvbnNvbGVDb2xvdXJCbHVlLCAnR2FtZSBzdGFydGVkIFxcbicsIGVzY2FwZUNvbnNvbGVDb2xvdXIpO1xuICBnYW1lTG9vcChjYXJkc0luUGxheSwgZ2FtZURlY2spO1xufTtcblxuc3RhcnRHYW1lKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** ./js/modules/create-deck.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];\nconst suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];\n\nconst createDeck = () => suits.map(value => values.map(suit => `${suit} ${value}`));\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (createDeck);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvY3JlYXRlLWRlY2suanM/MTY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWx1ZXMgPSBbMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsICdKJywgJ1EnLCAnSycsICdBJ107XG5jb25zdCBzdWl0cyA9IFsnSGVhcnQnLCAnRGlhbW9uZHMnLCAnU3BhZGVzJywgJ0NsdWJzJ107XG5cbmNvbnN0IGNyZWF0ZURlY2sgPSAoKSA9PiBzdWl0cy5tYXAodmFsdWUgPT4gdmFsdWVzLm1hcChzdWl0ID0+IGAke3N1aXR9ICR7dmFsdWV9YCkpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2NyZWF0ZS1kZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./js/modules/shuffle-deck.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const shuffle = deck => deck.reduce((a, b) => a.concat(b)).sort(() => Math.random() - 0.5);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (shuffle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvc2h1ZmZsZS1kZWNrLmpzP2JiOWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2h1ZmZsZSA9IGRlY2sgPT4gZGVjay5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG5leHBvcnQgZGVmYXVsdCBzaHVmZmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL3NodWZmbGUtZGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ./js/modules/totaliser.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const score = {\n  J: 10,\n  K: 10,\n  Q: 10,\n  A: 11,\n};\n\nconst totaliser = (cards) => {\n  const mapped = cards.map(a => a.split(' ')[0]);\n  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (totaliser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvdG90YWxpc2VyLmpzPzQ3NWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2NvcmUgPSB7XG4gIEo6IDEwLFxuICBLOiAxMCxcbiAgUTogMTAsXG4gIEE6IDExLFxufTtcblxuY29uc3QgdG90YWxpc2VyID0gKGNhcmRzKSA9PiB7XG4gIGNvbnN0IG1hcHBlZCA9IGNhcmRzLm1hcChhID0+IGEuc3BsaXQoJyAnKVswXSk7XG4gIHJldHVybiBtYXBwZWQucmVkdWNlKChhLCBiKSA9PiAoc2NvcmVbYV0gfHwgTnVtYmVyKGEpKSArIChzY29yZVtiXSB8fCBOdW1iZXIoYikpLCAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdGFsaXNlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbW9kdWxlcy90b3RhbGlzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************************!*\
  !*** ./js/modules/log-player-cards.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const logPlayerCards = cards => `Sam: ${cards.sam.join(', ')} \\nDealer: ${cards.dealer.join(', ')}`;\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (logPlayerCards);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvbG9nLXBsYXllci1jYXJkcy5qcz80OTc0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ1BsYXllckNhcmRzID0gY2FyZHMgPT4gYFNhbTogJHtjYXJkcy5zYW0uam9pbignLCAnKX0gXFxuRGVhbGVyOiAke2NhcmRzLmRlYWxlci5qb2luKCcsICcpfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ1BsYXllckNhcmRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2xvZy1wbGF5ZXItY2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./js/modules/has-won.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const hasWon = (sam, dealer) => {\n  if ((sam === 21 && dealer === 21) || (sam > 21 && dealer > 21)) {\n    return \"It's a draw\";\n  } else if (sam > 21) {\n    return \"Sam's total is greater than 21, Dealer wins!\";\n  } else if (dealer > 21) {\n    return \"Dealers's total is greater than 21, Sam wins!\";\n  } else if (sam === 21) {\n    return 'Sam wins!';\n  } else if (dealer === 21) {\n    return 'Dealer wins!';\n  } else if (sam >= 17 && dealer > sam) {\n    return 'Dealer wins!';\n  }\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (hasWon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvaGFzLXdvbi5qcz8wNzlhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhc1dvbiA9IChzYW0sIGRlYWxlcikgPT4ge1xuICBpZiAoKHNhbSA9PT0gMjEgJiYgZGVhbGVyID09PSAyMSkgfHwgKHNhbSA+IDIxICYmIGRlYWxlciA+IDIxKSkge1xuICAgIHJldHVybiBcIkl0J3MgYSBkcmF3XCI7XG4gIH0gZWxzZSBpZiAoc2FtID4gMjEpIHtcbiAgICByZXR1cm4gXCJTYW0ncyB0b3RhbCBpcyBncmVhdGVyIHRoYW4gMjEsIERlYWxlciB3aW5zIVwiO1xuICB9IGVsc2UgaWYgKGRlYWxlciA+IDIxKSB7XG4gICAgcmV0dXJuIFwiRGVhbGVycydzIHRvdGFsIGlzIGdyZWF0ZXIgdGhhbiAyMSwgU2FtIHdpbnMhXCI7XG4gIH0gZWxzZSBpZiAoc2FtID09PSAyMSkge1xuICAgIHJldHVybiAnU2FtIHdpbnMhJztcbiAgfSBlbHNlIGlmIChkZWFsZXIgPT09IDIxKSB7XG4gICAgcmV0dXJuICdEZWFsZXIgd2lucyEnO1xuICB9IGVsc2UgaWYgKHNhbSA+PSAxNyAmJiBkZWFsZXIgPiBzYW0pIHtcbiAgICByZXR1cm4gJ0RlYWxlciB3aW5zISc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzV29uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2hhcy13b24uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ./js/modules/log-total.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const logTotal = (sam, dealer) => `\\nSam's total: ${sam}\\nDealer's total: ${dealer} \\n`;\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (logTotal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvbG9nLXRvdGFsLmpzPzRlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nVG90YWwgPSAoc2FtLCBkZWFsZXIpID0+IGBcXG5TYW0ncyB0b3RhbDogJHtzYW19XFxuRGVhbGVyJ3MgdG90YWw6ICR7ZGVhbGVyfSBcXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dUb3RhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbW9kdWxlcy9sb2ctdG90YWwuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************!*\
  !*** ./js/modules/deal-cards.js ***!
  \**********************************/
/*! exports provided: dealCards, dealOneCard */
/*! exports used: dealCards, dealOneCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return dealCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return dealOneCard; });\nconst dealCards = (arr) => {\n  const playerCards = {\n    sam: [arr.shift(), arr.shift()],\n    dealer: [arr.shift(), arr.shift()],\n  };\n  return playerCards;\n};\n\nconst dealOneCard = arr => arr.shift();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvZGVhbC1jYXJkcy5qcz8xYjUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlYWxDYXJkcyA9IChhcnIpID0+IHtcbiAgY29uc3QgcGxheWVyQ2FyZHMgPSB7XG4gICAgc2FtOiBbYXJyLnNoaWZ0KCksIGFyci5zaGlmdCgpXSxcbiAgICBkZWFsZXI6IFthcnIuc2hpZnQoKSwgYXJyLnNoaWZ0KCldLFxuICB9O1xuICByZXR1cm4gcGxheWVyQ2FyZHM7XG59O1xuXG5jb25zdCBkZWFsT25lQ2FyZCA9IGFyciA9PiBhcnIuc2hpZnQoKTtcblxuZXhwb3J0IHsgZGVhbENhcmRzLCBkZWFsT25lQ2FyZCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2RlYWwtY2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);