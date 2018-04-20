webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto mr-5\">Home</li>\n    // <li className=\"nav-item my-auto mx-5\">Overview</li>\n    // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n    // <li className=\"nav-item my-auto mx-5\">Applications</li>\n\n\n    value: function render() {\n      return _react2.default.createElement(\n        \"nav\",\n        { className: \"navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar py-0\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container mx-auto d-flex\" },\n          _react2.default.createElement(\n            _reactTabsRedux.Tabs,\n            { className: \"navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab1\", className: \"nav-item my-auto mr-5\" },\n              \"Tab1\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab2\", className: \"nav-item my-auto mx-5\" },\n              \"Tab2\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab3\", className: \"nav-item my-auto mx-5\" },\n              \"Tab3\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab4\", className: \"nav-item my-auto mx-5\" },\n              \"Tab4\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab1\" },\n              _react2.default.createElement(\"img\", { src: \"../images/Parallume & PSTI/Bead Localization Slide.png\" })\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab2\" },\n              \"/* content for tab #2 */\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab3\" },\n              \"/* content for tab #3 */\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab4\" },\n              \"/* content for tab #4 */\"\n            )\n          ),\n          _react2.default.createElement(\n            \"li\",\n            { className: \"nav-item my-auto ml-5 dropdown\" },\n            _react2.default.createElement(\n              \"a\",\n              { className: \"nav-item nav-link dropdown-toggle mr-md-2\", href: \"#\",\n                \"data-toggle\": \"dropdown\", \"aria-haspopup\": \"true\" },\n              \"More\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"dropdown-menu dropdown-menu-right\" },\n              _react2.default.createElement(\n                \"a\",\n                { className: \"dropdown-item\" },\n                \"1\"\n              ),\n              _react2.default.createElement(\n                \"a\",\n                { className: \"dropdown-item\" },\n                \"2\"\n              ),\n              _react2.default.createElement(\n                \"a\",\n                { className: \"dropdown-item\" },\n                \"3\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    naviBarItems: state.naviBarItems\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuXG5jbGFzcyBOYXZpQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gcmVuZGVyTGlzdCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcy5uYXZpQmFySXRlbXMubWFwKGl0ZW0gPT4ge1xuICAvLyAgICAgcmV0dXJuKFxuICAvLyAgICAgICA8bGlcbiAgLy8gICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNlbGVjdE5hdmlCYXJJdGVtKGl0ZW0pfVxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICB7aXRlbS5uYW1lfVxuICAvLyAgICAgICA8L2xpPlxuICAvLyAgICAgKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG1yLTVcIj5Ib21lPC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPk92ZXJ2aWV3PC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkluc3RydW1lbnRzPC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkFwcGxpY2F0aW9uczwvbGk+XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IGJkLW5hdmJhciBweS0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBkLWZsZXhcIj5cbiAgICAgICAgICAgIDxUYWJzIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgYmQtbmF2YmFyLW5hdiBmbGV4LXJvdyBteC1hdXRvIHRhYnMgdGFicy0xXCI+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXItNVwiPlRhYjE8L1RhYkxpbms+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMlwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPlRhYjI8L1RhYkxpbms+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiM1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPlRhYjM8L1RhYkxpbms+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiNFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPlRhYjQ8L1RhYkxpbms+XG5cbiAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvQmVhZCBMb2NhbGl6YXRpb24gU2xpZGUucG5nXCIvPlxuICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjJcIj4vKiBjb250ZW50IGZvciB0YWIgIzIgKi88L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjNcIj4vKiBjb250ZW50IGZvciB0YWIgIzMgKi88L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjRcIj4vKiBjb250ZW50IGZvciB0YWIgIzQgKi88L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICA8L1RhYnM+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbWwtNSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBtci1tZC0yXCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICBNb3JlPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4yPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjM8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpQmFySXRlbXM6IHN0YXRlLm5hdmlCYXJJdGVtc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNlbGVjdE5hdmlCYXJJdGVtIDogc2VsZWN0TmF2aUJhckl0ZW0gfSwgKGRpc3BhdGNoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlCYXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFKQTtBQWZBO0FBREE7QUE4QkE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})