webpackHotUpdate("main",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../style/header.css */ \"./src/style/header.css\");\n\nvar _linkedin = __webpack_require__(/*! ../images/linkedin.png */ \"./src/images/linkedin.png\");\n\nvar _linkedin2 = _interopRequireDefault(_linkedin);\n\nvar _cart = __webpack_require__(/*! ../images/cart.png */ \"./src/images/cart.png\");\n\nvar _cart2 = _interopRequireDefault(_cart);\n\nvar _logo = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'header',\n        { className: 'navbar navbar-expand navbar-light d-flex flex-sm-column flex-md-row bd-navbar' },\n        _react2.default.createElement(\n          'div',\n          { className: 'container col-md-12 mx-auto py-0' },\n          _react2.default.createElement(\n            'a',\n            { 'class': 'navbar-brand mr-0 col-auto', href: '/' },\n            _react2.default.createElement('img', { src: _logo2.default, id: 'logo' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { 'class': 'navbar-nav-scroll' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'navbar-nav flex-row d-flex justify-content-between' },\n              _react2.default.createElement(\n                'li',\n                { className: 'nav-item col-auto d-none d-sm-block' },\n                _react2.default.createElement(\n                  'a',\n                  { className: 'nav-link', href: '#' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'text-center' },\n                    'kris@parallume.com'\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                { className: 'nav-item col-auto d-none d-md-block' },\n                _react2.default.createElement(\n                  'span',\n                  { className: 'text-center' },\n                  '(408)757-1116'\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                { className: 'nav-item col-auto d-none d-lg-block' },\n                _react2.default.createElement(\n                  'a',\n                  { className: 'nav-link', href: 'https://www.linkedin.com/in/kristofer-haushalter-617508144/',\n                    target: '_blank', rel: 'noopener' },\n                  _react2.default.createElement('img', { src: _linkedin2.default, id: 'linkedin' })\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nexports.default = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzdiMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGUvaGVhZGVyLmNzcydcbmltcG9ydCBsaW5rZWRpbiBmcm9tICcuLi9pbWFnZXMvbGlua2VkaW4ucG5nJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi4vaW1hZ2VzL2NhcnQucG5nJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBkLWZsZXggZmxleC1zbS1jb2x1bW4gZmxleC1tZC1yb3cgYmQtbmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTEyIG14LWF1dG8gcHktMFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmQgbXItMCBjb2wtYXV0b1wiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBpZD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1uYXYtc2Nyb2xsXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGZsZXgtcm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBjb2wtYXV0byBkLW5vbmUgZC1zbS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+a3Jpc0BwYXJhbGx1bWUuY29tPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBjb2wtYXV0byBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4oNDA4KTc1Ny0xMTE2PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGNvbC1hdXRvIGQtbm9uZSBkLWxnLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tyaXN0b2Zlci1oYXVzaGFsdGVyLTYxNzUwODE0NC9cIlxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpbmtlZGlufSBpZD1cImxpbmtlZGluXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFQQTtBQURBO0FBSkE7QUFEQTtBQXdCQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.js\n");

/***/ })

})