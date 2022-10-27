"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar STEP = 9;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(9), to = ref2[0], setTo = ref2[1];\n    var setNewsCall = function(from, to) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.getNews)(from, to).then(function(res) {\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(news).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(aux)));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setNewsCall(from, to);\n    }, [\n        from,\n        to\n    ]);\n    var loadMore = function() {\n        setFrom(from + STEP);\n        setTo(to + STEP);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                        showMenu: false,\n                        sections: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.sections,\n                        socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.socialMedia\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"min-h-screen mt-10 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10/12 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" Noticias \"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-3 place-items-center justify-around\",\n                                    children: [\n                                        news.map(function(param, i) {\n                                            var image = param.image, id = param.id, title = param.title, subtitle = param.subtitle;\n                                            var span = i % 3 == 0 ? \"col-span-2\" : \"col-span-1\";\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: span,\n                                                title: title,\n                                                id: id,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"w-72 h-44\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                                src: image,\n                                                                layout: \"fill\",\n                                                                height: 9,\n                                                                width: 16,\n                                                                alt: title\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 23\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"absolute bottom-0 w-full h-16 flex flex-col place-items-center justify-center\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                    className: \"text-md text-center text-white font-bold shadow\",\n                                                                    children: [\n                                                                        \" \",\n                                                                        title,\n                                                                        \" \"\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"text-sm text-center text-white shadow\",\n                                                                    children: [\n                                                                        \" \",\n                                                                        subtitle,\n                                                                        \" \"\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                    lineNumber: 83,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true)\n                                            }, id, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, _this);\n                                        }),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: loadMore,\n                                    children: \" Cargar mas \"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewsPage, \"6l0A+TB1cVq9aRIGWqNaEzCJhd8=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FqRktqQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtRmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL2luZGV4LnRzeD9kYzVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmV3Q2FyZFwiO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IHNlY3Rpb25zLCBzb2NpYWxNZWRpYSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbnRlcmZhY2UgTmV3SW5mbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNURVAgPSA5O1xuXG5jb25zdCBOZXdzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGU8TmV3SW5mb1tdPihbXSk7XG4gIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKDkpO1xuXG4gIGNvbnN0IHNldE5ld3NDYWxsID0gKGZyb206IG51bWJlciwgdG86IG51bWJlcikgPT4ge1xuICAgIGdldE5ld3MoZnJvbSwgdG8pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgYXV4ID0gcmVzPy5tYXAoKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIGltYWdlIH0pID0+ICh7XG4gICAgICAgIGlkOiBfaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBzdWJ0aXRsZSxcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSk7XG4gICAgICBpZiAoYXV4KSBzZXROZXdzKFsuLi5uZXdzLCAuLi5hdXhdKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5ld3NDYWxsKGZyb20sIHRvKTtcbiAgfSwgW2Zyb20sIHRvXSk7XG5cbiAgY29uc3QgbG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgc2V0RnJvbShmcm9tICsgU1RFUCk7XG4gICAgc2V0VG8odG8gKyBTVEVQKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBQYWNpZmljbyBCYXNxdWV0IDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQ2x1YiBQYWNpZmljbyBCYXNxdWV0ICNEZWNhbm9QYXNpb24uIE5ldXF1ZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9Mb2dvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8PlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgc2hvd01lbnU9e2ZhbHNlfVxuICAgICAgICAgIHNlY3Rpb25zPXtzZWN0aW9uc31cbiAgICAgICAgICBzb2NpYWxNZWRpYT17c29jaWFsTWVkaWF9XG4gICAgICAgIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBtdC0xMCBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbS1hdXRvXCI+XG4gICAgICAgICAgICA8aDE+IE5vdGljaWFzIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICAgIHtuZXdzLm1hcCgoeyBpbWFnZSwgaWQsIHRpdGxlLCBzdWJ0aXRsZSB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGkgJSAzID09IDAgPyBcImNvbC1zcGFuLTJcIiA6IFwiY29sLXNwYW4tMVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TmV3Q2FyZCBjbGFzc05hbWU9e3NwYW59IGtleT17aWR9IHRpdGxlPXt0aXRsZX0gaWQ9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNzIgaC00NFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgaC0xNiBmbGV4IGZsZXgtY29sIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnRpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICA8L05ld0NhcmQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9e1wiIFwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvYWRNb3JlfT4gQ2FyZ2FyIG1hcyA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzUGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIk5ld0NhcmQiLCJnZXROZXdzIiwic2VjdGlvbnMiLCJzb2NpYWxNZWRpYSIsIkltYWdlIiwiU1RFUCIsIk5ld3NQYWdlIiwibmV3cyIsInNldE5ld3MiLCJmcm9tIiwic2V0RnJvbSIsInRvIiwic2V0VG8iLCJzZXROZXdzQ2FsbCIsInRoZW4iLCJyZXMiLCJhdXgiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW1hZ2UiLCJpZCIsImxvYWRNb3JlIiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzaG93TWVudSIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImkiLCJzcGFuIiwic3JjIiwibGF5b3V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJoNSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ })

});