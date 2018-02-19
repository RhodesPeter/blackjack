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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__ = __webpack_require__(/*! ./modules/shuffle-deck */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__ = __webpack_require__(/*! ./modules/deal-cards */ 2);\n\n\n\nconst logInitialMove = (initialCards) => {\n  console.log(`Sam: ${initialCards.sam.join(', ')}`);\n  console.log(`Dealer: ${initialCards.dealer.join(', ')}`);\n};\n\nconst logTotal = (total) => {\n  console.log(' ');\n  console.log(`Sam's total: ${total[0]}`);\n  console.log(`Dealer's total: ${total[1]}`);\n};\n\nconst score = {\n  J: 10,\n  K: 10,\n  Q: 10,\n  A: 11,\n};\n\nconst totaliser = cards => cards.reduce((a, b) => {\n  const scoreA = a.split(' ')[0];\n  const scoreB = b.split(' ')[0];\n  return (score[scoreA] || Number(scoreA)) + (score[scoreB] || Number(scoreB));\n});\n\nconst evaluateCards = (cards) => {\n  const sam = totaliser(cards.sam);\n  const dealer = totaliser(cards.dealer);\n\n  logTotal([sam, dealer]);\n\n  if (sam > 21) {\n    console.log(\"Sam's total is greater than 21, Dealer wins!\");\n  } else if (dealer > 21) {\n    console.log(\"Dealers's total is greater than 21, Sam wins!\");\n  }\n\n  if (sam === 21 || dealer === 21) {\n    let winner = \"It's a draw\";\n    if (sam === 21 && dealer !== 21) {\n      winner = 'Sam wins!';\n    } else if (dealer === 21 && sam !== 21) {\n      winner = 'Dealer wins!';\n    }\n    console.log(winner);\n  }\n};\n\nconst startGame = () => {\n  console.log('Game started \\n');\n\n  const gameDeck = Object(__WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__[\"a\" /* default */])();\n  const initialCards = Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"a\" /* default */])(gameDeck);\n  logInitialMove(initialCards);\n  evaluateCards(initialCards);\n};\n\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcz83MmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaHVmZmxlRGVjayBmcm9tICcuL21vZHVsZXMvc2h1ZmZsZS1kZWNrJztcbmltcG9ydCBkZWFsQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL2RlYWwtY2FyZHMnO1xuXG5jb25zdCBsb2dJbml0aWFsTW92ZSA9IChpbml0aWFsQ2FyZHMpID0+IHtcbiAgY29uc29sZS5sb2coYFNhbTogJHtpbml0aWFsQ2FyZHMuc2FtLmpvaW4oJywgJyl9YCk7XG4gIGNvbnNvbGUubG9nKGBEZWFsZXI6ICR7aW5pdGlhbENhcmRzLmRlYWxlci5qb2luKCcsICcpfWApO1xufTtcblxuY29uc3QgbG9nVG90YWwgPSAodG90YWwpID0+IHtcbiAgY29uc29sZS5sb2coJyAnKTtcbiAgY29uc29sZS5sb2coYFNhbSdzIHRvdGFsOiAke3RvdGFsWzBdfWApO1xuICBjb25zb2xlLmxvZyhgRGVhbGVyJ3MgdG90YWw6ICR7dG90YWxbMV19YCk7XG59O1xuXG5jb25zdCBzY29yZSA9IHtcbiAgSjogMTAsXG4gIEs6IDEwLFxuICBROiAxMCxcbiAgQTogMTEsXG59O1xuXG5jb25zdCB0b3RhbGlzZXIgPSBjYXJkcyA9PiBjYXJkcy5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgY29uc3Qgc2NvcmVBID0gYS5zcGxpdCgnICcpWzBdO1xuICBjb25zdCBzY29yZUIgPSBiLnNwbGl0KCcgJylbMF07XG4gIHJldHVybiAoc2NvcmVbc2NvcmVBXSB8fCBOdW1iZXIoc2NvcmVBKSkgKyAoc2NvcmVbc2NvcmVCXSB8fCBOdW1iZXIoc2NvcmVCKSk7XG59KTtcblxuY29uc3QgZXZhbHVhdGVDYXJkcyA9IChjYXJkcykgPT4ge1xuICBjb25zdCBzYW0gPSB0b3RhbGlzZXIoY2FyZHMuc2FtKTtcbiAgY29uc3QgZGVhbGVyID0gdG90YWxpc2VyKGNhcmRzLmRlYWxlcik7XG5cbiAgbG9nVG90YWwoW3NhbSwgZGVhbGVyXSk7XG5cbiAgaWYgKHNhbSA+IDIxKSB7XG4gICAgY29uc29sZS5sb2coXCJTYW0ncyB0b3RhbCBpcyBncmVhdGVyIHRoYW4gMjEsIERlYWxlciB3aW5zIVwiKTtcbiAgfSBlbHNlIGlmIChkZWFsZXIgPiAyMSkge1xuICAgIGNvbnNvbGUubG9nKFwiRGVhbGVycydzIHRvdGFsIGlzIGdyZWF0ZXIgdGhhbiAyMSwgU2FtIHdpbnMhXCIpO1xuICB9XG5cbiAgaWYgKHNhbSA9PT0gMjEgfHwgZGVhbGVyID09PSAyMSkge1xuICAgIGxldCB3aW5uZXIgPSBcIkl0J3MgYSBkcmF3XCI7XG4gICAgaWYgKHNhbSA9PT0gMjEgJiYgZGVhbGVyICE9PSAyMSkge1xuICAgICAgd2lubmVyID0gJ1NhbSB3aW5zISc7XG4gICAgfSBlbHNlIGlmIChkZWFsZXIgPT09IDIxICYmIHNhbSAhPT0gMjEpIHtcbiAgICAgIHdpbm5lciA9ICdEZWFsZXIgd2lucyEnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh3aW5uZXIpO1xuICB9XG59O1xuXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQgXFxuJyk7XG5cbiAgY29uc3QgZ2FtZURlY2sgPSBzaHVmZmxlRGVjaygpO1xuICBjb25zdCBpbml0aWFsQ2FyZHMgPSBkZWFsQ2FyZHMoZ2FtZURlY2spO1xuICBsb2dJbml0aWFsTW92ZShpbml0aWFsQ2FyZHMpO1xuICBldmFsdWF0ZUNhcmRzKGluaXRpYWxDYXJkcyk7XG59O1xuXG5zdGFydEdhbWUoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const dealCards = (arr) => {\n  const state = {\n    sam: [arr[0], arr[2]],\n    dealer: [arr[1], arr[3]],\n  };\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (dealCards);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2RlYWwtY2FyZHMuanM/Y2MyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWFsQ2FyZHMgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHNhbTogW2FyclswXSwgYXJyWzJdXSxcbiAgICBkZWFsZXI6IFthcnJbMV0sIGFyclszXV0sXG4gIH07XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxDYXJkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHVsZXMvZGVhbC1jYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);