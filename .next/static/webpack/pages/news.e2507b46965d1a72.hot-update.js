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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar STEP = 9;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(9), to = ref2[0], setTo = ref2[1];\n    var setNewsCall = function(from, to) {\n        console.log(\"set news\");\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.getNews)(from, to).then(function(res) {\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(news).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(aux)));\n        }).catch(function(e) {\n            return console.error(e);\n        });\n    };\n    var loadMore = function() {\n        setFrom(from + STEP);\n        setTo(to + STEP);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"load more\");\n        setNewsCall(from, to);\n    }, [\n        from,\n        to\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                        showMenu: false,\n                        sections: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.sections,\n                        socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.socialMedia\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"h-screen mt-10 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10/12 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-2 flex-wrap place-items-center justify-center\",\n                                    children: [\n                                        news.map(function(param, i) {\n                                            var image = param.image, id = param.id, title = param.title, subtitle = param.subtitle;\n                                            var w = (i + 1) % 5 == 0 ? \"basis-1/1 md:basis-2/2 lg:basis-2/3\" : \"basis-1/1 md:basis-1/2 lg:basis-1/3\";\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full p-2 rounded-xl overflow-hidden \".concat(w),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    title: title,\n                                                    id: id,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"w-96 h-96\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                                    src: image,\n                                                                    layout: \"fill\",\n                                                                    alt: title\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 27\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 80,\n                                                                columnNumber: 25\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"rounded-tr-2xl bg-realwhite border-t-6 border-yellow absolute bottom-0 w-full h-20 flex flex-col place-items-center justify-center\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                        className: \"text-xl text-center text-black\",\n                                                                        children: [\n                                                                            \" \",\n                                                                            title,\n                                                                            \" \"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                        lineNumber: 84,\n                                                                        columnNumber: 27\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        className: \"text-md text-center text-gray\",\n                                                                        children: [\n                                                                            \" \",\n                                                                            subtitle,\n                                                                            \" \"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                        lineNumber: 88,\n                                                                        columnNumber: 27\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 83,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, Date.now() + id, false, {\n                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, Date.now() + id, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, _this);\n                                        }),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: loadMore,\n                                    children: \" Cargar mas \"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewsPage, \"6l0A+TB1cVq9aRIGWqNaEzCJhd8=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzZEQUNGO21EQWY0QndCLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUd2QixFQUFFOzs7O3lEQWdCekM7K0NBbkJMc0IsSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBR3ZCLEVBQUU7Ozs7cURBb0JoQixDQUNOO3lDQUNILENBQUM7d0NBQUUsR0FBRzs7Ozs7O3lDQUNIOzhDQUNOLDhEQUFDd0IsUUFBTTtvQ0FBQ0MsT0FBTyxFQUFFckIsUUFBUTs4Q0FBRSxjQUFZOzs7Ozt5Q0FBUzs7Ozs7O2lDQUM1Qzs7Ozs7NkJBQ0Q7OzRCQUNOOzs7Ozs7YUFDQyxDQUNOO0NBQ0g7R0F2Rkt0QixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF5RmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL2luZGV4LnRzeD9kYzVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmV3Q2FyZFwiO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IHNlY3Rpb25zLCBzb2NpYWxNZWRpYSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbnRlcmZhY2UgTmV3SW5mbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNURVAgPSA5O1xuXG5jb25zdCBOZXdzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGU8TmV3SW5mb1tdPihbXSk7XG4gIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKDkpO1xuXG4gIGNvbnN0IHNldE5ld3NDYWxsID0gKGZyb206IG51bWJlciwgdG86IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2V0IG5ld3NcIik7XG5cbiAgICBnZXROZXdzKGZyb20sIHRvKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBhdXggPSByZXM/Lm1hcCgoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2UgfSkgPT4gKHtcbiAgICAgICAgICBpZDogX2lkLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIHN1YnRpdGxlLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChhdXgpIHNldE5ld3MoWy4uLm5ld3MsIC4uLmF1eF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgc2V0RnJvbShmcm9tICsgU1RFUCk7XG4gICAgc2V0VG8odG8gKyBTVEVQKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibG9hZCBtb3JlXCIpO1xuICAgIHNldE5ld3NDYWxsKGZyb20sIHRvKTtcbiAgfSwgW2Zyb20sIHRvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gUGFjaWZpY28gQmFzcXVldCA8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkNsdWIgUGFjaWZpY28gQmFzcXVldCAjRGVjYW5vUGFzaW9uLiBOZXVxdWVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPD5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHNob3dNZW51PXtmYWxzZX1cbiAgICAgICAgICBzZWN0aW9ucz17c2VjdGlvbnN9XG4gICAgICAgICAgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfVxuICAgICAgICAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJoLXNjcmVlbiBtdC0xMCBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbS1hdXRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBmbGV4LXdyYXAgcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtuZXdzLm1hcCgoeyBpbWFnZSwgaWQsIHRpdGxlLCBzdWJ0aXRsZSB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9XG4gICAgICAgICAgICAgICAgICAoaSArIDEpICUgNSA9PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCJiYXNpcy0xLzEgbWQ6YmFzaXMtMi8yIGxnOmJhc2lzLTIvM1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiYXNpcy0xLzEgbWQ6YmFzaXMtMS8yIGxnOmJhc2lzLTEvM1wiO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17RGF0ZS5ub3coKSArIGlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcC0yIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuICR7d31gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmV3Q2FyZCB0aXRsZT17dGl0bGV9IGlkPXtpZH0ga2V5PXtEYXRlLm5vdygpICsgaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBoLTk2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXRyLTJ4bCBiZy1yZWFsd2hpdGUgYm9yZGVyLXQtNiBib3JkZXIteWVsbG93IGFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBoLTIwIGZsZXggZmxleC1jb2wgcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnRpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTmV3Q2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfXtcIiBcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkTW9yZX0+IENhcmdhciBtYXMgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c1BhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJOZXdDYXJkIiwiZ2V0TmV3cyIsInNlY3Rpb25zIiwic29jaWFsTWVkaWEiLCJJbWFnZSIsIlNURVAiLCJOZXdzUGFnZSIsIm5ld3MiLCJzZXROZXdzIiwiZnJvbSIsInNldEZyb20iLCJ0byIsInNldFRvIiwic2V0TmV3c0NhbGwiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsImF1eCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZSIsImlkIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJsb2FkTW9yZSIsImRpdiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic2hvd01lbnUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaSIsInciLCJzcmMiLCJsYXlvdXQiLCJhbHQiLCJoNSIsInAiLCJEYXRlIiwibm93IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ })

});