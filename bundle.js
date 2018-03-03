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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__ = __webpack_require__(/*! ./modules/shuffle-deck */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__ = __webpack_require__(/*! ./modules/deal-cards */ 2);\n\n\n\nlet samsSecondMove = '';\nlet dealersSecondMove = '';\n\nconst logInitialMove = (initialCards) => {\n  console.log(`Sam: ${initialCards.sam.join(', ')}`);\n  console.log(`Dealer: ${initialCards.dealer.join(', ')}`);\n};\n\nconst logTotal = (total) => {\n  console.log(' ');\n  console.log(`Sam's total: ${total[0]}`);\n  console.log(`Dealer's total: ${total[1]} \\n`);\n};\n\nconst score = {\n  J: 10,\n  K: 10,\n  Q: 10,\n  A: 11,\n};\n\nconst totaliser = (cards) => {\n  const mapped = cards.map(a => a.split(' ')[0]);\n  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);\n};\n\nconst evaluateCards = (initialCards, gameDeck) => {\n  const sam = totaliser(initialCards.sam);\n  const dealer = totaliser(initialCards.dealer);\n\n  logTotal([sam, dealer]);\n\n  if (sam > 21) {\n    console.log(\"Sam's total is greater than 21, Dealer wins!\");\n    return;\n  } else if (dealer > 21) {\n    console.log(\"Dealers's total is greater than 21, Sam wins!\");\n    return;\n  }\n\n  if (sam === 21 || dealer === 21) {\n    let winner = \"It's a draw\";\n    if (sam === 21 && dealer !== 21) {\n      winner = 'Sam wins!';\n    } else if (dealer === 21 && sam !== 21) {\n      winner = 'Dealer wins!';\n    }\n    console.log(winner);\n    return;\n  }\n\n  if (sam >= 17) {\n    if (dealer > sam) {\n      console.log('Dealer wins!');\n      return;\n    }\n    dealersSecondMove(initialCards, gameDeck);\n  } else {\n    samsSecondMove(initialCards, gameDeck);\n  }\n};\n\nsamsSecondMove = (initialCards, gameDeck) => {\n  initialCards.sam.push(Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"b\" /* dealOneCard */])(gameDeck));\n  logInitialMove(initialCards);\n  evaluateCards(initialCards, gameDeck);\n};\n\ndealersSecondMove = (initialCards, gameDeck) => {\n  initialCards.dealer.push(Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"b\" /* dealOneCard */])(gameDeck));\n  logInitialMove(initialCards);\n  evaluateCards(initialCards, gameDeck);\n};\n\nconst startGame = () => {\n  console.log('Game started \\n');\n\n  const gameDeck = Object(__WEBPACK_IMPORTED_MODULE_0__modules_shuffle_deck__[\"a\" /* default */])();\n  const initialCards = Object(__WEBPACK_IMPORTED_MODULE_1__modules_deal_cards__[\"a\" /* dealCards */])(gameDeck);\n  logInitialMove(initialCards);\n  evaluateCards(initialCards, gameDeck);\n};\n\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcz83MmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaHVmZmxlRGVjayBmcm9tICcuL21vZHVsZXMvc2h1ZmZsZS1kZWNrJztcbmltcG9ydCB7IGRlYWxDYXJkcywgZGVhbE9uZUNhcmQgfSBmcm9tICcuL21vZHVsZXMvZGVhbC1jYXJkcyc7XG5cbmxldCBzYW1zU2Vjb25kTW92ZSA9ICcnO1xubGV0IGRlYWxlcnNTZWNvbmRNb3ZlID0gJyc7XG5cbmNvbnN0IGxvZ0luaXRpYWxNb3ZlID0gKGluaXRpYWxDYXJkcykgPT4ge1xuICBjb25zb2xlLmxvZyhgU2FtOiAke2luaXRpYWxDYXJkcy5zYW0uam9pbignLCAnKX1gKTtcbiAgY29uc29sZS5sb2coYERlYWxlcjogJHtpbml0aWFsQ2FyZHMuZGVhbGVyLmpvaW4oJywgJyl9YCk7XG59O1xuXG5jb25zdCBsb2dUb3RhbCA9ICh0b3RhbCkgPT4ge1xuICBjb25zb2xlLmxvZygnICcpO1xuICBjb25zb2xlLmxvZyhgU2FtJ3MgdG90YWw6ICR7dG90YWxbMF19YCk7XG4gIGNvbnNvbGUubG9nKGBEZWFsZXIncyB0b3RhbDogJHt0b3RhbFsxXX0gXFxuYCk7XG59O1xuXG5jb25zdCBzY29yZSA9IHtcbiAgSjogMTAsXG4gIEs6IDEwLFxuICBROiAxMCxcbiAgQTogMTEsXG59O1xuXG5jb25zdCB0b3RhbGlzZXIgPSAoY2FyZHMpID0+IHtcbiAgY29uc3QgbWFwcGVkID0gY2FyZHMubWFwKGEgPT4gYS5zcGxpdCgnICcpWzBdKTtcbiAgcmV0dXJuIG1hcHBlZC5yZWR1Y2UoKGEsIGIpID0+IChzY29yZVthXSB8fCBOdW1iZXIoYSkpICsgKHNjb3JlW2JdIHx8IE51bWJlcihiKSksIDApO1xufTtcblxuY29uc3QgZXZhbHVhdGVDYXJkcyA9IChpbml0aWFsQ2FyZHMsIGdhbWVEZWNrKSA9PiB7XG4gIGNvbnN0IHNhbSA9IHRvdGFsaXNlcihpbml0aWFsQ2FyZHMuc2FtKTtcbiAgY29uc3QgZGVhbGVyID0gdG90YWxpc2VyKGluaXRpYWxDYXJkcy5kZWFsZXIpO1xuXG4gIGxvZ1RvdGFsKFtzYW0sIGRlYWxlcl0pO1xuXG4gIGlmIChzYW0gPiAyMSkge1xuICAgIGNvbnNvbGUubG9nKFwiU2FtJ3MgdG90YWwgaXMgZ3JlYXRlciB0aGFuIDIxLCBEZWFsZXIgd2lucyFcIik7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGRlYWxlciA+IDIxKSB7XG4gICAgY29uc29sZS5sb2coXCJEZWFsZXJzJ3MgdG90YWwgaXMgZ3JlYXRlciB0aGFuIDIxLCBTYW0gd2lucyFcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNhbSA9PT0gMjEgfHwgZGVhbGVyID09PSAyMSkge1xuICAgIGxldCB3aW5uZXIgPSBcIkl0J3MgYSBkcmF3XCI7XG4gICAgaWYgKHNhbSA9PT0gMjEgJiYgZGVhbGVyICE9PSAyMSkge1xuICAgICAgd2lubmVyID0gJ1NhbSB3aW5zISc7XG4gICAgfSBlbHNlIGlmIChkZWFsZXIgPT09IDIxICYmIHNhbSAhPT0gMjEpIHtcbiAgICAgIHdpbm5lciA9ICdEZWFsZXIgd2lucyEnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh3aW5uZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzYW0gPj0gMTcpIHtcbiAgICBpZiAoZGVhbGVyID4gc2FtKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGVhbGVyIHdpbnMhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlYWxlcnNTZWNvbmRNb3ZlKGluaXRpYWxDYXJkcywgZ2FtZURlY2spO1xuICB9IGVsc2Uge1xuICAgIHNhbXNTZWNvbmRNb3ZlKGluaXRpYWxDYXJkcywgZ2FtZURlY2spO1xuICB9XG59O1xuXG5zYW1zU2Vjb25kTW92ZSA9IChpbml0aWFsQ2FyZHMsIGdhbWVEZWNrKSA9PiB7XG4gIGluaXRpYWxDYXJkcy5zYW0ucHVzaChkZWFsT25lQ2FyZChnYW1lRGVjaykpO1xuICBsb2dJbml0aWFsTW92ZShpbml0aWFsQ2FyZHMpO1xuICBldmFsdWF0ZUNhcmRzKGluaXRpYWxDYXJkcywgZ2FtZURlY2spO1xufTtcblxuZGVhbGVyc1NlY29uZE1vdmUgPSAoaW5pdGlhbENhcmRzLCBnYW1lRGVjaykgPT4ge1xuICBpbml0aWFsQ2FyZHMuZGVhbGVyLnB1c2goZGVhbE9uZUNhcmQoZ2FtZURlY2spKTtcbiAgbG9nSW5pdGlhbE1vdmUoaW5pdGlhbENhcmRzKTtcbiAgZXZhbHVhdGVDYXJkcyhpbml0aWFsQ2FyZHMsIGdhbWVEZWNrKTtcbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRlZCBcXG4nKTtcblxuICBjb25zdCBnYW1lRGVjayA9IHNodWZmbGVEZWNrKCk7XG4gIGNvbnN0IGluaXRpYWxDYXJkcyA9IGRlYWxDYXJkcyhnYW1lRGVjayk7XG4gIGxvZ0luaXRpYWxNb3ZlKGluaXRpYWxDYXJkcyk7XG4gIGV2YWx1YXRlQ2FyZHMoaW5pdGlhbENhcmRzLCBnYW1lRGVjayk7XG59O1xuXG5zdGFydEdhbWUoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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