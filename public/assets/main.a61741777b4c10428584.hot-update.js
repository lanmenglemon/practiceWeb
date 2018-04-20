webpackHotUpdate("main",{

/***/ "./src/components/instruments.js":
/*!***************************************!*\
  !*** ./src/components/instruments.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _header = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _naviBar = __webpack_require__(/*! ./naviBar */ \"./src/components/naviBar.js\");\n\nvar _naviBar2 = _interopRequireDefault(_naviBar);\n\n__webpack_require__(/*! ../style/instruments.css */ \"./src/style/instruments.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Instruments = function (_Component) {\n  _inherits(Instruments, _Component);\n\n  function Instruments() {\n    _classCallCheck(this, Instruments);\n\n    return _possibleConstructorReturn(this, (Instruments.__proto__ || Object.getPrototypeOf(Instruments)).apply(this, arguments));\n  }\n\n  _createClass(Instruments, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_header2.default, null),\n        _react2.default.createElement('hr', { className: 'my-0 py-0' }),\n        _react2.default.createElement(_naviBar2.default, null)\n      );\n    }\n  }]);\n\n  return Instruments;\n}(_react.Component);\n\nexports.default = Instruments;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnN0cnVtZW50cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbnN0cnVtZW50cy5qcz9iNjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBOYXZpQmFyIGZyb20gJy4vbmF2aUJhcic7XG5pbXBvcnQgJy4uL3N0eWxlL2luc3RydW1lbnRzLmNzcydcblxuY2xhc3MgSW5zdHJ1bWVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMCBweS0wXCIvPlxuICAgICAgICA8TmF2aUJhciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVtZW50cztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/instruments.js\n");

/***/ }),

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = function (_Component) {\n  _inherits(NavigationBar, _Component);\n\n  function NavigationBar() {\n    _classCallCheck(this, NavigationBar);\n\n    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));\n  }\n\n  _createClass(NavigationBar, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"nav\",\n        { className: \"navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar py-0\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container mx-auto d-flex\" },\n          _react2.default.createElement(\n            \"ul\",\n            { className: \"navbar-nav bd-navbar-nav flex-row mx-auto\" },\n            _react2.default.createElement(\n              \"li\",\n              { className: \"nav-item my-auto mr-5\" },\n              \"Home\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              { className: \"nav-item my-auto mx-5\" },\n              \"Overview\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              { className: \"nav-item my-auto mx-5\" },\n              \"Instruments\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              { className: \"nav-item my-auto mx-5\" },\n              \"Applications\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              { className: \"nav-item my-auto ml-5 dropdown\" },\n              _react2.default.createElement(\n                \"a\",\n                { className: \"nav-item nav-link dropdown-toggle mr-md-2\", href: \"#\",\n                  \"data-toggle\": \"dropdown\", \"aria-haspopup\": \"true\" },\n                \"More\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"dropdown-menu dropdown-menu-right\" },\n                _react2.default.createElement(\n                  \"a\",\n                  { className: \"dropdown-item\" },\n                  \"1\"\n                ),\n                _react2.default.createElement(\n                  \"a\",\n                  { className: \"dropdown-item\" },\n                  \"2\"\n                ),\n                _react2.default.createElement(\n                  \"a\",\n                  { className: \"dropdown-item\" },\n                  \"3\"\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(_react.Component);\n\nexports.default = NavigationBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IGJkLW5hdmJhciBweS0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBkLWZsZXhcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3cgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtci01XCI+SG9tZTwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdmVydmlldzwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5JbnN0cnVtZW50czwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5BcHBsaWNhdGlvbnM8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtbC01IGRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIG1yLW1kLTJcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4xPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjI8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSkE7QUFMQTtBQURBO0FBREE7QUFxQkE7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ }),

/***/ "./src/components/navigationBar.js":
false

})