webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\nvar _content_home = __webpack_require__(/*! ./content_home */ \"./src/components/content_home.js\");\n\nvar _content_home2 = _interopRequireDefault(_content_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto ml-5 dropdown\">\n    //   <a className=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\"\n    //     data-toggle=\"dropdown\" aria-haspopup=\"true\">\n    //     More</a>\n    //   <div className=\"dropdown-menu dropdown-menu-right\">\n    //     <a className=\"dropdown-item\">1</a>\n    //     <a className=\"dropdown-item\">2</a>\n    //     <a className=\"dropdown-item\">3</a>\n    //   </div>\n    // </li>\n\n\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        _reactTabsRedux.Tabs,\n        { className: \"tabs tabs-1\", handleSelect: function handleSelect(selectedTab) {\n            return _this2.props.changeSelectedTab(selectedTab);\n          } },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"navbar white-div sticky-top\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"container\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"home\", className: \"btn pl-0\" },\n              \"Home\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"ourTechnology\", className: \"btn\" },\n              \"Our Technology\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"ourTeam\", className: \"btn\" },\n              \"Our Team\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"contactUs\", className: \"btn pr-0\" },\n              \"Contact Us\"\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"contents\" },\n          _react2.default.createElement(\n            _reactTabsRedux.TabContent,\n            { \"for\": \"home\" },\n            _react2.default.createElement(_content_home2.default, null)\n          ),\n          _react2.default.createElement(\n            _reactTabsRedux.TabContent,\n            { \"for\": \"ourTechnology\" },\n            _react2.default.createElement(\n              \"h2\",\n              null,\n              \"Tab2 content\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              null,\n              \"\\xAF\\\\_(\\u30C4)_/\\xAF\"\n            )\n          ),\n          _react2.default.createElement(\n            _reactTabsRedux.TabContent,\n            { \"for\": \"ourTeam\" },\n            _react2.default.createElement(\n              \"h2\",\n              null,\n              \"Tab3 content\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              null,\n              \"(\\u256F\\xB0\\u25A1\\xB0\\uFF09\\u256F\\uFE35 \\u253B\\u2501\\u253B)\"\n            )\n          ),\n          _react2.default.createElement(\n            _reactTabsRedux.TabContent,\n            { \"for\": \"contactUs\" },\n            _react2.default.createElement(\n              \"h2\",\n              null,\n              \"Tab4 content\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              null,\n              \"\\uD83D\\uDE2F\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    activeTab: state.activeTab\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ changeSelectedTab: _index2.default }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuXG5pbXBvcnQgQ29udGVudEhvbWUgZnJvbSBcIi4vY29udGVudF9ob21lXCI7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRUYWIgZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIlxuXG5jbGFzcyBOYXZpQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gcmVuZGVyTGlzdCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcy5uYXZpQmFySXRlbXMubWFwKGl0ZW0gPT4ge1xuICAvLyAgICAgcmV0dXJuKFxuICAvLyAgICAgICA8bGlcbiAgLy8gICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNlbGVjdE5hdmlCYXJJdGVtKGl0ZW0pfVxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICB7aXRlbS5uYW1lfVxuICAvLyAgICAgICA8L2xpPlxuICAvLyAgICAgKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG1sLTUgZHJvcGRvd25cIj5cbiAgLy8gICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGluayBkcm9wZG93bi10b2dnbGUgbXItbWQtMlwiIGhyZWY9XCIjXCJcbiAgLy8gICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxuICAvLyAgICAgTW9yZTwvYT5cbiAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjE8L2E+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MjwvYT5cbiAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4zPC9hPlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2xpPlxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwidGFicyB0YWJzLTFcIiBoYW5kbGVTZWxlY3Q9eyhzZWxlY3RlZFRhYikgPT4gdGhpcy5wcm9wcy5jaGFuZ2VTZWxlY3RlZFRhYihzZWxlY3RlZFRhYil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIHdoaXRlLWRpdiBzdGlja3ktdG9wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwiaG9tZVwiIGNsYXNzTmFtZT1cImJ0biBwbC0wXCI+SG9tZTwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cIm91clRlY2hub2xvZ3lcIiBjbGFzc05hbWU9XCJidG5cIj5PdXIgVGVjaG5vbG9neTwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cIm91clRlYW1cIiBjbGFzc05hbWU9XCJidG5cIj5PdXIgVGVhbTwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cImNvbnRhY3RVc1wiIGNsYXNzTmFtZT1cImJ0biBwci0wXCI+Q29udGFjdCBVczwvVGFiTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50SG9tZSAvPlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBmb3I9XCJvdXJUZWNobm9sb2d5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UYWIyIGNvbnRlbnQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PsKvXFxfKOODhClfL8KvPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cIm91clRlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjMgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+KOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7KTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBmb3I9XCJjb250YWN0VXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjQgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+8J+YrzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYnM+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVUYWI6IHN0YXRlLmFjdGl2ZVRhYlxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGNoYW5nZVNlbGVjdGVkVGFiIDogY2hhbmdlU2VsZWN0ZWRUYWIgfSwgKGRpc3BhdGNoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlCYXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBWkE7QUFUQTtBQTRCQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})