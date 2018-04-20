webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\nvar _ParallumeBeads = __webpack_require__(/*! ../images/Parallume & PSTI/Parallume Beads.png */ \"./src/images/Parallume & PSTI/Parallume Beads.png\");\n\nvar _ParallumeBeads2 = _interopRequireDefault(_ParallumeBeads);\n\nvar _BeadLocalizationSlide = __webpack_require__(/*! ../images/Parallume & PSTI/Bead Localization Slide.png */ \"./src/images/Parallume & PSTI/Bead Localization Slide.png\");\n\nvar _BeadLocalizationSlide2 = _interopRequireDefault(_BeadLocalizationSlide);\n\nvar _ParallumeLogo_withTagline = __webpack_require__(/*! ../images/Parallume & PSTI/Parallume Logo_with tagline 4-16-18.png */ \"./src/images/Parallume & PSTI/Parallume Logo_with tagline 4-16-18.png\");\n\nvar _ParallumeLogo_withTagline2 = _interopRequireDefault(_ParallumeLogo_withTagline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto mr-5\">Home</li>\n    // <li className=\"nav-item my-auto mx-5\">Overview</li>\n    // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n    // <li className=\"nav-item my-auto mx-5\">Applications</li>\n    // <li className=\"nav-item my-auto ml-5 dropdown\">\n    //   <a className=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\"\n    //     data-toggle=\"dropdown\" aria-haspopup=\"true\">\n    //     More</a>\n    //   <div className=\"dropdown-menu dropdown-menu-right\">\n    //     <a className=\"dropdown-item\">1</a>\n    //     <a className=\"dropdown-item\">2</a>\n    //     <a className=\"dropdown-item\">3</a>\n    //   </div>\n    // </li>\n\n\n    value: function render() {\n      return (\n        // <nav className=\"navbar navbar-expand navbar-light flex-row bd-navbar py-0\">\n        //   <div className=\"container mx-auto d-flex\">\n        //     <Tabs className=\"navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1\">\n        //       <TabLink to=\"tab1\" className=\"nav-item my-auto mr-5\">Home</TabLink>\n        //       <TabLink to=\"tab2\" className=\"nav-item my-auto mx-5\">Our Technology</TabLink>\n        //       <TabLink to=\"tab3\" className=\"nav-item my-auto mx-5\">Our Team</TabLink>\n        //       <TabLink to=\"tab4\" className=\"nav-item my-auto mx-5\">Contact Us</TabLink>\n        //\n        //       <TabContent for=\"tab1\">\n        //         Content for tab1\n        //       </TabContent>\n        //       <TabContent for=\"tab2\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //       <TabContent for=\"tab3\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //       <TabContent for=\"tab4\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //     </Tabs>\n        //\n        //\n        //\n        //   </div>\n        // </nav>\n\n        _react2.default.createElement(\n          _reactTabsRedux.Tabs,\n          { className: \"tabs tabs-1\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"navbar container\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab1\", className: \"btn pl-0\" },\n              \"Home\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab2\", className: \"btn\" },\n              \"Our Technology\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab3\", className: \"btn\" },\n              \"Our Team\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab4\", className: \"btn pr-0\" },\n              \"Contact Us\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"contents container\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab1\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"col-12 py-5\" },\n                _react2.default.createElement(\"img\", { className: \"mx-auto py-5\", src: _ParallumeLogo_withTagline2.default, id: \"Logo_With_Tagline\" })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"row py-3\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-lg-auto col-10 mx-auto\" },\n                  _react2.default.createElement(\"img\", { className: \"mx-auto\", src: _ParallumeBeads2.default, id: \"Parallume_Bead\" })\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-lg-4\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"pl-lg-3 py-5\" },\n                    _react2.default.createElement(\n                      \"h1\",\n                      null,\n                      \"Our Mission\"\n                    ),\n                    _react2.default.createElement(\n                      \"h2\",\n                      null,\n                      \"Bringing color to the world of molecular diagnostics\"\n                    ),\n                    _react2.default.createElement(\n                      \"p\",\n                      null,\n                      \"Parallume Inc. is a multiplex assay platform biotechnology company aimed at revolutionizing the field of molecular diagnostics for life-science researchers in academic, industry, and clinical settings.\"\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab2\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab2 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"\\xAF\\\\_(\\u30C4)_/\\xAF\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab3\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab3 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"(\\u256F\\xB0\\u25A1\\xB0\\uFF09\\u256F\\uFE35 \\u253B\\u2501\\u253B)\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab4\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab4 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"\\uD83D\\uDE2F\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    naviBarItems: state.naviBarItems\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuXG5pbXBvcnQgUGFyYWxsdW1lX0JlYWQgZnJvbSBcIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL1BhcmFsbHVtZSBCZWFkcy5wbmdcIjtcbmltcG9ydCBCZWFkX0xvY2FsX1NsaWRlIGZyb20gXCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIjtcbmltcG9ydCBMb2dvX1dpdGhfVGFnbGluZSBmcm9tIFwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvUGFyYWxsdW1lIExvZ29fd2l0aCB0YWdsaW5lIDQtMTYtMTgucG5nXCI7XG5cbmNsYXNzIE5hdmlCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyByZW5kZXJMaXN0KCkge1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzLm5hdmlCYXJJdGVtcy5tYXAoaXRlbSA9PiB7XG4gIC8vICAgICByZXR1cm4oXG4gIC8vICAgICAgIDxsaVxuICAvLyAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAvLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2VsZWN0TmF2aUJhckl0ZW0oaXRlbSl9XG4gIC8vICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCJcbiAgLy8gICAgICAgPlxuICAvLyAgICAgICAgIHtpdGVtLm5hbWV9XG4gIC8vICAgICAgIDwvbGk+XG4gIC8vICAgICApO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXItNVwiPkhvbWU8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+T3ZlcnZpZXc8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+SW5zdHJ1bWVudHM8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+QXBwbGljYXRpb25zPC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbWwtNSBkcm9wZG93blwiPlxuICAvLyAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBtci1tZC0yXCIgaHJlZj1cIiNcIlxuICAvLyAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XG4gIC8vICAgICBNb3JlPC9hPlxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MTwvYT5cbiAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4yPC9hPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjM8L2E+XG4gIC8vICAgPC9kaXY+XG4gIC8vIDwvbGk+XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICAvLyA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBmbGV4LXJvdyBiZC1uYXZiYXIgcHktMFwiPlxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZC1mbGV4XCI+XG4gICAgICAgIC8vICAgICA8VGFicyBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3cgbXgtYXV0byB0YWJzIHRhYnMtMVwiPlxuICAgICAgICAvLyAgICAgICA8VGFiTGluayB0bz1cInRhYjFcIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG1yLTVcIj5Ib21lPC9UYWJMaW5rPlxuICAgICAgICAvLyAgICAgICA8VGFiTGluayB0bz1cInRhYjJcIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdXIgVGVjaG5vbG9neTwvVGFiTGluaz5cbiAgICAgICAgLy8gICAgICAgPFRhYkxpbmsgdG89XCJ0YWIzXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+T3VyIFRlYW08L1RhYkxpbms+XG4gICAgICAgIC8vICAgICAgIDxUYWJMaW5rIHRvPVwidGFiNFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkNvbnRhY3QgVXM8L1RhYkxpbms+XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjFcIj5cbiAgICAgICAgLy8gICAgICAgICBDb250ZW50IGZvciB0YWIxXG4gICAgICAgIC8vICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgLy8gICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMlwiPlxuICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvQmVhZCBMb2NhbGl6YXRpb24gU2xpZGUucG5nXCIvPlxuICAgICAgICAvLyAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgIC8vICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjNcIj5cbiAgICAgICAgLy8gICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL0JlYWQgTG9jYWxpemF0aW9uIFNsaWRlLnBuZ1wiLz5cbiAgICAgICAgLy8gICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAvLyAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWI0XCI+XG4gICAgICAgIC8vICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIi8+XG4gICAgICAgIC8vICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgLy8gICAgIDwvVGFicz5cbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICA8L2Rpdj5cbiAgICAgICAgLy8gPC9uYXY+XG5cbiAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwidGFicyB0YWJzLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMVwiIGNsYXNzTmFtZT1cImJ0biBwbC0wXCI+SG9tZTwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjJcIiBjbGFzc05hbWU9XCJidG5cIj5PdXIgVGVjaG5vbG9neTwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjNcIiBjbGFzc05hbWU9XCJidG5cIj5PdXIgVGVhbTwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjRcIiBjbGFzc05hbWU9XCJidG4gcHItMFwiPkNvbnRhY3QgVXM8L1RhYkxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cyBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIxXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBweS01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXgtYXV0byBweS01XCIgc3JjPXtMb2dvX1dpdGhfVGFnbGluZX0gaWQ9XCJMb2dvX1dpdGhfVGFnbGluZVwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvIGNvbC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJteC1hdXRvXCIgc3JjPXtQYXJhbGx1bWVfQmVhZH0gaWQ9XCJQYXJhbGx1bWVfQmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC1sZy0zIHB5LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5PdXIgTWlzc2lvbjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+QnJpbmdpbmcgY29sb3IgdG8gdGhlIHdvcmxkIG9mIG1vbGVjdWxhciBkaWFnbm9zdGljczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyYWxsdW1lIEluYy4gaXMgYSBtdWx0aXBsZXggYXNzYXkgcGxhdGZvcm0gYmlvdGVjaG5vbG9neSBjb21wYW55IGFpbWVkIGF0IHJldm9sdXRpb25pemluZyB0aGUgZmllbGQgb2YgbW9sZWN1bGFyIGRpYWdub3N0aWNzIGZvciBsaWZlLXNjaWVuY2UgcmVzZWFyY2hlcnMgaW4gYWNhZGVtaWMsIGluZHVzdHJ5LCBhbmQgY2xpbmljYWwgc2V0dGluZ3MuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjIgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+wq9cXF8o44OEKV8vwq88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGFiMyBjb250ZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj4o4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLspPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjQgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+8J+YrzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYnM+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpQmFySXRlbXM6IHN0YXRlLm5hdmlCYXJJdGVtc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHNlbGVjdE5hdmlCYXJJdGVtIDogc2VsZWN0TmF2aUJhckl0ZW0gfSwgKGRpc3BhdGNoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlCYXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBSkE7QUFKQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUE1QkE7QUFSQTtBQTVCQTtBQXVFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})