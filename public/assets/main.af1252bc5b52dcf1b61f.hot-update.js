webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\n__webpack_require__(/*! ../style/naviBar.css */ \"./src/style/naviBar.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n    _inherits(NaviBar, _Component);\n\n    function NaviBar() {\n        _classCallCheck(this, NaviBar);\n\n        return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n    }\n\n    _createClass(NaviBar, [{\n        key: \"render\",\n\n        // renderList() {\n        //   return this.props.naviBarItems.map(item => {\n        //     return(\n        //       <li\n        //         key={item.name}\n        //         onClick={() => this.props.selectNaviBarItem(item)}\n        //         className=\"nav-item my-auto mx-5\"\n        //       >\n        //         {item.name}\n        //       </li>\n        //     );\n        //   });\n        // }\n\n        // <li className=\"nav-item my-auto mr-5\">Home</li>\n        // <li className=\"nav-item my-auto mx-5\">Overview</li>\n        // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n        // <li className=\"nav-item my-auto mx-5\">Applications</li>\n        // <li className=\"nav-item my-auto ml-5 dropdown\">\n        //   <a className=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\"\n        //     data-toggle=\"dropdown\" aria-haspopup=\"true\">\n        //     More</a>\n        //   <div className=\"dropdown-menu dropdown-menu-right\">\n        //     <a className=\"dropdown-item\">1</a>\n        //     <a className=\"dropdown-item\">2</a>\n        //     <a className=\"dropdown-item\">3</a>\n        //   </div>\n        // </li>\n\n\n        value: function render() {\n            return (\n                // <nav className=\"navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar py-0\">\n                //   <div className=\"container mx-auto d-flex\">\n                //     <Tabs className=\"navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1\">\n                //       <TabLink to=\"tab1\" className=\"nav-item my-auto mr-5\">Home</TabLink>\n                //       <TabLink to=\"tab2\" className=\"nav-item my-auto mx-5\">Our Technology</TabLink>\n                //       <TabLink to=\"tab3\" className=\"nav-item my-auto mx-5\">Our Team</TabLink>\n                //       <TabLink to=\"tab4\" className=\"nav-item my-auto mx-5\">Contact Us</TabLink>\n                //\n                //       <TabContent for=\"tab1\">\n                //         Content for tab1\n                //       </TabContent>\n                //       <TabContent for=\"tab2\">\n                //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n                //       </TabContent>\n                //       <TabContent for=\"tab3\">\n                //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n                //       </TabContent>\n                //       <TabContent for=\"tab4\">\n                //         <img src=\"../images/Parallume & PSTI/Bead Localization Slide.png\"/>\n                //       </TabContent>\n                //     </Tabs>\n                //\n                //\n                //\n                //   </div>\n                // </nav>\n                _react2.default.createElement(\n                    _reactTabsRedux.Tabs,\n                    { className: \"tabs tabs-1\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"tab-links navbar\" },\n                        _react2.default.createElement(\n                            _reactTabsRedux.TabLink,\n                            { to: \"tab1\" },\n                            \"Tab1\"\n                        ),\n                        _react2.default.createElement(\n                            _reactTabsRedux.TabLink,\n                            { to: \"tab2\" },\n                            \"Tab2\"\n                        ),\n                        _react2.default.createElement(\n                            _reactTabsRedux.TabLink,\n                            { to: \"tab3\" },\n                            \"Tab3\"\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"content\" },\n                        _react2.default.createElement(\n                            _reactTabsRedux.TabContent,\n                            { \"for\": \"tab1\" },\n                            _react2.default.createElement(\n                                \"h2\",\n                                null,\n                                \"Tab1 content\"\n                            ),\n                            _react2.default.createElement(\n                                \"p\",\n                                null,\n                                \"\\u554A\\u54C8\\u54C8\"\n                            ),\n                            _react2.default.createElement(\n                                \"p\",\n                                null,\n                                \"Pro vitae percipit no. Per ignota audire no. Ex hinc mutat delicata sit, sit eu erant tempor vivendo. Ad modus nusquam recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto expetendis, est nonumy contentiones voluptatibus cu.\"\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _reactTabsRedux.TabContent,\n                            { \"for\": \"tab2\" },\n                            _react2.default.createElement(\n                                \"h2\",\n                                null,\n                                \"Tab2 content\"\n                            ),\n                            _react2.default.createElement(\n                                \"div\",\n                                null,\n                                \"\\xAF\\\\_(\\u30C4)_/\\xAF\"\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _reactTabsRedux.TabContent,\n                            { \"for\": \"tab3\" },\n                            _react2.default.createElement(\n                                \"h2\",\n                                null,\n                                \"Tab3 content\"\n                            ),\n                            _react2.default.createElement(\n                                \"div\",\n                                null,\n                                \"(\\u256F\\xB0\\u25A1\\xB0\\uFF09\\u256F\\uFE35 \\u253B\\u2501\\u253B)\"\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n    return {\n        naviBarItems: state.naviBarItems\n    };\n}\n\nfunction mapDispatchToProps(dispatch) {\n    return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuaW1wb3J0IFwiLi4vc3R5bGUvbmF2aUJhci5jc3NcIjtcblxuY2xhc3MgTmF2aUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHJlbmRlckxpc3QoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvcHMubmF2aUJhckl0ZW1zLm1hcChpdGVtID0+IHtcbiAgLy8gICAgIHJldHVybihcbiAgLy8gICAgICAgPGxpXG4gIC8vICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gIC8vICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZWxlY3ROYXZpQmFySXRlbShpdGVtKX1cbiAgLy8gICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIlxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAge2l0ZW0ubmFtZX1cbiAgLy8gICAgICAgPC9saT5cbiAgLy8gICAgICk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtci01XCI+SG9tZTwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdmVydmlldzwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5JbnN0cnVtZW50czwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5BcHBsaWNhdGlvbnM8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtbC01IGRyb3Bkb3duXCI+XG4gIC8vICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIG1yLW1kLTJcIiBocmVmPVwiI1wiXG4gIC8vICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgLy8gICAgIE1vcmU8L2E+XG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cbiAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4xPC9hPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjI8L2E+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MzwvYT5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gPC9saT5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIC8vIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IGJkLW5hdmJhciBweS0wXCI+XG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBkLWZsZXhcIj5cbiAgICAgICAgLy8gICAgIDxUYWJzIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgYmQtbmF2YmFyLW5hdiBmbGV4LXJvdyBteC1hdXRvIHRhYnMgdGFicy0xXCI+XG4gICAgICAgIC8vICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXItNVwiPkhvbWU8L1RhYkxpbms+XG4gICAgICAgIC8vICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMlwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPk91ciBUZWNobm9sb2d5PC9UYWJMaW5rPlxuICAgICAgICAvLyAgICAgICA8VGFiTGluayB0bz1cInRhYjNcIiBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdXIgVGVhbTwvVGFiTGluaz5cbiAgICAgICAgLy8gICAgICAgPFRhYkxpbmsgdG89XCJ0YWI0XCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBteC01XCI+Q29udGFjdCBVczwvVGFiTGluaz5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMVwiPlxuICAgICAgICAvLyAgICAgICAgIENvbnRlbnQgZm9yIHRhYjFcbiAgICAgICAgLy8gICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAvLyAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIyXCI+XG4gICAgICAgIC8vICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIi8+XG4gICAgICAgIC8vICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgLy8gICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiM1wiPlxuICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvQmVhZCBMb2NhbGl6YXRpb24gU2xpZGUucG5nXCIvPlxuICAgICAgICAvLyAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgIC8vICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjRcIj5cbiAgICAgICAgLy8gICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL0JlYWQgTG9jYWxpemF0aW9uIFNsaWRlLnBuZ1wiLz5cbiAgICAgICAgLy8gICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAvLyAgICAgPC9UYWJzPlxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAvLyA8L25hdj5cbiAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwidGFicyB0YWJzLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWxpbmtzIG5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMVwiPlRhYjE8L1RhYkxpbms+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdG89XCJ0YWIyXCI+VGFiMjwvVGFiTGluaz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB0bz1cInRhYjNcIj5UYWIzPC9UYWJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRhYjEgY29udGVudDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIOWViuWTiOWTiFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvIHZpdGFlIHBlcmNpcGl0IG5vLiBQZXIgaWdub3RhIGF1ZGlyZSBuby4gRXggaGluYyBtdXRhdCBkZWxpY2F0YSBzaXQsIHNpdCBldSBlcmFudCB0ZW1wb3Igdml2ZW5kby4gQWQgbW9kdXMgbnVzcXVhbSByZWN1c2FibyBzaXQuIFBlciBuZSBkZXNlcnVudCBwZXJpY3VsaXMsIGFkIHNlYSBzYWVwZSBwZXJmZWN0byBleHBldGVuZGlzLCBlc3Qgbm9udW15IGNvbnRlbnRpb25lcyB2b2x1cHRhdGlidXMgY3UuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGFiMiBjb250ZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj7Cr1xcXyjjg4QpXy/CrzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UYWIzIGNvbnRlbnQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pijila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuyk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UYWJzPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2aUJhckl0ZW1zOiBzdGF0ZS5uYXZpQmFySXRlbXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzZWxlY3ROYXZpQmFySXRlbSA6IHNlbGVjdE5hdmlCYXJJdGVtIH0sIChkaXNwYXRjaCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOYXZpQmFyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBZEE7QUFQQTtBQTNCQTtBQXVEQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})