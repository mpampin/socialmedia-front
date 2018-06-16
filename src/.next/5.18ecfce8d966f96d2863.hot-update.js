webpackHotUpdate(5,{

/***/ "./containers/ListOfPosts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("../node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("../node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Post__ = __webpack_require__("./components/Post.js");
var _jsxFileName = "/Users/mpampin/repos/rb/socialmedia-front/src/containers/ListOfPosts.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n{\n  socialmediaPosts(interest: \"#StarWars\") {\n    user\n    message\n    hashtags\n  }\n}\n"]);



(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var handler = function handler(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      data = _ref.data;
  if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Loading...");
  if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Error :(");
  return data.posts.map(function (_ref2) {
    var user = _ref2.user,
        message = _ref2.message,
        hashtags = _ref2.hashtags;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Post__["a" /* default */], {
      user: user,
      hashtags: hashtags,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, message);
  });
};

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"], {
    query: query,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, handler);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "/Users/mpampin/repos/rb/socialmedia-front/src/containers/ListOfPosts.js");
  reactHotLoader.register(handler, "handler", "/Users/mpampin/repos/rb/socialmedia-front/src/containers/ListOfPosts.js");
  reactHotLoader.register(_default, "default", "/Users/mpampin/repos/rb/socialmedia-front/src/containers/ListOfPosts.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.18ecfce8d966f96d2863.hot-update.js.map