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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__ = __webpack_require__(/*! ./modules/shuffle-deck */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__ = __webpack_require__(/*! ./modules/deal-cards */ 2);\n\n\n\nlet makeOneMove = '';\n\nconst logPlayerCards = (cardsInPlay) => {\n  console.log(`Sam: ${cardsInPlay.sam.join(', ')}`);\n  console.log(`Dealer: ${cardsInPlay.dealer.join(', ')}`);\n};\n\nconst logTotal = (sam, dealer) => {\n  console.log(`\\nSam's total: ${sam}`);\n  console.log(`Dealer's total: ${dealer} \\n`);\n};\n\nconst score = {\n  J: 10,\n  K: 10,\n  Q: 10,\n  A: 11,\n};\n\nconst totaliser = (cards) => {\n  const mapped = cards.map(a => a.split(' ')[0]);\n  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);\n};\n\nconst hasWon = (sam, dealer) => {\n  if ((sam === 21 && dealer === 21) || (sam > 21 && dealer > 21)) {\n    return \"It's a draw\";\n  } else if (sam > 21) {\n    return \"Sam's total is greater than 21, Dealer wins!\";\n  } else if (dealer > 21) {\n    return \"Dealers's total is greater than 21, Sam wins!\";\n  } else if (sam === 21) {\n    return 'Sam wins!';\n  } else if (dealer === 21) {\n    return 'Dealer wins!';\n  } else if (sam >= 17 && dealer > sam) {\n    return 'Dealer wins!';\n  }\n  return false;\n};\n\nconst gameLoop = (cardsInPlay, gameDeck) => {\n  const sam = totaliser(cardsInPlay.sam);\n  const dealer = totaliser(cardsInPlay.dealer);\n  const playerWon = hasWon(sam, dealer);\n\n  logPlayerCards(cardsInPlay);\n  logTotal(sam, dealer);\n\n  if (playerWon) {\n    console.log(playerWon);\n  } else if (sam < 17) {\n    makeOneMove('sam', cardsInPlay, gameDeck);\n  } else {\n    makeOneMove('dealer', cardsInPlay, gameDeck);\n  }\n};\n\nmakeOneMove = (player, cardsInPlay, gameDeck) => {\n  const nextCard = Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"b\" /* dealOneCard */])(gameDeck);\n  cardsInPlay[player].push(nextCard);\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nconst startGame = () => {\n  const gameDeck = Object(__WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__[\"a\" /* default */])();\n  const cardsInPlay = Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"a\" /* dealCards */])(gameDeck);\n\n  console.log('Game started \\n');\n  gameLoop(cardsInPlay, gameDeck);\n};\n\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcz83MmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaHVmZmxlRGVjayBmcm9tICcuL21vZHVsZXMvc2h1ZmZsZS1kZWNrJztcbmltcG9ydCB7IGRlYWxDYXJkcywgZGVhbE9uZUNhcmQgfSBmcm9tICcuL21vZHVsZXMvZGVhbC1jYXJkcyc7XG5cbmxldCBtYWtlT25lTW92ZSA9ICcnO1xuXG5jb25zdCBsb2dQbGF5ZXJDYXJkcyA9IChjYXJkc0luUGxheSkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2FtOiAke2NhcmRzSW5QbGF5LnNhbS5qb2luKCcsICcpfWApO1xuICBjb25zb2xlLmxvZyhgRGVhbGVyOiAke2NhcmRzSW5QbGF5LmRlYWxlci5qb2luKCcsICcpfWApO1xufTtcblxuY29uc3QgbG9nVG90YWwgPSAoc2FtLCBkZWFsZXIpID0+IHtcbiAgY29uc29sZS5sb2coYFxcblNhbSdzIHRvdGFsOiAke3NhbX1gKTtcbiAgY29uc29sZS5sb2coYERlYWxlcidzIHRvdGFsOiAke2RlYWxlcn0gXFxuYCk7XG59O1xuXG5jb25zdCBzY29yZSA9IHtcbiAgSjogMTAsXG4gIEs6IDEwLFxuICBROiAxMCxcbiAgQTogMTEsXG59O1xuXG5jb25zdCB0b3RhbGlzZXIgPSAoY2FyZHMpID0+IHtcbiAgY29uc3QgbWFwcGVkID0gY2FyZHMubWFwKGEgPT4gYS5zcGxpdCgnICcpWzBdKTtcbiAgcmV0dXJuIG1hcHBlZC5yZWR1Y2UoKGEsIGIpID0+IChzY29yZVthXSB8fCBOdW1iZXIoYSkpICsgKHNjb3JlW2JdIHx8IE51bWJlcihiKSksIDApO1xufTtcblxuY29uc3QgaGFzV29uID0gKHNhbSwgZGVhbGVyKSA9PiB7XG4gIGlmICgoc2FtID09PSAyMSAmJiBkZWFsZXIgPT09IDIxKSB8fCAoc2FtID4gMjEgJiYgZGVhbGVyID4gMjEpKSB7XG4gICAgcmV0dXJuIFwiSXQncyBhIGRyYXdcIjtcbiAgfSBlbHNlIGlmIChzYW0gPiAyMSkge1xuICAgIHJldHVybiBcIlNhbSdzIHRvdGFsIGlzIGdyZWF0ZXIgdGhhbiAyMSwgRGVhbGVyIHdpbnMhXCI7XG4gIH0gZWxzZSBpZiAoZGVhbGVyID4gMjEpIHtcbiAgICByZXR1cm4gXCJEZWFsZXJzJ3MgdG90YWwgaXMgZ3JlYXRlciB0aGFuIDIxLCBTYW0gd2lucyFcIjtcbiAgfSBlbHNlIGlmIChzYW0gPT09IDIxKSB7XG4gICAgcmV0dXJuICdTYW0gd2lucyEnO1xuICB9IGVsc2UgaWYgKGRlYWxlciA9PT0gMjEpIHtcbiAgICByZXR1cm4gJ0RlYWxlciB3aW5zISc7XG4gIH0gZWxzZSBpZiAoc2FtID49IDE3ICYmIGRlYWxlciA+IHNhbSkge1xuICAgIHJldHVybiAnRGVhbGVyIHdpbnMhJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBnYW1lTG9vcCA9IChjYXJkc0luUGxheSwgZ2FtZURlY2spID0+IHtcbiAgY29uc3Qgc2FtID0gdG90YWxpc2VyKGNhcmRzSW5QbGF5LnNhbSk7XG4gIGNvbnN0IGRlYWxlciA9IHRvdGFsaXNlcihjYXJkc0luUGxheS5kZWFsZXIpO1xuICBjb25zdCBwbGF5ZXJXb24gPSBoYXNXb24oc2FtLCBkZWFsZXIpO1xuXG4gIGxvZ1BsYXllckNhcmRzKGNhcmRzSW5QbGF5KTtcbiAgbG9nVG90YWwoc2FtLCBkZWFsZXIpO1xuXG4gIGlmIChwbGF5ZXJXb24pIHtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJXb24pO1xuICB9IGVsc2UgaWYgKHNhbSA8IDE3KSB7XG4gICAgbWFrZU9uZU1vdmUoJ3NhbScsIGNhcmRzSW5QbGF5LCBnYW1lRGVjayk7XG4gIH0gZWxzZSB7XG4gICAgbWFrZU9uZU1vdmUoJ2RlYWxlcicsIGNhcmRzSW5QbGF5LCBnYW1lRGVjayk7XG4gIH1cbn07XG5cbm1ha2VPbmVNb3ZlID0gKHBsYXllciwgY2FyZHNJblBsYXksIGdhbWVEZWNrKSA9PiB7XG4gIGNvbnN0IG5leHRDYXJkID0gZGVhbE9uZUNhcmQoZ2FtZURlY2spO1xuICBjYXJkc0luUGxheVtwbGF5ZXJdLnB1c2gobmV4dENhcmQpO1xuICBnYW1lTG9vcChjYXJkc0luUGxheSwgZ2FtZURlY2spO1xufTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBjb25zdCBnYW1lRGVjayA9IHNodWZmbGVEZWNrKCk7XG4gIGNvbnN0IGNhcmRzSW5QbGF5ID0gZGVhbENhcmRzKGdhbWVEZWNrKTtcblxuICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGVkIFxcbicpO1xuICBnYW1lTG9vcChjYXJkc0luUGxheSwgZ2FtZURlY2spO1xufTtcblxuc3RhcnRHYW1lKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./src/js/modules/shuffle-deck.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];\nconst suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];\nconst createDeck = () => suits.map(value => values.map(suit => `${suit} ${value}`));\nconst shuffle = () => createDeck().reduce((a, b) => a.concat(b)).sort(() => Math.random() - 0.5);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (shuffle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3NodWZmbGUtZGVjay5qcz83ZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhbHVlcyA9IFsyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgJ0onLCAnUScsICdLJywgJ0EnXTtcbmNvbnN0IHN1aXRzID0gWydIZWFydCcsICdEaWFtb25kcycsICdTcGFkZXMnLCAnQ2x1YnMnXTtcbmNvbnN0IGNyZWF0ZURlY2sgPSAoKSA9PiBzdWl0cy5tYXAodmFsdWUgPT4gdmFsdWVzLm1hcChzdWl0ID0+IGAke3N1aXR9ICR7dmFsdWV9YCkpO1xuY29uc3Qgc2h1ZmZsZSA9ICgpID0+IGNyZWF0ZURlY2soKS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG5leHBvcnQgZGVmYXVsdCBzaHVmZmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kdWxlcy9zaHVmZmxlLWRlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/js/modules/deal-cards.js ***!
  \**************************************/
/*! exports provided: dealCards, dealOneCard */
/*! exports used: dealCards, dealOneCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return dealCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return dealOneCard; });\nconst dealCards = (arr) => {\n  const state = {\n    sam: [arr.shift(), arr.shift()],\n    dealer: [arr.shift(), arr.shift()],\n  };\n  return state;\n};\n\nconst dealOneCard = arr => arr.shift();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2RlYWwtY2FyZHMuanM/Y2MyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWFsQ2FyZHMgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHNhbTogW2Fyci5zaGlmdCgpLCBhcnIuc2hpZnQoKV0sXG4gICAgZGVhbGVyOiBbYXJyLnNoaWZ0KCksIGFyci5zaGlmdCgpXSxcbiAgfTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3QgZGVhbE9uZUNhcmQgPSBhcnIgPT4gYXJyLnNoaWZ0KCk7XG5cbmV4cG9ydCB7IGRlYWxDYXJkcywgZGVhbE9uZUNhcmQgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHVsZXMvZGVhbC1jYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);