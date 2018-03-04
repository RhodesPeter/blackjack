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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__ = __webpack_require__(/*! ./modules/shuffle-deck */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__ = __webpack_require__(/*! ./modules/deal-cards */ 2);\n\n\n\nlet makeOneMove = '';\n\nconst logPlayerCards = (cardsInPlay) => {\n  console.log(`Sam: ${cardsInPlay.sam.join(', ')}`);\n  console.log(`Dealer: ${cardsInPlay.dealer.join(', ')}`);\n};\n\nconst logTotal = (sam, dealer) => {\n  console.log(`\\nSam's total: ${sam}`);\n  console.log(`Dealer's total: ${dealer} \\n`);\n};\n\nconst score = {\n  J: 10,\n  K: 10,\n  Q: 10,\n  A: 11,\n};\n\nconst totaliser = (cards) => {\n  const mapped = cards.map(a => a.split(' ')[0]);\n  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);\n};\n\nconst hasWon = (sam, dealer) => {\n  if ((sam === 21 && dealer === 21) || (sam > 21 && dealer > 21)) {\n    return \"It's a draw\";\n  } else if (sam > 21) {\n    return \"Sam's total is greater than 21, Dealer wins!\";\n  } else if (dealer > 21) {\n    return \"Dealers's total is greater than 21, Sam wins!\";\n  } else if (sam === 21) {\n    return 'Sam wins!';\n  } else if (dealer === 21) {\n    return 'Dealer wins!';\n  } else if (sam >= 17 && dealer > sam) {\n    return 'Dealer wins!';\n  }\n  return false;\n};\n\nconst gameLoop = (cardsInPlay, gameDeck) => {\n  const sam = totaliser(cardsInPlay.sam);\n  const dealer = totaliser(cardsInPlay.dealer);\n  const playerWon = hasWon(sam, dealer);\n\n  logPlayerCards(cardsInPlay);\n  logTotal(sam, dealer);\n\n  if (playerWon) {\n    console.log(playerWon);\n  } else if (sam < 17) {\n    makeOneMove('sam', cardsInPlay, gameDeck);\n  } else {\n    makeOneMove('dealer', cardsInPlay, gameDeck);\n  }\n};\n\nmakeOneMove = (player, cardsInPlay, gameDeck) => {\n  const nextCard = Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"b\" /* dealOneCard */])(gameDeck);\n  cardsInPlay[player].push(nextCard);\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nconst startGame = () => {\n  const gameDeck = Object(__WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__[\"a\" /* default */])();\n  const cardsInPlay = Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"a\" /* dealCards */])(gameDeck);\n\n  console.log('Game started \\n');\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzPzI1MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNodWZmbGVEZWNrIGZyb20gJy4vbW9kdWxlcy9zaHVmZmxlLWRlY2snO1xuaW1wb3J0IHsgZGVhbENhcmRzLCBkZWFsT25lQ2FyZCB9IGZyb20gJy4vbW9kdWxlcy9kZWFsLWNhcmRzJztcblxubGV0IG1ha2VPbmVNb3ZlID0gJyc7XG5cbmNvbnN0IGxvZ1BsYXllckNhcmRzID0gKGNhcmRzSW5QbGF5KSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTYW06ICR7Y2FyZHNJblBsYXkuc2FtLmpvaW4oJywgJyl9YCk7XG4gIGNvbnNvbGUubG9nKGBEZWFsZXI6ICR7Y2FyZHNJblBsYXkuZGVhbGVyLmpvaW4oJywgJyl9YCk7XG59O1xuXG5jb25zdCBsb2dUb3RhbCA9IChzYW0sIGRlYWxlcikgPT4ge1xuICBjb25zb2xlLmxvZyhgXFxuU2FtJ3MgdG90YWw6ICR7c2FtfWApO1xuICBjb25zb2xlLmxvZyhgRGVhbGVyJ3MgdG90YWw6ICR7ZGVhbGVyfSBcXG5gKTtcbn07XG5cbmNvbnN0IHNjb3JlID0ge1xuICBKOiAxMCxcbiAgSzogMTAsXG4gIFE6IDEwLFxuICBBOiAxMSxcbn07XG5cbmNvbnN0IHRvdGFsaXNlciA9IChjYXJkcykgPT4ge1xuICBjb25zdCBtYXBwZWQgPSBjYXJkcy5tYXAoYSA9PiBhLnNwbGl0KCcgJylbMF0pO1xuICByZXR1cm4gbWFwcGVkLnJlZHVjZSgoYSwgYikgPT4gKHNjb3JlW2FdIHx8IE51bWJlcihhKSkgKyAoc2NvcmVbYl0gfHwgTnVtYmVyKGIpKSwgMCk7XG59O1xuXG5jb25zdCBoYXNXb24gPSAoc2FtLCBkZWFsZXIpID0+IHtcbiAgaWYgKChzYW0gPT09IDIxICYmIGRlYWxlciA9PT0gMjEpIHx8IChzYW0gPiAyMSAmJiBkZWFsZXIgPiAyMSkpIHtcbiAgICByZXR1cm4gXCJJdCdzIGEgZHJhd1wiO1xuICB9IGVsc2UgaWYgKHNhbSA+IDIxKSB7XG4gICAgcmV0dXJuIFwiU2FtJ3MgdG90YWwgaXMgZ3JlYXRlciB0aGFuIDIxLCBEZWFsZXIgd2lucyFcIjtcbiAgfSBlbHNlIGlmIChkZWFsZXIgPiAyMSkge1xuICAgIHJldHVybiBcIkRlYWxlcnMncyB0b3RhbCBpcyBncmVhdGVyIHRoYW4gMjEsIFNhbSB3aW5zIVwiO1xuICB9IGVsc2UgaWYgKHNhbSA9PT0gMjEpIHtcbiAgICByZXR1cm4gJ1NhbSB3aW5zISc7XG4gIH0gZWxzZSBpZiAoZGVhbGVyID09PSAyMSkge1xuICAgIHJldHVybiAnRGVhbGVyIHdpbnMhJztcbiAgfSBlbHNlIGlmIChzYW0gPj0gMTcgJiYgZGVhbGVyID4gc2FtKSB7XG4gICAgcmV0dXJuICdEZWFsZXIgd2lucyEnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdhbWVMb29wID0gKGNhcmRzSW5QbGF5LCBnYW1lRGVjaykgPT4ge1xuICBjb25zdCBzYW0gPSB0b3RhbGlzZXIoY2FyZHNJblBsYXkuc2FtKTtcbiAgY29uc3QgZGVhbGVyID0gdG90YWxpc2VyKGNhcmRzSW5QbGF5LmRlYWxlcik7XG4gIGNvbnN0IHBsYXllcldvbiA9IGhhc1dvbihzYW0sIGRlYWxlcik7XG5cbiAgbG9nUGxheWVyQ2FyZHMoY2FyZHNJblBsYXkpO1xuICBsb2dUb3RhbChzYW0sIGRlYWxlcik7XG5cbiAgaWYgKHBsYXllcldvbikge1xuICAgIGNvbnNvbGUubG9nKHBsYXllcldvbik7XG4gIH0gZWxzZSBpZiAoc2FtIDwgMTcpIHtcbiAgICBtYWtlT25lTW92ZSgnc2FtJywgY2FyZHNJblBsYXksIGdhbWVEZWNrKTtcbiAgfSBlbHNlIHtcbiAgICBtYWtlT25lTW92ZSgnZGVhbGVyJywgY2FyZHNJblBsYXksIGdhbWVEZWNrKTtcbiAgfVxufTtcblxubWFrZU9uZU1vdmUgPSAocGxheWVyLCBjYXJkc0luUGxheSwgZ2FtZURlY2spID0+IHtcbiAgY29uc3QgbmV4dENhcmQgPSBkZWFsT25lQ2FyZChnYW1lRGVjayk7XG4gIGNhcmRzSW5QbGF5W3BsYXllcl0ucHVzaChuZXh0Q2FyZCk7XG4gIGdhbWVMb29wKGNhcmRzSW5QbGF5LCBnYW1lRGVjayk7XG59O1xuXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVEZWNrID0gc2h1ZmZsZURlY2soKTtcbiAgY29uc3QgY2FyZHNJblBsYXkgPSBkZWFsQ2FyZHMoZ2FtZURlY2spO1xuXG4gIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQgXFxuJyk7XG4gIGdhbWVMb29wKGNhcmRzSW5QbGF5LCBnYW1lRGVjayk7XG59O1xuXG5zdGFydEdhbWUoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./js/modules/shuffle-deck.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];\nconst suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];\nconst createDeck = () => suits.map(value => values.map(suit => `${suit} ${value}`));\nconst shuffle = () => createDeck().reduce((a, b) => a.concat(b)).sort(() => Math.random() - 0.5);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (shuffle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvc2h1ZmZsZS1kZWNrLmpzP2JiOWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVzID0gWzIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAnSicsICdRJywgJ0snLCAnQSddO1xuY29uc3Qgc3VpdHMgPSBbJ0hlYXJ0JywgJ0RpYW1vbmRzJywgJ1NwYWRlcycsICdDbHVicyddO1xuY29uc3QgY3JlYXRlRGVjayA9ICgpID0+IHN1aXRzLm1hcCh2YWx1ZSA9PiB2YWx1ZXMubWFwKHN1aXQgPT4gYCR7c3VpdH0gJHt2YWx1ZX1gKSk7XG5jb25zdCBzaHVmZmxlID0gKCkgPT4gY3JlYXRlRGVjaygpLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYikpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNodWZmbGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21vZHVsZXMvc2h1ZmZsZS1kZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************!*\
  !*** ./js/modules/deal-cards.js ***!
  \**********************************/
/*! exports provided: dealCards, dealOneCard */
/*! exports used: dealCards, dealOneCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return dealCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return dealOneCard; });\nconst dealCards = (arr) => {\n  const state = {\n    sam: [arr.shift(), arr.shift()],\n    dealer: [arr.shift(), arr.shift()],\n  };\n  return state;\n};\n\nconst dealOneCard = arr => arr.shift();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvZGVhbC1jYXJkcy5qcz8xYjUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlYWxDYXJkcyA9IChhcnIpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgc2FtOiBbYXJyLnNoaWZ0KCksIGFyci5zaGlmdCgpXSxcbiAgICBkZWFsZXI6IFthcnIuc2hpZnQoKSwgYXJyLnNoaWZ0KCldLFxuICB9O1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBkZWFsT25lQ2FyZCA9IGFyciA9PiBhcnIuc2hpZnQoKTtcblxuZXhwb3J0IHsgZGVhbENhcmRzLCBkZWFsT25lQ2FyZCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tb2R1bGVzL2RlYWwtY2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);