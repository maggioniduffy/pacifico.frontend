/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news/index.tsx":
/*!******************************!*\
  !*** ./pages/news/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar STEP = 10;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10), to = ref2[0], setTo = ref2[1];\n    var setNewsCall = function(from, to) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.getNews)(0, 10).then(function(res) {\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(news).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(aux)));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setNewsCall(from, to);\n    }, [\n        from,\n        to\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        sections: sections,\n                        socialMedia: socialMedia\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"min-h-screen mt-10\",\n                        ref: main,\n                        children: [\n                            news.map(function(param) {\n                                var image = param.image, id = param.id, title = param.title, subtitle = param.subtitle;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: title,\n                                    subtitle: subtitle,\n                                    id: id,\n                                    image: image\n                                }, id, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this);\n                            }),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewsPage, \"WOuVA7L5pgj4eWfv2UcWpsJFzRw=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TjtDQUNIO0dBL0NLaEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBaURkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC50c3g/ZGM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmV3Q2FyZFwiO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcblxuaW50ZXJmYWNlIE5ld0luZm8ge1xuICB0aXRsZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBTVEVQID0gMTA7XG5cbmNvbnN0IE5ld3NQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZTxOZXdJbmZvW10+KFtdKTtcbiAgY29uc3QgW2Zyb20sIHNldEZyb21dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoMTApO1xuXG4gIGNvbnN0IHNldE5ld3NDYWxsID0gKGZyb206IG51bWJlciwgdG86IG51bWJlcikgPT4ge1xuICAgIGdldE5ld3MoMCwgMTApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgYXV4ID0gcmVzPy5tYXAoKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIGltYWdlIH0pID0+ICh7XG4gICAgICAgIGlkOiBfaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBzdWJ0aXRsZSxcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSk7XG4gICAgICBpZiAoYXV4KSBzZXROZXdzKFsuLi5uZXdzLCAuLi5hdXhdKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5ld3NDYWxsKGZyb20sIHRvKTtcbiAgfSwgW2Zyb20sIHRvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gUGFjaWZpY28gQmFzcXVldCA8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkNsdWIgUGFjaWZpY28gQmFzcXVldCAjRGVjYW5vUGFzaW9uLiBOZXVxdWVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPD5cbiAgICAgICAgPEhlYWRlciBzZWN0aW9ucz17c2VjdGlvbnN9IHNvY2lhbE1lZGlhPXtzb2NpYWxNZWRpYX0gLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIG10LTEwXCIgcmVmPXttYWlufT5cbiAgICAgICAgICB7bmV3cy5tYXAoKHsgaW1hZ2UsIGlkLCB0aXRsZSwgc3VidGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgPE5ld0NhcmRcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX17XCIgXCJ9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c1BhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOZXdDYXJkIiwiZ2V0TmV3cyIsIlNURVAiLCJOZXdzUGFnZSIsIm5ld3MiLCJzZXROZXdzIiwiZnJvbSIsInNldEZyb20iLCJ0byIsInNldFRvIiwic2V0TmV3c0NhbGwiLCJ0aGVuIiwicmVzIiwiYXV4IiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsImltYWdlIiwiaWQiLCJkaXYiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIkhlYWRlciIsInNlY3Rpb25zIiwic29jaWFsTWVkaWEiLCJtYWluIiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});