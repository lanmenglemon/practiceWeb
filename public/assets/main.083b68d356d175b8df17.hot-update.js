webpackHotUpdate("main",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../style/header.css */ \"./src/style/header.css\");\n\nvar _linkedin = __webpack_require__(/*! ../images/linkedin.png */ \"./src/images/linkedin.png\");\n\nvar _linkedin2 = _interopRequireDefault(_linkedin);\n\nvar _cart = __webpack_require__(/*! ../images/cart.png */ \"./src/images/cart.png\");\n\nvar _cart2 = _interopRequireDefault(_cart);\n\nvar _logo = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'header',\n        { className: 'navbar navbar-expand navbar-light d-flex flex-sm-column flex-md-row bd-navbar' },\n        _react2.default.createElement(\n          'div',\n          { className: 'container mx-auto d-flex' },\n          _react2.default.createElement(\n            'a',\n            { 'class': 'navbar-brand mr-0', href: '/' },\n            _react2.default.createElement('img', { src: _logo2.default, id: 'logo' })\n          ),\n          _react2.default.createElement(\n            'ul',\n            { className: 'navbar-nav flex-row d-flex' },\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item d-none d-sm-block my-auto mr-3' },\n              _react2.default.createElement(\n                'a',\n                { className: 'nav-link', href: '#' },\n                _react2.default.createElement(\n                  'span',\n                  null,\n                  'kris@parallume.com'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item d-none d-md-block my-auto mx-3' },\n              _react2.default.createElement(\n                'span',\n                null,\n                '(408)757-1116'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item d-none d-lg-block my-auto ml-3' },\n              _react2.default.createElement(\n                'a',\n                { className: 'nav-link', href: 'https://www.linkedin.com/in/kristofer-haushalter-617508144/',\n                  target: '_blank', rel: 'noopener' },\n                _react2.default.createElement('img', { src: _linkedin2.default, id: 'linkedin' })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nexports.default = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzdiMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGUvaGVhZGVyLmNzcydcbmltcG9ydCBsaW5rZWRpbiBmcm9tICcuLi9pbWFnZXMvbGlua2VkaW4ucG5nJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi4vaW1hZ2VzL2NhcnQucG5nJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBkLWZsZXggZmxleC1zbS1jb2x1bW4gZmxleC1tZC1yb3cgYmQtbmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBkLWZsZXhcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIG1yLTBcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gaWQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGZsZXgtcm93IGQtZmxleFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZC1ub25lIGQtc20tYmxvY2sgbXktYXV0byBtci0zXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPjxzcGFuPmtyaXNAcGFyYWxsdW1lLmNvbTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkLW5vbmUgZC1tZC1ibG9jayBteS1hdXRvIG14LTNcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4oNDA4KTc1Ny0xMTE2PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZC1ub25lIGQtbGctYmxvY2sgbXktYXV0byBtbC0zXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tyaXN0b2Zlci1oYXVzaGFsdGVyLTYxNzUwODE0NC9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpbmtlZGlufSBpZD1cImxpbmtlZGluXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUEE7QUFKQTtBQURBO0FBc0JBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header.js\n");

/***/ })

})