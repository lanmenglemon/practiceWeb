webpackHotUpdate("main",{

/***/ "./src/components/navigationBar.js":
/*!*****************************************!*\
  !*** ./src/components/navigationBar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../style/navigationBar.css */ \"./src/style/navigationBar.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = function (_Component) {\n  _inherits(NavigationBar, _Component);\n\n  function NavigationBar() {\n    _classCallCheck(this, NavigationBar);\n\n    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));\n  }\n\n  _createClass(NavigationBar, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'header',\n        { 'class': 'navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar' },\n        _react2.default.createElement(\n          'div',\n          { className: 'container mx-auto d-flex' },\n          _react2.default.createElement(\n            'ul',\n            { 'class': 'navbar-nav bd-navbar-nav flex-row mx-auto' },\n            _react2.default.createElement(\n              'li',\n              { 'class': 'nav-item my-auto mr-5' },\n              'Home'\n            ),\n            _react2.default.createElement(\n              'li',\n              { 'class': 'nav-item my-auto mx-5' },\n              'Overview'\n            ),\n            _react2.default.createElement(\n              'li',\n              { 'class': 'nav-item my-auto mx-5' },\n              'Instruments'\n            ),\n            _react2.default.createElement(\n              'li',\n              { 'class': 'nav-item my-auto mx-5' },\n              'Applications'\n            ),\n            _react2.default.createElement(\n              'li',\n              { 'class': 'nav-item my-auto ml-5 dropdown' },\n              _react2.default.createElement(\n                'a',\n                { 'class': 'nav-item nav-link dropdown-toggle mr-md-2', href: '#',\n                  'data-toggle': 'dropdown', 'aria-haspopup': 'true' },\n                'More'\n              ),\n              _react2.default.createElement(\n                'div',\n                { 'class': 'dropdown-menu dropdown-menu-right' },\n                _react2.default.createElement(\n                  'a',\n                  { 'class': 'dropdown-item' },\n                  '1'\n                ),\n                _react2.default.createElement(\n                  'a',\n                  { 'class': 'dropdown-item' },\n                  '2'\n                ),\n                _react2.default.createElement(\n                  'a',\n                  { 'class': 'dropdown-item' },\n                  '3'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(_react.Component);\n\nexports.default = NavigationBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanM/YzhhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGUvbmF2aWdhdGlvbkJhci5jc3MnXG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IGJkLW5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZC1mbGV4XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3cgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBteS1hdXRvIG1yLTVcIj5Ib21lPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+T3ZlcnZpZXc8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5JbnN0cnVtZW50czwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkFwcGxpY2F0aW9uczwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIG15LWF1dG8gbWwtNSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIG1yLW1kLTJcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+MTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjI8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj4zPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSkE7QUFMQTtBQURBO0FBREE7QUFxQkE7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navigationBar.js\n");

/***/ })

})