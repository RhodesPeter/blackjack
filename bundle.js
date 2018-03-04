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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_create_deck__ = __webpack_require__(/*! ./modules/create-deck */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shuffle_deck__ = __webpack_require__(/*! ./modules/shuffle-deck */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_totaliser__ = __webpack_require__(/*! ./modules/totaliser */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_deal_cards__ = __webpack_require__(/*! ./modules/deal-cards */ 2);\n\n\n\n\n\nlet makeOneMove;\n\nconst logPlayerCards = (cardsInPlay) => {\n  console.log(`Sam: ${cardsInPlay.sam.join(', ')}`);\n  console.log(`Dealer: ${cardsInPlay.dealer.join(', ')}`);\n};\n\nconst logTotal = (sam, dealer) => {\n  console.log(`\\nSam's total: ${sam}`);\n  console.log(`Dealer's total: ${dealer} \\n`);\n};\n\nconst hasWon = (sam, dealer) => {\n  if ((sam === 21 && dealer === 21) || (sam > 21 && dealer > 21)) {\n    return \"It's a draw\";\n  } else if (sam > 21) {\n    return \"Sam's total is greater than 21, Dealer wins!\";\n  } else if (dealer > 21) {\n    return \"Dealers's total is greater than 21, Sam wins!\";\n  } else if (sam === 21) {\n    return 'Sam wins!';\n  } else if (dealer === 21) {\n    return 'Dealer wins!';\n  } else if (sam >= 17 && dealer > sam) {\n    return 'Dealer wins!';\n  }\n  return false;\n};\n\nconst gameLoop = (cardsInPlay, gameDeck) => {\n  const sam = Object(__WEBPACK_IMPORTED_MODULE_2__modules_totaliser__[\"a\" /* default */])(cardsInPlay.sam);\n  const dealer = Object(__WEBPACK_IMPORTED_MODULE_2__modules_totaliser__[\"a\" /* default */])(cardsInPlay.dealer);\n  const playerWon = hasWon(sam, dealer);\n\n  logPlayerCards(cardsInPlay);\n  logTotal(sam, dealer);\n\n  if (playerWon) {\n    console.log(playerWon);\n  } else if (sam < 17) {\n    makeOneMove('sam', cardsInPlay, gameDeck);\n  } else {\n    makeOneMove('dealer', cardsInPlay, gameDeck);\n  }\n};\n\nmakeOneMove = (player, cardsInPlay, gameDeck) => {\n  const nextCard = Object(__WEBPACK_IMPORTED_MODULE_3__modules_deal_cards__[\"b\" /* dealOneCard */])(gameDeck);\n  cardsInPlay[player].push(nextCard);\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nconst startGame = () => {\n  const deck = Object(__WEBPACK_IMPORTED_MODULE_0__modules_create_deck__[\"a\" /* default */])();\n  const gameDeck = Object(__WEBPACK_IMPORTED_MODULE_1__modules_shuffle_deck__[\"a\" /* default */])(deck);\n  const cardsInPlay = Object(__WEBPACK_IMPORTED_MODULE_3__modules_deal_cards__[\"a\" /* dealCards */])(gameDeck);\n\n  console.log('Game started \\n');\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzPzI1MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZURlY2sgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZS1kZWNrJztcbmltcG9ydCBzaHVmZmxlRGVjayBmcm9tICcuL21vZHVsZXMvc2h1ZmZsZS1kZWNrJztcbmltcG9ydCB0b3RhbGlzZXIgZnJvbSAnLi9tb2R1bGVzL3RvdGFsaXNlcic7XG5pbXBvcnQgeyBkZWFsQ2FyZHMsIGRlYWxPbmVDYXJkIH0gZnJvbSAnLi9tb2R1bGVzL2RlYWwtY2FyZHMnO1xuXG5sZXQgbWFrZU9uZU1vdmU7XG5cbmNvbnN0IGxvZ1BsYXllckNhcmRzID0gKGNhcmRzSW5QbGF5KSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTYW06ICR7Y2FyZHNJblBsYXkuc2FtLmpvaW4oJywgJyl9YCk7XG4gIGNvbnNvbGUubG9nKGBEZWFsZXI6ICR7Y2FyZHNJblBsYXkuZGVhbGVyLmpvaW4oJywgJyl9YCk7XG59O1xuXG5jb25zdCBsb2dUb3RhbCA9IChzYW0sIGRlYWxlcikgPT4ge1xuICBjb25zb2xlLmxvZyhgXFxuU2FtJ3MgdG90YWw6ICR7c2FtfWApO1xuICBjb25zb2xlLmxvZyhgRGVhbGVyJ3MgdG90YWw6ICR7ZGVhbGVyfSBcXG5gKTtcbn07XG5cbmNvbnN0IGhhc1dvbiA9IChzYW0sIGRlYWxlcikgPT4ge1xuICBpZiAoKHNhbSA9PT0gMjEgJiYgZGVhbGVyID09PSAyMSkgfHwgKHNhbSA+IDIxICYmIGRlYWxlciA+IDIxKSkge1xuICAgIHJldHVybiBcIkl0J3MgYSBkcmF3XCI7XG4gIH0gZWxzZSBpZiAoc2FtID4gMjEpIHtcbiAgICByZXR1cm4gXCJTYW0ncyB0b3RhbCBpcyBncmVhdGVyIHRoYW4gMjEsIERlYWxlciB3aW5zIVwiO1xuICB9IGVsc2UgaWYgKGRlYWxlciA+IDIxKSB7XG4gICAgcmV0dXJuIFwiRGVhbGVycydzIHRvdGFsIGlzIGdyZWF0ZXIgdGhhbiAyMSwgU2FtIHdpbnMhXCI7XG4gIH0gZWxzZSBpZiAoc2FtID09PSAyMSkge1xuICAgIHJldHVybiAnU2FtIHdpbnMhJztcbiAgfSBlbHNlIGlmIChkZWFsZXIgPT09IDIxKSB7XG4gICAgcmV0dXJuICdEZWFsZXIgd2lucyEnO1xuICB9IGVsc2UgaWYgKHNhbSA+PSAxNyAmJiBkZWFsZXIgPiBzYW0pIHtcbiAgICByZXR1cm4gJ0RlYWxlciB3aW5zISc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZ2FtZUxvb3AgPSAoY2FyZHNJblBsYXksIGdhbWVEZWNrKSA9PiB7XG4gIGNvbnN0IHNhbSA9IHRvdGFsaXNlcihjYXJkc0luUGxheS5zYW0pO1xuICBjb25zdCBkZWFsZXIgPSB0b3RhbGlzZXIoY2FyZHNJblBsYXkuZGVhbGVyKTtcbiAgY29uc3QgcGxheWVyV29uID0gaGFzV29uKHNhbSwgZGVhbGVyKTtcblxuICBsb2dQbGF5ZXJDYXJkcyhjYXJkc0luUGxheSk7XG4gIGxvZ1RvdGFsKHNhbSwgZGVhbGVyKTtcblxuICBpZiAocGxheWVyV29uKSB7XG4gICAgY29uc29sZS5sb2cocGxheWVyV29uKTtcbiAgfSBlbHNlIGlmIChzYW0gPCAxNykge1xuICAgIG1ha2VPbmVNb3ZlKCdzYW0nLCBjYXJkc0luUGxheSwgZ2FtZURlY2spO1xuICB9IGVsc2Uge1xuICAgIG1ha2VPbmVNb3ZlKCdkZWFsZXInLCBjYXJkc0luUGxheSwgZ2FtZURlY2spO1xuICB9XG59O1xuXG5tYWtlT25lTW92ZSA9IChwbGF5ZXIsIGNhcmRzSW5QbGF5LCBnYW1lRGVjaykgPT4ge1xuICBjb25zdCBuZXh0Q2FyZCA9IGRlYWxPbmVDYXJkKGdhbWVEZWNrKTtcbiAgY2FyZHNJblBsYXlbcGxheWVyXS5wdXNoKG5leHRDYXJkKTtcbiAgZ2FtZUxvb3AoY2FyZHNJblBsYXksIGdhbWVEZWNrKTtcbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZGVjayA9IGNyZWF0ZURlY2soKTtcbiAgY29uc3QgZ2FtZURlY2sgPSBzaHVmZmxlRGVjayhkZWNrKTtcbiAgY29uc3QgY2FyZHNJblBsYXkgPSBkZWFsQ2FyZHMoZ2FtZURlY2spO1xuXG4gIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQgXFxuJyk7XG4gIGdhbWVMb29wKGNhcmRzSW5QbGF5LCBnYW1lRGVjayk7XG59O1xuXG5zdGFydEdhbWUoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./js/modules/shuffle-deck.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const shuffle = deck => deck.reduce((a, b) => a.concat(b)).sort(() => Math.random() - 0.5);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (shuffle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvc2h1ZmZsZS1kZWNrLmpzP2JiOWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2h1ZmZsZSA9IGRlY2sgPT4gZGVjay5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG5leHBvcnQgZGVmYXVsdCBzaHVmZmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL3NodWZmbGUtZGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************!*\
  !*** ./js/modules/deal-cards.js ***!
  \**********************************/
/*! exports provided: dealCards, dealOneCard */
/*! exports used: dealCards, dealOneCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return dealCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return dealOneCard; });\nconst dealCards = (arr) => {\n  const playerCards = {\n    sam: [arr.shift(), arr.shift()],\n    dealer: [arr.shift(), arr.shift()],\n  };\n  return playerCards;\n};\n\nconst dealOneCard = arr => arr.shift();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvZGVhbC1jYXJkcy5qcz8xYjUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlYWxDYXJkcyA9IChhcnIpID0+IHtcbiAgY29uc3QgcGxheWVyQ2FyZHMgPSB7XG4gICAgc2FtOiBbYXJyLnNoaWZ0KCksIGFyci5zaGlmdCgpXSxcbiAgICBkZWFsZXI6IFthcnIuc2hpZnQoKSwgYXJyLnNoaWZ0KCldLFxuICB9O1xuICByZXR1cm4gcGxheWVyQ2FyZHM7XG59O1xuXG5jb25zdCBkZWFsT25lQ2FyZCA9IGFyciA9PiBhcnIuc2hpZnQoKTtcblxuZXhwb3J0IHsgZGVhbENhcmRzLCBkZWFsT25lQ2FyZCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2RlYWwtY2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** ./js/modules/create-deck.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];\nconst suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];\n\nconst createDeck = () => suits.map(value => values.map(suit => `${suit} ${value}`));\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (createDeck);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvY3JlYXRlLWRlY2suanM/MTY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWx1ZXMgPSBbMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsICdKJywgJ1EnLCAnSycsICdBJ107XG5jb25zdCBzdWl0cyA9IFsnSGVhcnQnLCAnRGlhbW9uZHMnLCAnU3BhZGVzJywgJ0NsdWJzJ107XG5cbmNvbnN0IGNyZWF0ZURlY2sgPSAoKSA9PiBzdWl0cy5tYXAodmFsdWUgPT4gdmFsdWVzLm1hcChzdWl0ID0+IGAke3N1aXR9ICR7dmFsdWV9YCkpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2NyZWF0ZS1kZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./js/modules/totaliser.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const score = {\n  J: 10,\n  K: 10,\n  Q: 10,\n  A: 11,\n};\n\nconst totaliser = (cards) => {\n  const mapped = cards.map(a => a.split(' ')[0]);\n  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (totaliser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvdG90YWxpc2VyLmpzPzQ3NWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2NvcmUgPSB7XG4gIEo6IDEwLFxuICBLOiAxMCxcbiAgUTogMTAsXG4gIEE6IDExLFxufTtcblxuY29uc3QgdG90YWxpc2VyID0gKGNhcmRzKSA9PiB7XG4gIGNvbnN0IG1hcHBlZCA9IGNhcmRzLm1hcChhID0+IGEuc3BsaXQoJyAnKVswXSk7XG4gIHJldHVybiBtYXBwZWQucmVkdWNlKChhLCBiKSA9PiAoc2NvcmVbYV0gfHwgTnVtYmVyKGEpKSArIChzY29yZVtiXSB8fCBOdW1iZXIoYikpLCAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdGFsaXNlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbW9kdWxlcy90b3RhbGlzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);