webpackHotUpdate("main",{

/***/ "./src/components/naviBar.js":
/*!***********************************!*\
  !*** ./src/components/naviBar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactTabsRedux = __webpack_require__(/*! react-tabs-redux */ \"./node_modules/react-tabs-redux/lib/index.js\");\n\n__webpack_require__(/*! ../style/naviBar.css */ \"./src/style/naviBar.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NaviBar = function (_Component) {\n  _inherits(NaviBar, _Component);\n\n  function NaviBar() {\n    _classCallCheck(this, NaviBar);\n\n    return _possibleConstructorReturn(this, (NaviBar.__proto__ || Object.getPrototypeOf(NaviBar)).apply(this, arguments));\n  }\n\n  _createClass(NaviBar, [{\n    key: \"render\",\n\n    // renderList() {\n    //   return this.props.naviBarItems.map(item => {\n    //     return(\n    //       <li\n    //         key={item.name}\n    //         onClick={() => this.props.selectNaviBarItem(item)}\n    //         className=\"nav-item my-auto mx-5\"\n    //       >\n    //         {item.name}\n    //       </li>\n    //     );\n    //   });\n    // }\n\n    // <li className=\"nav-item my-auto mr-5\">Home</li>\n    // <li className=\"nav-item my-auto mx-5\">Overview</li>\n    // <li className=\"nav-item my-auto mx-5\">Instruments</li>\n    // <li className=\"nav-item my-auto mx-5\">Applications</li>\n    // <li className=\"nav-item my-auto ml-5 dropdown\">\n    //   <a className=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\"\n    //     data-toggle=\"dropdown\" aria-haspopup=\"true\">\n    //     More</a>\n    //   <div className=\"dropdown-menu dropdown-menu-right\">\n    //     <a className=\"dropdown-item\">1</a>\n    //     <a className=\"dropdown-item\">2</a>\n    //     <a className=\"dropdown-item\">3</a>\n    //   </div>\n    // </li>\n\n\n    value: function render() {\n      return _react2.default.createElement(\n        \"nav\",\n        { className: \"navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar py-0\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container mx-auto d-flex\" },\n          _react2.default.createElement(\n            _reactTabsRedux.Tabs,\n            { className: \"navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1\" },\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab1\", className: \"nav-item my-auto mr-5\" },\n              \"Tab1\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab2\", className: \"nav-item my-auto mx-5\" },\n              \"Tab2\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab3\", className: \"nav-item my-auto mx-5\" },\n              \"Tab3\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabLink,\n              { to: \"tab4\", className: \"nav-item my-auto mx-5\" },\n              \"Tab4\"\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab1\" },\n              _react2.default.createElement(\n                \"header\",\n                { className: \"w-100 span2 clearfix\" },\n                \"Content for tab1\"\n              )\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab2\" },\n              _react2.default.createElement(\"img\", { src: \"../images/Parallume & PSTI/Bead Localization Slide.png\" })\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab3\" },\n              _react2.default.createElement(\"img\", { src: \"../images/Parallume & PSTI/Bead Localization Slide.png\" })\n            ),\n            _react2.default.createElement(\n              _reactTabsRedux.TabContent,\n              { \"for\": \"tab4\" },\n              _react2.default.createElement(\"img\", { src: \"../images/Parallume & PSTI/Bead Localization Slide.png\" })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NaviBar;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    naviBarItems: state.naviBarItems\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ selectNaviBarItem: _index.selectNaviBarItem }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NaviBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpQmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlCYXIuanM/YzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3ROYXZpQmFySXRlbSB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFRhYnMsIFRhYkxpbmssIFRhYkNvbnRlbnQgfSBmcm9tIFwicmVhY3QtdGFicy1yZWR1eFwiO1xuaW1wb3J0IFwiLi4vc3R5bGUvbmF2aUJhci5jc3NcIjtcblxuY2xhc3MgTmF2aUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHJlbmRlckxpc3QoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvcHMubmF2aUJhckl0ZW1zLm1hcChpdGVtID0+IHtcbiAgLy8gICAgIHJldHVybihcbiAgLy8gICAgICAgPGxpXG4gIC8vICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gIC8vICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZWxlY3ROYXZpQmFySXRlbShpdGVtKX1cbiAgLy8gICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIlxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAge2l0ZW0ubmFtZX1cbiAgLy8gICAgICAgPC9saT5cbiAgLy8gICAgICk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtci01XCI+SG9tZTwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5PdmVydmlldzwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5JbnN0cnVtZW50czwvbGk+XG4gIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIG14LTVcIj5BcHBsaWNhdGlvbnM8L2xpPlxuICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXktYXV0byBtbC01IGRyb3Bkb3duXCI+XG4gIC8vICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIG1yLW1kLTJcIiBocmVmPVwiI1wiXG4gIC8vICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgLy8gICAgIE1vcmU8L2E+XG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cbiAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj4xPC9hPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPjI8L2E+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+MzwvYT5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gPC9saT5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IGJkLW5hdmJhciBweS0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBkLWZsZXhcIj5cbiAgICAgICAgICAgIDxUYWJzIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgYmQtbmF2YmFyLW5hdiBmbGV4LXJvdyBteC1hdXRvIHRhYnMgdGFicy0xXCI+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMVwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXItNVwiPlRhYjE8L1RhYkxpbms+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiMlwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPlRhYjI8L1RhYkxpbms+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiM1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPlRhYjM8L1RhYkxpbms+XG4gICAgICAgICAgICAgIDxUYWJMaW5rIHRvPVwidGFiNFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gbXgtNVwiPlRhYjQ8L1RhYkxpbms+XG5cbiAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiMVwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy0xMDAgc3BhbjIgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgIENvbnRlbnQgZm9yIHRhYjFcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgICA8VGFiQ29udGVudCBmb3I9XCJ0YWIyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvUGFyYWxsdW1lICYgUFNUSS9CZWFkIExvY2FsaXphdGlvbiBTbGlkZS5wbmdcIi8+XG4gICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgZm9yPVwidGFiM1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1BhcmFsbHVtZSAmIFBTVEkvQmVhZCBMb2NhbGl6YXRpb24gU2xpZGUucG5nXCIvPlxuICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50IGZvcj1cInRhYjRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9QYXJhbGx1bWUgJiBQU1RJL0JlYWQgTG9jYWxpemF0aW9uIFNsaWRlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgICAgICAgPC9UYWJzPlxuXG5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdmlCYXJJdGVtczogc3RhdGUubmF2aUJhckl0ZW1zXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgc2VsZWN0TmF2aUJhckl0ZW0gOiBzZWxlY3ROYXZpQmFySXRlbSB9LCAoZGlzcGF0Y2gpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTmF2aUJhcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFqQkE7QUFEQTtBQURBO0FBNkJBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/naviBar.js\n");

/***/ })

})