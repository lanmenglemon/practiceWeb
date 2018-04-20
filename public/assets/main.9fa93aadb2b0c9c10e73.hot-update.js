webpackHotUpdate("main",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reducer_active_naviBarItem = __webpack_require__(/*! ./reducer_active_naviBarItem */ \"./src/reducers/reducer_active_naviBarItem.js\");\n\nvar _reducer_active_naviBarItem2 = _interopRequireDefault(_reducer_active_naviBarItem);\n\nvar _reducer_naviBarItem = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./reducer_naviBarItem\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _reducer_naviBarItem2 = _interopRequireDefault(_reducer_naviBarItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n  naviBarItems: _reducer_naviBarItem2.default,\n  activeNaviBarItem: _reducer_active_naviBarItem2.default\n});\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzL2luZGV4LmpzPzBiNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgQWN0aXZlTmF2aUJhckl0ZW1SZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJfYWN0aXZlX25hdmlCYXJJdGVtXCI7XG5pbXBvcnQgTmF2aUJhckl0ZW1zUmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyX25hdmlCYXJJdGVtXCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbmF2aUJhckl0ZW1zIDogTmF2aUJhckl0ZW1zUmVkdWNlcixcbiAgYWN0aXZlTmF2aUJhckl0ZW0gOiBBY3RpdmVOYXZpQmFySXRlbVJlZHVjZXJcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/index.js\n");

/***/ }),

/***/ "./src/reducers/reducer_active_naviBarItem.js":
/*!****************************************************!*\
  !*** ./src/reducers/reducer_active_naviBarItem.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.ITEM_SELECTED:\n      return action.payload;\n  }\n  return state;\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcmVkdWNlcl9hY3RpdmVfbmF2aUJhckl0ZW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzL3JlZHVjZXJfYWN0aXZlX25hdmlCYXJJdGVtLmpzP2Y5MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRFTV9TRUxFQ1RFRCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSVRFTV9TRUxFQ1RFRDpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducers/reducer_active_naviBarItem.js\n");

/***/ })

})