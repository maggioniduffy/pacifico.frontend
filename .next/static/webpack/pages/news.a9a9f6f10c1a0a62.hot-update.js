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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_MyButton_MyButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MyButton/MyButton */ \"./components/MyButton/MyButton.tsx\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Search */ \"./pages/news/Search.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar STEP = 9;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), search = ref[0], setSearch = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), news = ref1[0], setNews = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), from = ref2[0], setFrom = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(9), to = ref3[0], setTo = ref3[1];\n    var setNewsCall = function(from, to) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.getNews)(from, to, search).then(function(res) {\n            console.log(\"res: \", res);\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(news).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(aux)));\n        }).catch(function(e) {\n            return console.error(e);\n        });\n    };\n    var loadMore = function() {\n        setFrom(from + STEP);\n        setTo(to + STEP);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"load more\");\n        setNewsCall(from, to);\n    }, [\n        from,\n        to\n    ]);\n    var setNewsSearch = function(from, to, search) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.getNews)(from, to, search).then(function(res) {\n            console.log(\"res: \", res);\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews(aux);\n        }).catch(function(e) {\n            return console.error(e);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setFrom(0);\n        setTo(9);\n        setNewsSearch(from, to, search);\n    }, [\n        search\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                        showMenu: false,\n                        sections: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.sections,\n                        socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.socialMedia\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        search: search,\n                        setSearch: setSearch\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"h-screen mt-4 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10/12 m-auto\",\n                            children: [\n                                news.length <= 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"empty w-72 m-auto text-center flex h-24 bg-gold-300\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: [\n                                                \" \",\n                                                \"Parece que no encontramos nada parecido, proba con otra busqueda\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, _this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-2 flex-wrap place-items-center justify-center\",\n                                    children: [\n                                        news.map(function(param, i) {\n                                            var image = param.image, id = param.id, title = param.title, subtitle = param.subtitle;\n                                            var w = (i + 1) % 5 == 0 ? \"basis-1/1 md:basis-2/2 lg:basis-2/3\" : \"basis-1/1 md:basis-1/2 lg:basis-1/3\";\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full p-2 rounded-xl overflow-hidden \".concat(w),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    title: title,\n                                                    id: id,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"w-96 h-96 rounded-xl\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                                    src: image,\n                                                                    layout: \"fill\",\n                                                                    alt: title,\n                                                                    className: \"rounded-xl\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                    lineNumber: 115,\n                                                                    columnNumber: 29\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 114,\n                                                                columnNumber: 27\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"rounded-tr-2xl overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow absolute bottom-0 w-full h-20 flex flex-col place-items-center drop-shadow-xl shadow-white justify-center\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                        className: \"text-lg text-center text-black\",\n                                                                        children: [\n                                                                            \" \",\n                                                                            title,\n                                                                            \" \"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                        lineNumber: 123,\n                                                                        columnNumber: 29\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        className: \"text-sm text-center text-gray\",\n                                                                        children: [\n                                                                            \" \",\n                                                                            subtitle,\n                                                                            \" \"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                        lineNumber: 127,\n                                                                        columnNumber: 29\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                                lineNumber: 122,\n                                                                columnNumber: 27\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, Date.now() + id, false, {\n                                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 23\n                                                }, _this)\n                                            }, Date.now() + id, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 21\n                                            }, _this);\n                                        }),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto w-fit mb-8 pb-8 pt-8\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyButton_MyButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        onClick: loadMore,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"font-bold\",\n                                            children: \" Cargar mas \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewsPage, \"x+CS/uFHQ0QVEJFmKhTFoxN98SA=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDVnNCLE1BQU0sRUFBQyxNQUFNO29FQUNiQyxHQUFHLEVBQUV6QixLQUFLO29FQUNWa0IsU0FBUyxFQUFDLFlBQVk7Ozs7O3lFQUN0Qjs7Ozs7cUVBQ0U7MEVBQ04sOERBQUNULEtBQUc7Z0VBQUNTLFNBQVMsRUFBQywwTEFBMEw7O2tGQUN2TSw4REFBQ1EsSUFBRTt3RUFBQ1IsU0FBUyxFQUFDLGdDQUFnQzs7NEVBQzNDLEdBQUc7NEVBQ0hsQixLQUFLOzRFQUFFLEdBQUc7Ozs7Ozs2RUFDUjtrRkFDTCw4REFBQzJCLEdBQUM7d0VBQUNULFNBQVMsRUFBQywrQkFBK0I7OzRFQUN6QyxHQUFHOzRFQUNIakIsUUFBUTs0RUFBRSxHQUFHOzs7Ozs7NkVBQ1o7Ozs7OztxRUFDQTs7Ozs7OzZEQUNGO21EQXBCNEIyQixJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHMUIsRUFBRTs7Ozt5REFxQnpDOytDQXhCTHlCLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcxQixFQUFFOzs7O3FEQXlCaEIsQ0FDTjt5Q0FDSCxDQUFDO3dDQUFFLEdBQUc7Ozs7Ozt5Q0FDSDs4Q0FHUiw4REFBQ00sS0FBRztvQ0FBQ1MsU0FBUyxFQUFDLDhCQUE4Qjs4Q0FDM0MsNEVBQUN0QyxxRUFBUTt3Q0FBQ2tELE9BQU8sRUFBRXZCLFFBQVE7a0RBQ3pCLDRFQUFDd0IsSUFBRTs0Q0FBQ2IsU0FBUyxFQUFDLFdBQVc7c0RBQUMsY0FBWTs7Ozs7aURBQUs7Ozs7OzZDQUNsQzs7Ozs7eUNBQ1A7Ozs7OztpQ0FDRjs7Ozs7NkJBQ0Q7OzRCQUNOOzs7Ozs7YUFDQyxDQUNOO0NBQ0g7R0FsSUtuQyxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFvSWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL2luZGV4LnRzeD9kYzVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmV3Q2FyZFwiO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IHNlY3Rpb25zLCBzb2NpYWxNZWRpYSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE15QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL015QnV0dG9uL015QnV0dG9uXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xuXG5pbnRlcmZhY2UgTmV3SW5mbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNURVAgPSA5O1xuXG5jb25zdCBOZXdzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZTxOZXdJbmZvW10+KFtdKTtcbiAgY29uc3QgW2Zyb20sIHNldEZyb21dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoOSk7XG5cbiAgY29uc3Qgc2V0TmV3c0NhbGwgPSAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSA9PiB7XG4gICAgZ2V0TmV3cyhmcm9tLCB0bywgc2VhcmNoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlczogXCIsIHJlcyk7XG4gICAgICAgIGNvbnN0IGF1eCA9IHJlcz8ubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZSB9KSA9PiAoe1xuICAgICAgICAgIGlkOiBfaWQsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgc3VidGl0bGUsXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKGF1eCkgc2V0TmV3cyhbLi4ubmV3cywgLi4uYXV4XSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRGcm9tKGZyb20gKyBTVEVQKTtcbiAgICBzZXRUbyh0byArIFNURVApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJsb2FkIG1vcmVcIik7XG4gICAgc2V0TmV3c0NhbGwoZnJvbSwgdG8pO1xuICB9LCBbZnJvbSwgdG9dKTtcblxuICBjb25zdCBzZXROZXdzU2VhcmNoID0gKGZyb206IG51bWJlciwgdG86IG51bWJlciwgc2VhcmNoOiBzdHJpbmcpID0+IHtcbiAgICBnZXROZXdzKGZyb20sIHRvLCBzZWFyY2gpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzOiBcIiwgcmVzKTtcbiAgICAgICAgY29uc3QgYXV4ID0gcmVzPy5tYXAoKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIGltYWdlIH0pID0+ICh7XG4gICAgICAgICAgaWQ6IF9pZCxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBzdWJ0aXRsZSxcbiAgICAgICAgICBpbWFnZSxcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoYXV4KSBzZXROZXdzKGF1eCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZyb20oMCk7XG4gICAgc2V0VG8oOSk7XG4gICAgc2V0TmV3c1NlYXJjaChmcm9tLCB0bywgc2VhcmNoKTtcbiAgfSwgW3NlYXJjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IFBhY2lmaWNvIEJhc3F1ZXQgPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJDbHViIFBhY2lmaWNvIEJhc3F1ZXQgI0RlY2Fub1Bhc2lvbi4gTmV1cXVlblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDw+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzaG93TWVudT17ZmFsc2V9XG4gICAgICAgICAgc2VjdGlvbnM9e3NlY3Rpb25zfVxuICAgICAgICAgIHNvY2lhbE1lZGlhPXtzb2NpYWxNZWRpYX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlYXJjaCBzZWFyY2g9e3NlYXJjaH0gc2V0U2VhcmNoPXtzZXRTZWFyY2h9IC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIG10LTQgcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIG0tYXV0b1wiPlxuICAgICAgICAgICAge25ld3MubGVuZ3RoIDw9IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHkgdy03MiBtLWF1dG8gdGV4dC1jZW50ZXIgZmxleCBoLTI0IGJnLWdvbGQtMzAwXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIFBhcmVjZSBxdWUgbm8gZW5jb250cmFtb3MgbmFkYSBwYXJlY2lkbywgcHJvYmEgY29uIG90cmFcbiAgICAgICAgICAgICAgICAgIGJ1c3F1ZWRhXG4gICAgICAgICAgICAgICAgPC9oMz57XCIgXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTIgZmxleC13cmFwIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtuZXdzLm1hcCgoeyBpbWFnZSwgaWQsIHRpdGxlLCBzdWJ0aXRsZSB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB3ID1cbiAgICAgICAgICAgICAgICAgICAgKGkgKyAxKSAlIDUgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiYXNpcy0xLzEgbWQ6YmFzaXMtMi8yIGxnOmJhc2lzLTIvM1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJhc2lzLTEvMSBtZDpiYXNpcy0xLzIgbGc6YmFzaXMtMS8zXCI7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtEYXRlLm5vdygpICsgaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHAtMiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiAke3d9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxOZXdDYXJkIHRpdGxlPXt0aXRsZX0gaWQ9e2lkfSBrZXk9e0RhdGUubm93KCkgKyBpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBoLTk2IHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXRyLTJ4bCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgYmctb3BhY2l0eS04MCBib3JkZXItdC02IGJvcmRlci15ZWxsb3cgYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsIGgtMjAgZmxleCBmbGV4LWNvbCBwbGFjZS1pdGVtcy1jZW50ZXIgZHJvcC1zaGFkb3cteGwgc2hhZG93LXdoaXRlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L05ld0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX17XCIgXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZml0IG1iLTggcGItOCBwdC04XCI+XG4gICAgICAgICAgICAgIDxNeUJ1dHRvbiBvbkNsaWNrPXtsb2FkTW9yZX0+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPiBDYXJnYXIgbWFzIDwvaDQ+XG4gICAgICAgICAgICAgIDwvTXlCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzUGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIk5ld0NhcmQiLCJnZXROZXdzIiwic2VjdGlvbnMiLCJzb2NpYWxNZWRpYSIsIkltYWdlIiwiTXlCdXR0b24iLCJTZWFyY2giLCJTVEVQIiwiTmV3c1BhZ2UiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJuZXdzIiwic2V0TmV3cyIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInNldE5ld3NDYWxsIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJhdXgiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW1hZ2UiLCJpZCIsImNhdGNoIiwiZSIsImVycm9yIiwibG9hZE1vcmUiLCJzZXROZXdzU2VhcmNoIiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzaG93TWVudSIsIm1haW4iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJoMyIsImkiLCJ3Iiwic3JjIiwibGF5b3V0IiwiYWx0IiwiaDUiLCJwIiwiRGF0ZSIsIm5vdyIsIm9uQ2xpY2siLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ })

});