"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/Admin/AdminSection.tsx":
/*!*******************************************!*\
  !*** ./components/Admin/AdminSection.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar AdminSection = function(param) {\n    var title = param.title, children = param.children, bg = param.bg;\n    _s();\n    console.log(children);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref[0], setShow = ref[1];\n    var bgocolor = \"bg-\" + bg;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col place-items-center w-full bg-gray\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        setShow(!show);\n                    },\n                    className: \"font-bold text-3xl\",\n                    children: [\n                        \" \",\n                        title,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AdminSection.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                show && children\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AdminSection.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(AdminSection, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AdminSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminSection);\nvar _c;\n$RefreshReg$(_c, \"AdminSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkbWluL0FkbWluU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQXdDO0FBUXhDLElBQU1FLFlBQVksR0FBRyxnQkFBb0M7UUFBakNDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFOztJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLElBQXdCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWhDTyxJQUFJLEdBQWFQLEdBQWUsR0FBNUIsRUFBRVEsT0FBTyxHQUFJUixHQUFlLEdBQW5CO0lBQ3BCLElBQU1TLFFBQVEsR0FBRyxLQUFLLEdBQUdMLEVBQUU7SUFDM0IscUJBQ0UsOERBQUNNLEtBQUc7UUFBQ0MsU0FBUyxFQUFHLGlEQUErQztrQkFDOUQ7OzhCQUNFLDhEQUFDQyxRQUFNO29CQUNMQyxPQUFPLEVBQUUsV0FBTTt3QkFDYkwsT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDO3FCQUNoQjtvQkFDREksU0FBUyxFQUFDLG9CQUFvQjs7d0JBRTdCLEdBQUc7d0JBQ0hULEtBQUs7d0JBQUUsR0FBRzs7Ozs7O3lCQUNKO2dCQUNSSyxJQUFJLElBQUlKLFFBQVE7O3dCQUNoQjs7Ozs7YUFDQyxDQUNOO0NBQ0g7R0FwQktGLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXNCbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkbWluL0FkbWluU2VjdGlvbi50c3g/M2Y4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYmc6IHN0cmluZztcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBBZG1pblNlY3Rpb24gPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGJnIH06IFByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNoaWxkcmVuKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBiZ29jb2xvciA9IFwiYmctXCIgKyBiZztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgcGxhY2UtaXRlbXMtY2VudGVyIHctZnVsbCBiZy1ncmF5YH0+XG4gICAgICA8PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvdyghc2hvdyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIlxuICAgICAgICA+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIHt0aXRsZX17XCIgXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7c2hvdyAmJiBjaGlsZHJlbn1cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5TZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZG1pblNlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwiYmciLCJjb25zb2xlIiwibG9nIiwic2hvdyIsInNldFNob3ciLCJiZ29jb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Admin/AdminSection.tsx\n"));

/***/ })

});