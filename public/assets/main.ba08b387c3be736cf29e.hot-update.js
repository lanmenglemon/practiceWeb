webpackHotUpdate("main",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reducer_active_naviBarItem = __webpack_require__(/*! ./reducer_active_naviBarItem */ \"./src/reducers/reducer_active_naviBarItem.js\");\n\nvar _reducer_active_naviBarItem2 = _interopRequireDefault(_reducer_active_naviBarItem);\n\nvar _reducer_naviBarItems = __webpack_require__(/*! ./reducer_naviBarItems */ \"./src/reducers/reducer_naviBarItems.js\");\n\nvar _reducer_naviBarItems2 = _interopRequireDefault(_reducer_naviBarItems);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n  naviBarItems: _reducer_naviBarItems2.default,\n  activeNaviBarItem: _reducer_active_naviBarItem2.default\n});\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzL2luZGV4LmpzPzBiNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgQWN0aXZlTmF2aUJhckl0ZW1SZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJfYWN0aXZlX25hdmlCYXJJdGVtXCI7XG5pbXBvcnQgTmF2aUJhckl0ZW1zUmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyX25hdmlCYXJJdGVtc1wiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG5hdmlCYXJJdGVtcyA6IE5hdmlCYXJJdGVtc1JlZHVjZXIsXG4gIGFjdGl2ZU5hdmlCYXJJdGVtIDogQWN0aXZlTmF2aUJhckl0ZW1SZWR1Y2VyXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/index.js\n");

/***/ }),

/***/ "./src/reducers/reducer_naviBarItems.js":
/*!**********************************************!*\
  !*** ./src/reducers/reducer_naviBarItems.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  return [{ name: \"Home\" }, { name: \"Our Technology\" }, { name: \"Our Team\" }, { name: \"Contact Us\" }];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcmVkdWNlcl9uYXZpQmFySXRlbXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzL3JlZHVjZXJfbmF2aUJhckl0ZW1zLmpzPzc0OTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBbXG4gICAgeyBuYW1lOiBcIkhvbWVcIiB9LFxuICAgIHsgbmFtZTogXCJPdXIgVGVjaG5vbG9neVwifSxcbiAgICB7IG5hbWU6IFwiT3VyIFRlYW1cIn0sXG4gICAgeyBuYW1lOiBcIkNvbnRhY3QgVXNcIn1cbiAgXTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/reducer_naviBarItems.js\n");

/***/ })

})