"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[new-title]",{

/***/ "./pages/news/[new-title].tsx":
/*!************************************!*\
  !*** ./pages/news/[new-title].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NewPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loaded = ref1[0], setLoaded = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(\"effect\", router.isReady);\n        if (router.isReady) {\n            var query = router.query.query;\n            if (query) {\n                console.log(\"query\", query);\n                var auxQuery = query.toString();\n                setData(JSON.parse(auxQuery));\n                setLoaded(true);\n            }\n        }\n    }, [\n        router,\n        router.isReady,\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sections: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.sections,\n                socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.socialMedia,\n                alreadyScrolled: true,\n                showImage: false\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: loaded && data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-realwhite p-8 px-16 w-10/12 md:w-8/12 mt-10 m-auto mb-5 rounded h-fit rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-left text-6xl camelcase font-bold \",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lext text-3xl mt-1\",\n                            children: data.subtitle\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: [\n                                \" \",\n                                data.time\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-8 text-lg\",\n                            children: data.body\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-screen w-full p-auto flex place-items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        role: \"status\",\n                        className: \"m-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"inline m-auto w-16 h-16 text-black animate-spin dark:text-gray-600 fill-yellow\",\n                                viewBox: \"0 0 100 101\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                        fill: \"currentColor\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                        fill: \"currentFill\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"h-16 w-full p-auto bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-white text-center text-sm\",\n                    children: [\n                        \" \",\n                        \"Made by Faustino Maggioni Duffy\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(NewPage, \"eGMssy13Fwkt71+MOGHNA+lqIpA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPage);\nvar _c;\n$RefreshReg$(_c, \"NewPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUNyQkMsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLEtBQUssRUFBQyw0QkFBNEI7O2tEQUVsQyw4REFBQ0MsTUFBSTt3Q0FDSEMsQ0FBQyxFQUFDLDhXQUE4Vzt3Q0FDaFhILElBQUksRUFBQyxjQUFjOzs7Ozs2Q0FDbkI7a0RBQ0YsOERBQUNFLE1BQUk7d0NBQ0hDLENBQUMsRUFBQywra0JBQStrQjt3Q0FDamxCSCxJQUFJLEVBQUMsYUFBYTs7Ozs7NkNBQ2xCOzs7Ozs7cUNBQ0U7MENBQ04sOERBQUNJLE1BQUk7Z0NBQUNmLFNBQVMsRUFBQyxTQUFTOzBDQUFDLFlBQVU7Ozs7O3FDQUFPOzs7Ozs7NkJBQ3ZDOzs7Ozt5QkFDRjs7Ozs7cUJBRUo7MEJBQ04sOERBQUNnQixRQUFNO2dCQUFDaEIsU0FBUyxFQUFDLDZCQUE2QjswQkFDN0MsNEVBQUNJLElBQUU7b0JBQUNKLFNBQVMsRUFBQyxnQ0FBZ0M7O3dCQUMzQyxHQUFHO3dCQUFDLGlDQUVQOzs7Ozs7eUJBQUs7Ozs7O3FCQUNFOztvQkFDUixDQUNIO0NBQ0g7R0ExRUt4QixPQUFPOztRQUNJTixrREFBUzs7O0FBRHBCTSxLQUFBQSxPQUFPO0FBNEViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bbmV3LXRpdGxlXS50c3g/YTFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBzZWN0aW9ucywgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBOZXdBcnRpY2xlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5ld1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxOZXdBcnRpY2xlPigpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZWZmZWN0XCIsIHJvdXRlci5pc1JlYWR5KTtcbiAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcbiAgICAgIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIsIHF1ZXJ5KTtcbiAgICAgICAgY29uc3QgYXV4UXVlcnkgPSBxdWVyeSEudG9TdHJpbmcoKTtcbiAgICAgICAgc2V0RGF0YShKU09OLnBhcnNlKGF1eFF1ZXJ5KSk7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtyb3V0ZXIsIHJvdXRlci5pc1JlYWR5LCByb3V0ZXIucXVlcnldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBQYWNpZmljbyBCYXNxdWV0IDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQ2x1YiBQYWNpZmljbyBCYXNxdWV0ICNEZWNhbm9QYXNpb24uIE5ldXF1ZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9Mb2dvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIHNlY3Rpb25zPXtzZWN0aW9uc31cbiAgICAgICAgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfVxuICAgICAgICBhbHJlYWR5U2Nyb2xsZWQ9e3RydWV9XG4gICAgICAgIHNob3dJbWFnZT17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgICAge2xvYWRlZCAmJiBkYXRhID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVhbHdoaXRlIHAtOCBweC0xNiB3LTEwLzEyIG1kOnctOC8xMiBtdC0xMCBtLWF1dG8gbWItNSByb3VuZGVkIGgtZml0IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC02eGwgY2FtZWxjYXNlIGZvbnQtYm9sZCBcIj5cbiAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGV4dCB0ZXh0LTN4bCBtdC0xXCI+e2RhdGEuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxoNT4ge2RhdGEudGltZX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWxnXCI+e2RhdGEuYm9keX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgcC1hdXRvIGZsZXggcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJtLWF1dG9cIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZSBtLWF1dG8gdy0xNiBoLTE2IHRleHQtYmxhY2sgYW5pbWF0ZS1zcGluIGRhcms6dGV4dC1ncmF5LTYwMCBmaWxsLXllbGxvd1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAxXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDAgNTAuNTkwOEMxMDAgNzguMjA1MSA3Ny42MTQyIDEwMC41OTEgNTAgMTAwLjU5MUMyMi4zODU4IDEwMC41OTEgMCA3OC4yMDUxIDAgNTAuNTkwOEMwIDIyLjk3NjYgMjIuMzg1OCAwLjU5MDgyIDUwIDAuNTkwODJDNzcuNjE0MiAwLjU5MDgyIDEwMCAyMi45NzY2IDEwMCA1MC41OTA4Wk05LjA4MTQ0IDUwLjU5MDhDOS4wODE0NCA3My4xODk1IDI3LjQwMTMgOTEuNTA5NCA1MCA5MS41MDk0QzcyLjU5ODcgOTEuNTA5NCA5MC45MTg2IDczLjE4OTUgOTAuOTE4NiA1MC41OTA4QzkwLjkxODYgMjcuOTkyMSA3Mi41OTg3IDkuNjcyMjYgNTAgOS42NzIyNkMyNy40MDEzIDkuNjcyMjYgOS4wODE0NCAyNy45OTIxIDkuMDgxNDQgNTAuNTkwOFpcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRGaWxsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJoLTE2IHctZnVsbCBwLWF1dG8gYm90dG9tLTBcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBNYWRlIGJ5IEZhdXN0aW5vIE1hZ2dpb25pIER1ZmZ5XG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1BhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwic2VjdGlvbnMiLCJzb2NpYWxNZWRpYSIsIk5ld1BhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRlZCIsInNldExvYWRlZCIsImNvbnNvbGUiLCJsb2ciLCJpc1JlYWR5IiwicXVlcnkiLCJhdXhRdWVyeSIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImFscmVhZHlTY3JvbGxlZCIsInNob3dJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJzdWJ0aXRsZSIsImg1IiwidGltZSIsInAiLCJib2R5Iiwicm9sZSIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInNwYW4iLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[new-title].tsx\n"));

/***/ })

});