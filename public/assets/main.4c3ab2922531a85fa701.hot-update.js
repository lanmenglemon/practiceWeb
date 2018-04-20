webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto mr-5\">Home</li>\n    // <li className=\"nav-item my-auto mx-5\">Overview</li>\n    // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n    // <li className=\"nav-item my-auto mx-5\">Applications</li>\n\n\n    value: function render() {\n      return _react2.default.createElement(\n        \"nav\",\n        { className: \"navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar py-0\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container mx-auto d-flex\" },\n          _react2.default.createElement(\n            Tabs,\n            { className: \"navbar-nav bd-navbar-nav flex-row mx-auto\" },\n            _react2.default.createElement(\n              TabLink,\n              { to: \"tab1\" },\n              \"Tab1\"\n            ),\n            _react2.default.createElement(\n              TabLink,\n              { to: \"tab2\" },\n              \"Tab2\"\n            ),\n            _react2.default.createElement(\n              TabLink,\n              { to: \"tab3\" },\n              \"Tab3\"\n            ),\n            _react2.default.createElement(\n              TabContent,\n              { \"for\": \"tab1\" },\n              \"/* content for tab #1 */\"\n            ),\n            _react2.default.createElement(\n              TabContent,\n              { \"for\": \"tab2\" },\n              \"/* content for tab #2 */\"\n            ),\n            _react2.default.createElement(\n              TabContent,\n              { \"for\": \"tab3\" },\n              \"/* content for tab #3 */\"\n            )\n          ),\n          _react2.default.createElement(\n            \"li\",\n            { className: \"nav-item my-auto ml-5 dropdown\" },\n            _react2.default.createElement(\n              \"a\",\n              { className: \"nav-item nav-link dropdown-toggle mr-md-2\", href: \"#\",\n                \"data-toggle\": \"dropdown\", \"aria-haspopup\": \"true\" },\n              \"More\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"dropdown-menu dropdown-menu-right\" },\n              _react2.default.createElement(\n                \"a\",\n                { className: \"dropdown-item\" },\n                \"1\"\n              ),\n              _react2.default.createElement(\n                \"a\",\n                { className: \"dropdown-item\" },\n                \"2\"\n              ),\n              _react2.default.createElement(\n                \"a\",\n                { className: \"dropdown-item\" },\n                \"3\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    naviBarItems: state.naviBarItems\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuY2xhc3MgTmF2aUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHJlbmRlckxpc3QoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvcHMubmF2aUJhckl0ZW1zLm1hcChpdGVtID0+IHtcbiAgLy8gICAgIHJldHVybihcbiAgLy8gICAgICAgPGxpXG4gIC8vICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gIC8vICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZWxlY3ROYXZpQmFySXRlbShpdGVtKX1cbiAgLy8gICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIlxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAge2l0ZW0ubmFtZX1cbiAgLy8gICAgICAgPC9saT5cbiAgLy8gICAgICk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtci01XCI+SG9tZTwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdmVydmlldzwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5JbnN0cnVtZW50czwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5BcHBsaWNhdGlvbnM8L2xpPlxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBiZC1uYXZiYXIgcHktMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZC1mbGV4XCI+XG4gICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3cgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjFcIj5UYWIxPC9UYWJMaW5rPlxuICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjJcIj5UYWIyPC9UYWJMaW5rPlxuICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjNcIj5UYWIzPC9UYWJMaW5rPlxuXG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjFcIj4vKiBjb250ZW50IGZvciB0YWIgIzEgKi88L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjJcIj4vKiBjb250ZW50IGZvciB0YWIgIzIgKi88L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjNcIj4vKiBjb250ZW50IGZvciB0YWIgIzMgKi88L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICA8L1RhYnM+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbWwtNSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBtci1tZC0yXCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICBNb3JlPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4yPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjM8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpQmFySXRlbXM6IHN0YXRlLm5hdmlCYXJJdGVtc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNlbGVjdE5hdmlCYXJJdGVtIDogc2VsZWN0TmF2aUJhckl0ZW0gfSwgKGRpc3BhdGNoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlCYXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFKQTtBQVhBO0FBREE7QUEwQkE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})