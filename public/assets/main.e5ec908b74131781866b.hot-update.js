webpackHotUpdate("main",{

/***/ "./src/reducers/reducer_tabs.js":
/*!**************************************!*\
  !*** ./src/reducers/reducer_tabs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = tabsReducer;\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n\nvar initialState = {\n    tabs1: null\n};\n\nfunction tabsReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.CHANGE_SELECTED_TAB:\n            return action.tab;\n\n        default:\n            return state;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcmVkdWNlcl90YWJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9yZWR1Y2Vycy9yZWR1Y2VyX3RhYnMuanM/NTMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDSEFOR0VfU0VMRUNURURfVEFCIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHRhYnMxOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWJzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ0hBTkdFX1NFTEVDVEVEX1RBQjpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi50YWI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQU1BO0FBQ0E7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/reducer_tabs.js\n");

/***/ })

})