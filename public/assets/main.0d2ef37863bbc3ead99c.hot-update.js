webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\nvar _ParallumeBeads = __webpack_require__(/*! ../images/Parallume & PSTI/Parallume Beads.png */ \"./src/images/Parallume & PSTI/Parallume Beads.png\");\n\nvar _ParallumeBeads2 = _interopRequireDefault(_ParallumeBeads);\n\nvar _BeadLocalizationSlide = __webpack_require__(/*! ../images/Parallume & PSTI/Bead Localization Slide.png */ \"./src/images/Parallume & PSTI/Bead Localization Slide.png\");\n\nvar _BeadLocalizationSlide2 = _interopRequireDefault(_BeadLocalizationSlide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto mr-5\">Home</li>\n    // <li className=\"nav-item my-auto mx-5\">Overview</li>\n    // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n    // <li className=\"nav-item my-auto mx-5\">Applications</li>\n    // <li className=\"nav-item my-auto ml-5 dropdown\">\n    //   <a className=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\"\n    //     data-toggle=\"dropdown\" aria-haspopup=\"true\">\n    //     More</a>\n    //   <div className=\"dropdown-menu dropdown-menu-right\">\n    //     <a className=\"dropdown-item\">1</a>\n    //     <a className=\"dropdown-item\">2</a>\n    //     <a className=\"dropdown-item\">3</a>\n    //   </div>\n    // </li>\n\n\n    value: function render() {\n      return (\n        // <nav className=\"navbar navbar-expand navbar-light flex-row bd-navbar py-0\">\n        //   <div className=\"container mx-auto d-flex\">\n        //     <Tabs className=\"navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1\">\n        //       <TabLink to=\"tab1\" className=\"nav-item my-auto mr-5\">Home</TabLink>\n        //       <TabLink to=\"tab2\" className=\"nav-item my-auto mx-5\">Our Technology</TabLink>\n        //       <TabLink to=\"tab3\" className=\"nav-item my-auto mx-5\">Our Team</TabLink>\n        //       <TabLink to=\"tab4\" className=\"nav-item my-auto mx-5\">Contact Us</TabLink>\n        //\n        //       <TabContent for=\"tab1\">\n        //         Content for tab1\n        //       </TabContent>\n        //       <TabContent for=\"tab2\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //       <TabContent for=\"tab3\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //       <TabContent for=\"tab4\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //     </Tabs>\n        //\n        //\n        //\n        //   </div>\n        // </nav>\n\n        _react2.default.createElement(\n          _reactTabsRedux.Tabs,\n          { className: \"tabs tabs-1\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"navbar container\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab1\", className: \"btn pl-0\" },\n              \"Home\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab2\", className: \"btn\" },\n              \"Our Technology\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab3\", className: \"btn\" },\n              \"Our Team\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab4\", className: \"btn pr-0\" },\n              \"Contact Us\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"contents container\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab1\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"row py-3\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-auto\" },\n                  _react2.default.createElement(\n                    \"span\",\n                    null,\n                    _react2.default.createElement(\"img\", { src: _ParallumeBeads2.default })\n                  )\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col\" },\n                  _react2.default.createElement(\n                    \"h1\",\n                    null,\n                    \"Our Mission\"\n                  ),\n                  _react2.default.createElement(\n                    \"h2\",\n                    null,\n                    \"Bringing color to the world of molecular diagnostics\"\n                  ),\n                  _react2.default.createElement(\n                    \"p\",\n                    null,\n                    \"Parallume Inc. is a multiplex assay platform biotechnology company aimed at revolutionizing the field of molecular diagnostics for life-science researchers in academic, industry, and clinical settings.\"\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab2\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab2 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"\\xAF\\\\_(\\u30C4)_/\\xAF\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab3\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab3 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"(\\u256F\\xB0\\u25A1\\xB0\\uFF09\\u256F\\uFE35 \\u253B\\u2501\\u253B)\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab4\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab4 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"\\uD83D\\uDE2F\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    naviBarItems: state.naviBarItems\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuXG5pbXBvcnQgUGFyYWxsdW1lX0JlYWQgZnJvbSBcIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL1BhcmFsbHVtZSBCZWFkcy5wbmdcIjtcbmltcG9ydCBCZWFkX0xvY2FsX1NsaWRlIGZyb20gXCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIlxuXG5jbGFzcyBOYXZpQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gcmVuZGVyTGlzdCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcy5uYXZpQmFySXRlbXMubWFwKGl0ZW0gPT4ge1xuICAvLyAgICAgcmV0dXJuKFxuICAvLyAgICAgICA8bGlcbiAgLy8gICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNlbGVjdE5hdmlCYXJJdGVtKGl0ZW0pfVxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICB7aXRlbS5uYW1lfVxuICAvLyAgICAgICA8L2xpPlxuICAvLyAgICAgKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG1yLTVcIj5Ib21lPC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPk92ZXJ2aWV3PC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkluc3RydW1lbnRzPC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkFwcGxpY2F0aW9uczwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG1sLTUgZHJvcGRvd25cIj5cbiAgLy8gICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGluayBkcm9wZG93bi10b2dnbGUgbXItbWQtMlwiIGhyZWY9XCIjXCJcbiAgLy8gICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxuICAvLyAgICAgTW9yZTwvYT5cbiAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjE8L2E+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MjwvYT5cbiAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4zPC9hPlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2xpPlxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgLy8gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItbGlnaHQgZmxleC1yb3cgYmQtbmF2YmFyIHB5LTBcIj5cbiAgICAgICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGQtZmxleFwiPlxuICAgICAgICAvLyAgICAgPFRhYnMgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBiZC1uYXZiYXItbmF2IGZsZXgtcm93IG14LWF1dG8gdGFicyB0YWJzLTFcIj5cbiAgICAgICAgLy8gICAgICAgPFRhYkxpbmsgdG89XCJ0YWIxXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtci01XCI+SG9tZTwvVGFiTGluaz5cbiAgICAgICAgLy8gICAgICAgPFRhYkxpbmsgdG89XCJ0YWIyXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+T3VyIFRlY2hub2xvZ3k8L1RhYkxpbms+XG4gICAgICAgIC8vICAgICAgIDxUYWJMaW5rIHRvPVwidGFiM1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPk91ciBUZWFtPC9UYWJMaW5rPlxuICAgICAgICAvLyAgICAgICA8VGFiTGluayB0bz1cInRhYjRcIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5Db250YWN0IFVzPC9UYWJMaW5rPlxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIxXCI+XG4gICAgICAgIC8vICAgICAgICAgQ29udGVudCBmb3IgdGFiMVxuICAgICAgICAvLyAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgIC8vICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjJcIj5cbiAgICAgICAgLy8gICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL0JlYWQgTG9jYWxpemF0aW9uIFNsaWRlLnBuZ1wiLz5cbiAgICAgICAgLy8gICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAvLyAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIzXCI+XG4gICAgICAgIC8vICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIi8+XG4gICAgICAgIC8vICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgLy8gICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiNFwiPlxuICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvQmVhZCBMb2NhbGl6YXRpb24gU2xpZGUucG5nXCIvPlxuICAgICAgICAvLyAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgIC8vICAgICA8L1RhYnM+XG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vIDwvbmF2PlxuXG4gICAgICAgIDxUYWJzIGNsYXNzTmFtZT1cInRhYnMgdGFicy0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjFcIiBjbGFzc05hbWU9XCJidG4gcGwtMFwiPkhvbWU8L1RhYkxpbms+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdG89XCJ0YWIyXCIgY2xhc3NOYW1lPVwiYnRuXCI+T3VyIFRlY2hub2xvZ3k8L1RhYkxpbms+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdG89XCJ0YWIzXCIgY2xhc3NOYW1lPVwiYnRuXCI+T3VyIFRlYW08L1RhYkxpbms+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdG89XCJ0YWI0XCIgY2xhc3NOYW1lPVwiYnRuIHByLTBcIj5Db250YWN0IFVzPC9UYWJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHMgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9e1BhcmFsbHVtZV9CZWFkfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPk91ciBNaXNzaW9uPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+QnJpbmdpbmcgY29sb3IgdG8gdGhlIHdvcmxkIG9mIG1vbGVjdWxhciBkaWFnbm9zdGljczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXJhbGx1bWUgSW5jLiBpcyBhIG11bHRpcGxleCBhc3NheSBwbGF0Zm9ybSBiaW90ZWNobm9sb2d5IGNvbXBhbnkgYWltZWQgYXQgcmV2b2x1dGlvbml6aW5nIHRoZSBmaWVsZCBvZiBtb2xlY3VsYXIgZGlhZ25vc3RpY3MgZm9yIGxpZmUtc2NpZW5jZSByZXNlYXJjaGVycyBpbiBhY2FkZW1pYywgaW5kdXN0cnksIGFuZCBjbGluaWNhbCBzZXR0aW5ncy5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjIgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+wq9cXF8o44OEKV8vwq88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGFiMyBjb250ZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj4o4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLspPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjQgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+8J+YrzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYnM+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpQmFySXRlbXM6IHN0YXRlLm5hdmlCYXJJdGVtc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNlbGVjdE5hdmlCYXJJdGVtIDogc2VsZWN0TmF2aUJhckl0ZW0gfSwgKGRpc3BhdGNoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlCYXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFKQTtBQURBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBdkJBO0FBUkE7QUE1QkE7QUFrRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})