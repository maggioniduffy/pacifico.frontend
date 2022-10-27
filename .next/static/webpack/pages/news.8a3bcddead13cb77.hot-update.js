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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar STEP = 9;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(9), to = ref2[0], setTo = ref2[1];\n    var setNewsCall = function(from, to) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.getNews)(from, to).then(function(res) {\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(news).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(aux)));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setNewsCall(from, to);\n    }, [\n        from,\n        to\n    ]);\n    var loadMore = function() {\n        setFrom(from + STEP);\n        setTo(to + STEP);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                        showMenu: false,\n                        sections: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.sections,\n                        socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.socialMedia\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"h-screen mt-10 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10/12 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" Noticias \"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap place-items-center justify-center\",\n                                    children: [\n                                        news.map(function(param, i) {\n                                            var image = param.image, id = param.id, title = param.title, subtitle = param.subtitle;\n                                            var w = (i + 1) % 5 == 0 ? \"basis-2/3\" : \"basis-1/3\";\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-2 \".concat(w),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    title: title,\n                                                    id: id,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"w-96 h-96\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                                    src: image,\n                                                                    layout: \"fill\",\n                                                                    alt: title\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                    lineNumber: 71,\n                                                                    columnNumber: 27\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 25\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"absolute bottom-0 w-full h-20 flex flex-col place-items-center justify-center\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                        className: \"text-xl text-center text-white font-bold shadow\",\n                                                                        children: [\n                                                                            \" \",\n                                                                            title,\n                                                                            \" \"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                        lineNumber: 74,\n                                                                        columnNumber: 27\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        className: \"text-md text-center text-white shadow\",\n                                                                        children: [\n                                                                            \" \",\n                                                                            subtitle,\n                                                                            \" \"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                        lineNumber: 78,\n                                                                        columnNumber: 27\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, Date.now() + id, false, {\n                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, Date.now() + id, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, _this);\n                                        }),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: loadMore,\n                                    children: \" Cargar mas \"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewsPage, \"6l0A+TB1cVq9aRIGWqNaEzCJhd8=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dDQUFFLEdBQUc7Ozs7Ozt5Q0FDSDs4Q0FDTiw4REFBQ3NCLFFBQU07b0NBQUNDLE9BQU8sRUFBRXRCLFFBQVE7OENBQUUsY0FBWTs7Ozs7eUNBQVM7Ozs7OztpQ0FDNUM7Ozs7OzZCQUNEOzs0QkFDTjs7Ozs7O2FBQ0MsQ0FDTjtDQUNIO0dBN0VLakIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBK0VkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC50c3g/ZGM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCBOZXdDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05ld0NhcmRcIjtcbmltcG9ydCB7IGdldE5ld3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgeyBzZWN0aW9ucywgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW50ZXJmYWNlIE5ld0luZm8ge1xuICB0aXRsZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBTVEVQID0gOTtcblxuY29uc3QgTmV3c1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlPE5ld0luZm9bXT4oW10pO1xuICBjb25zdCBbZnJvbSwgc2V0RnJvbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZSg5KTtcblxuICBjb25zdCBzZXROZXdzQ2FsbCA9IChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpID0+IHtcbiAgICBnZXROZXdzKGZyb20sIHRvKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGF1eCA9IHJlcz8ubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZSB9KSA9PiAoe1xuICAgICAgICBpZDogX2lkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgc3VidGl0bGUsXG4gICAgICAgIGltYWdlLFxuICAgICAgfSkpO1xuICAgICAgaWYgKGF1eCkgc2V0TmV3cyhbLi4ubmV3cywgLi4uYXV4XSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROZXdzQ2FsbChmcm9tLCB0byk7XG4gIH0sIFtmcm9tLCB0b10pO1xuXG4gIGNvbnN0IGxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHNldEZyb20oZnJvbSArIFNURVApO1xuICAgIHNldFRvKHRvICsgU1RFUCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gUGFjaWZpY28gQmFzcXVldCA8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkNsdWIgUGFjaWZpY28gQmFzcXVldCAjRGVjYW5vUGFzaW9uLiBOZXVxdWVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPD5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHNob3dNZW51PXtmYWxzZX1cbiAgICAgICAgICBzZWN0aW9ucz17c2VjdGlvbnN9XG4gICAgICAgICAgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfVxuICAgICAgICAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJoLXNjcmVlbiBtdC0xMCBwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbS1hdXRvXCI+XG4gICAgICAgICAgICA8aDE+IE5vdGljaWFzIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7bmV3cy5tYXAoKHsgaW1hZ2UsIGlkLCB0aXRsZSwgc3VidGl0bGUgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHcgPSAoaSArIDEpICUgNSA9PSAwID8gXCJiYXNpcy0yLzNcIiA6IFwiYmFzaXMtMS8zXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtEYXRlLm5vdygpICsgaWR9IGNsYXNzTmFtZT17YHAtMiAke3d9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdDYXJkIHRpdGxlPXt0aXRsZX0gaWQ9e2lkfSBrZXk9e0RhdGUubm93KCkgKyBpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTk2IGgtOTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGxheW91dD1cImZpbGxcIiBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBoLTIwIGZsZXggZmxleC1jb2wgcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtY2VudGVyIHRleHQtd2hpdGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L05ld0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX17XCIgXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9hZE1vcmV9PiBDYXJnYXIgbWFzIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiTmV3Q2FyZCIsImdldE5ld3MiLCJzZWN0aW9ucyIsInNvY2lhbE1lZGlhIiwiSW1hZ2UiLCJTVEVQIiwiTmV3c1BhZ2UiLCJuZXdzIiwic2V0TmV3cyIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInNldE5ld3NDYWxsIiwidGhlbiIsInJlcyIsImF1eCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZSIsImlkIiwibG9hZE1vcmUiLCJkaXYiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNob3dNZW51IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiaSIsInciLCJzcmMiLCJsYXlvdXQiLCJhbHQiLCJoNSIsInAiLCJEYXRlIiwibm93IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ })

});