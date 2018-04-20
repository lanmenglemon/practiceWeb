webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\nvar _ParallumeBeads = __webpack_require__(/*! ../images/Parallume & PSTI/Parallume Beads.png */ \"./src/images/Parallume & PSTI/Parallume Beads.png\");\n\nvar _ParallumeBeads2 = _interopRequireDefault(_ParallumeBeads);\n\nvar _BeadLocalizationSlide = __webpack_require__(/*! ../images/Parallume & PSTI/Bead Localization Slide.png */ \"./src/images/Parallume & PSTI/Bead Localization Slide.png\");\n\nvar _BeadLocalizationSlide2 = _interopRequireDefault(_BeadLocalizationSlide);\n\nvar _ParallumeLogo_withTagline = __webpack_require__(/*! ../images/Parallume & PSTI/Parallume Logo_with tagline 4-16-18.png */ \"./src/images/Parallume & PSTI/Parallume Logo_with tagline 4-16-18.png\");\n\nvar _ParallumeLogo_withTagline2 = _interopRequireDefault(_ParallumeLogo_withTagline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto mr-5\">Home</li>\n    // <li className=\"nav-item my-auto mx-5\">Overview</li>\n    // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n    // <li className=\"nav-item my-auto mx-5\">Applications</li>\n    // <li className=\"nav-item my-auto ml-5 dropdown\">\n    //   <a className=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\"\n    //     data-toggle=\"dropdown\" aria-haspopup=\"true\">\n    //     More</a>\n    //   <div className=\"dropdown-menu dropdown-menu-right\">\n    //     <a className=\"dropdown-item\">1</a>\n    //     <a className=\"dropdown-item\">2</a>\n    //     <a className=\"dropdown-item\">3</a>\n    //   </div>\n    // </li>\n\n\n    value: function render() {\n      return (\n        // <nav className=\"navbar navbar-expand navbar-light flex-row bd-navbar py-0\">\n        //   <div className=\"container mx-auto d-flex\">\n        //     <Tabs className=\"navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1\">\n        //       <TabLink to=\"tab1\" className=\"nav-item my-auto mr-5\">Home</TabLink>\n        //       <TabLink to=\"tab2\" className=\"nav-item my-auto mx-5\">Our Technology</TabLink>\n        //       <TabLink to=\"tab3\" className=\"nav-item my-auto mx-5\">Our Team</TabLink>\n        //       <TabLink to=\"tab4\" className=\"nav-item my-auto mx-5\">Contact Us</TabLink>\n        //\n        //       <TabContent for=\"tab1\">\n        //         Content for tab1\n        //       </TabContent>\n        //       <TabContent for=\"tab2\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //       <TabContent for=\"tab3\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //       <TabContent for=\"tab4\">\n        //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n        //       </TabContent>\n        //     </Tabs>\n        //\n        //\n        //\n        //   </div>\n        // </nav>\n\n        _react2.default.createElement(\n          _reactTabsRedux.Tabs,\n          { className: \"tabs tabs-1\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"navbar container sticky-top\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab1\", className: \"btn pl-0\" },\n              \"Home\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab2\", className: \"btn\" },\n              \"Our Technology\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab3\", className: \"btn\" },\n              \"Our Team\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab4\", className: \"btn pr-0\" },\n              \"Contact Us\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"contents\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab1\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"container\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"col-12 py-5\" },\n                  _react2.default.createElement(\"img\", { className: \"mx-auto py-5\", src: _ParallumeLogo_withTagline2.default, id: \"Logo_With_Tagline\" })\n                )\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"green-div\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"container\" },\n                  _react2.default.createElement(\n                    \"div\",\n                    { className: \"row py-3\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"col-lg-6 col-10 mx-auto mx-lg-0\" },\n                      _react2.default.createElement(\"img\", { className: \"mx-auto\", src: _ParallumeBeads2.default, id: \"Parallume_Bead\" })\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"col-lg-6\" },\n                      _react2.default.createElement(\n                        \"div\",\n                        { className: \"ml-lg-5 pl-lg-5 py-5 my-5 \" },\n                        _react2.default.createElement(\n                          \"h1\",\n                          null,\n                          \"Our Mission\"\n                        ),\n                        _react2.default.createElement(\n                          \"h2\",\n                          null,\n                          \"Bringing color to the world of molecular diagnostics\"\n                        ),\n                        _react2.default.createElement(\n                          \"p\",\n                          null,\n                          \"Parallume Inc. is a multiplex assay platform biotechnology company aimed at revolutionizing the field of molecular diagnostics for life-science researchers in academic, industry, and clinical settings.\"\n                        )\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab2\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab2 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"\\xAF\\\\_(\\u30C4)_/\\xAF\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab3\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab3 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"(\\u256F\\xB0\\u25A1\\xB0\\uFF09\\u256F\\uFE35 \\u253B\\u2501\\u253B)\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab4\" },\n              _react2.default.createElement(\n                \"h2\",\n                null,\n                \"Tab4 content\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                null,\n                \"\\uD83D\\uDE2F\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    naviBarItems: state.naviBarItems\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuXG5pbXBvcnQgUGFyYWxsdW1lX0JlYWQgZnJvbSBcIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL1BhcmFsbHVtZSBCZWFkcy5wbmdcIjtcbmltcG9ydCBCZWFkX0xvY2FsX1NsaWRlIGZyb20gXCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIjtcbmltcG9ydCBMb2dvX1dpdGhfVGFnbGluZSBmcm9tIFwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvUGFyYWxsdW1lIExvZ29fd2l0aCB0YWdsaW5lIDQtMTYtMTgucG5nXCI7XG5cbmNsYXNzIE5hdmlCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyByZW5kZXJMaXN0KCkge1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzLm5hdmlCYXJJdGVtcy5tYXAoaXRlbSA9PiB7XG4gIC8vICAgICByZXR1cm4oXG4gIC8vICAgICAgIDxsaVxuICAvLyAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAvLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2VsZWN0TmF2aUJhckl0ZW0oaXRlbSl9XG4gIC8vICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCJcbiAgLy8gICAgICAgPlxuICAvLyAgICAgICAgIHtpdGVtLm5hbWV9XG4gIC8vICAgICAgIDwvbGk+XG4gIC8vICAgICApO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXItNVwiPkhvbWU8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+T3ZlcnZpZXc8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+SW5zdHJ1bWVudHM8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+QXBwbGljYXRpb25zPC9saT5cbiAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbWwtNSBkcm9wZG93blwiPlxuICAvLyAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBtci1tZC0yXCIgaHJlZj1cIiNcIlxuICAvLyAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XG4gIC8vICAgICBNb3JlPC9hPlxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MTwvYT5cbiAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4yPC9hPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjM8L2E+XG4gIC8vICAgPC9kaXY+XG4gIC8vIDwvbGk+XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICAvLyA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1saWdodCBmbGV4LXJvdyBiZC1uYXZiYXIgcHktMFwiPlxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZC1mbGV4XCI+XG4gICAgICAgIC8vICAgICA8VGFicyBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGJkLW5hdmJhci1uYXYgZmxleC1yb3cgbXgtYXV0byB0YWJzIHRhYnMtMVwiPlxuICAgICAgICAvLyAgICAgICA8VGFiTGluayB0bz1cInRhYjFcIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG1yLTVcIj5Ib21lPC9UYWJMaW5rPlxuICAgICAgICAvLyAgICAgICA8VGFiTGluayB0bz1cInRhYjJcIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdXIgVGVjaG5vbG9neTwvVGFiTGluaz5cbiAgICAgICAgLy8gICAgICAgPFRhYkxpbmsgdG89XCJ0YWIzXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+T3VyIFRlYW08L1RhYkxpbms+XG4gICAgICAgIC8vICAgICAgIDxUYWJMaW5rIHRvPVwidGFiNFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPkNvbnRhY3QgVXM8L1RhYkxpbms+XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjFcIj5cbiAgICAgICAgLy8gICAgICAgICBDb250ZW50IGZvciB0YWIxXG4gICAgICAgIC8vICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgLy8gICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMlwiPlxuICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvQmVhZCBMb2NhbGl6YXRpb24gU2xpZGUucG5nXCIvPlxuICAgICAgICAvLyAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgIC8vICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjNcIj5cbiAgICAgICAgLy8gICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL0JlYWQgTG9jYWxpemF0aW9uIFNsaWRlLnBuZ1wiLz5cbiAgICAgICAgLy8gICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAvLyAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWI0XCI+XG4gICAgICAgIC8vICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIi8+XG4gICAgICAgIC8vICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgLy8gICAgIDwvVGFicz5cbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICA8L2Rpdj5cbiAgICAgICAgLy8gPC9uYXY+XG5cbiAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwidGFicyB0YWJzLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGNvbnRhaW5lciBzdGlja3ktdG9wXCI+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdG89XCJ0YWIxXCIgY2xhc3NOYW1lPVwiYnRuIHBsLTBcIj5Ib21lPC9UYWJMaW5rPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMlwiIGNsYXNzTmFtZT1cImJ0blwiPk91ciBUZWNobm9sb2d5PC9UYWJMaW5rPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiM1wiIGNsYXNzTmFtZT1cImJ0blwiPk91ciBUZWFtPC9UYWJMaW5rPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiNFwiIGNsYXNzTmFtZT1cImJ0biBwci0wXCI+Q29udGFjdCBVczwvVGFiTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHktNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXgtYXV0byBweS01XCIgc3JjPXtMb2dvX1dpdGhfVGFnbGluZX0gaWQ9XCJMb2dvX1dpdGhfVGFnbGluZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmVlbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC0xMCBteC1hdXRvIG14LWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJteC1hdXRvXCIgc3JjPXtQYXJhbGx1bWVfQmVhZH0gaWQ9XCJQYXJhbGx1bWVfQmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtbGctNSBwbC1sZy01IHB5LTUgbXktNSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+T3VyIE1pc3Npb248L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5CcmluZ2luZyBjb2xvciB0byB0aGUgd29ybGQgb2YgbW9sZWN1bGFyIGRpYWdub3N0aWNzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcmFsbHVtZSBJbmMuIGlzIGEgbXVsdGlwbGV4IGFzc2F5IHBsYXRmb3JtIGJpb3RlY2hub2xvZ3kgY29tcGFueSBhaW1lZCBhdCByZXZvbHV0aW9uaXppbmcgdGhlIGZpZWxkIG9mIG1vbGVjdWxhciBkaWFnbm9zdGljcyBmb3IgbGlmZS1zY2llbmNlIHJlc2VhcmNoZXJzIGluIGFjYWRlbWljLCBpbmR1c3RyeSwgYW5kIGNsaW5pY2FsIHNldHRpbmdzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGFiMiBjb250ZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj7Cr1xcXyjjg4QpXy/CrzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UYWIzIGNvbnRlbnQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pijila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuyk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGFiNCBjb250ZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj7wn5ivPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFicz5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdmlCYXJJdGVtczogc3RhdGUubmF2aUJhckl0ZW1zXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgc2VsZWN0TmF2aUJhckl0ZW0gOiBzZWxlY3ROYXZpQmFySXRlbSB9LCAoZGlzcGF0Y2gpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTmF2aUJhcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUpBO0FBREE7QUFEQTtBQU5BO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQWxDQTtBQVJBO0FBNUJBO0FBNkVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})