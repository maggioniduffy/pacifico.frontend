"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/News/News.tsx":
/*!**********************************!*\
  !*** ./components/News/News.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _MyButton_MyButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyButton/MyButton */ \"./components/MyButton/MyButton.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks */ \"./hooks/index.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n // requires a loader\n\n\n\n\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useWindowDimensions)(), height = ref1.height, width = ref1.width;\n    var h = width > 768 ? 9 : 16;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            setMainNews(res);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"pt-10 rounded-xl\",\n        children: mainNews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: {\n                        pathname: \"/news/[title]\",\n                        query: {\n                            title: mainNews[0].title,\n                            id: mainNews[0]._id\n                        }\n                    },\n                    target: \"_blank\",\n                    className: \"w-96 h-56 shadow-xl m-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"rounded-xl h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-full h-full rounded-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: mainNews[0].image,\n                                    layout: \"responsive\",\n                                    height: h,\n                                    width: 16,\n                                    quality: 100,\n                                    alt: mainNews[0].subtitle\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit shadow-inner bottom-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        className: \"font-bold drop-shadow-xl mt-2 text-center text-shadow text-black\",\n                                        children: [\n                                            \" \",\n                                            mainNews[0].title,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-xs drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray\",\n                                        children: mainNews[0].subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, _this)\n                }, mainNews[0].image, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex w-full mb-4 space-x-1 overflow-x-auto\",\n                    children: mainNews === null || mainNews === void 0 ? void 0 : mainNews.slice(1).map(function(mNew) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: {\n                                pathname: \"/news/[title]\",\n                                query: {\n                                    title: mNew.title,\n                                    id: mNew._id\n                                }\n                            },\n                            target: \"_blank\",\n                            className: \"w-96 h-96 shadow-xl m-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"rounded-xl h-full w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-full rounded-xl\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: mNew.image,\n                                            layout: \"fixed\",\n                                            height: 9 * 18,\n                                            width: 16 * 18,\n                                            quality: 100,\n                                            alt: mNew.subtitle,\n                                            className: \"object-fill\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit shadow-inner bottom-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                className: \"font-bold drop-shadow-xl mt-2 text-center text-shadow text-black\",\n                                                children: [\n                                                    \" \",\n                                                    mNew.title,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"text-xs drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray\",\n                                                children: mNew.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 19\n                            }, _this)\n                        }, mNew.image, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, _this),\n                mainNews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/news\",\n                    className: \"w-full h-12 mt-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MyButton_MyButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                className: \"text-xs md:text-sm\",\n                                children: \"Ver todas las noticias\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"OolU5g1ErUS1CvuOoGYkGXXEt40=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_8__.useWindowDimensions\n    ];\n});\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUNDLFNBQVMsRUFBQyw0QkFBNEI7a0NBQ3pDLDRFQUFDViwwREFBUTtzQ0FDUCw0RUFBQzhCLElBQUU7Z0NBQUNwQixTQUFTLEVBQUMsb0JBQW9COzBDQUFDLHdCQUFzQjs7Ozs7cUNBQUs7Ozs7O2lDQUNyRDs7Ozs7NkJBQ1A7Ozs7O3lCQUNEOzt3QkFFUjs7Ozs7YUFFRCxDQUNOO0NBQ0g7R0F6R0tSLElBQUk7O1FBRWtCRCx1REFBbUI7OztBQUZ6Q0MsS0FBQUEsSUFBSTtBQTJHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLnRzeD9kMmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcGlOZXcsIGdldE5ld3MgYXMgZ2V0TmV3c0FwaSB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXJcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNeUJ1dHRvbiBmcm9tIFwiLi4vTXlCdXR0b24vTXlCdXR0b25cIjtcbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbnMgfSBmcm9tIFwiLi4vLi4vaG9va3NcIjtcblxuY29uc3QgTmV3cyA9ICgpID0+IHtcbiAgY29uc3QgW21haW5OZXdzLCBzZXRNYWluTmV3c10gPSB1c2VTdGF0ZTxBcGlOZXdbXT4oKTtcbiAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG4gIGxldCBoID0gd2lkdGggPiA3NjggPyA5IDogMTY7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXROZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TmV3c0FwaSgpO1xuICAgICAgc2V0TWFpbk5ld3MocmVzKTtcbiAgICB9O1xuICAgIGdldE5ld3MoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCByb3VuZGVkLXhsXCI+XG4gICAgICB7bWFpbk5ld3MgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9uZXdzL1t0aXRsZV1cIixcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbWFpbk5ld3NbMF0udGl0bGUsXG4gICAgICAgICAgICAgICAgaWQ6IG1haW5OZXdzWzBdLl9pZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXk9e21haW5OZXdzWzBdLmltYWdlfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOTYgaC01NiBzaGFkb3cteGwgbS00XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXttYWluTmV3c1swXS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtofVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICAgICAgYWx0PXttYWluTmV3c1swXS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgYmctb3BhY2l0eS04MCBib3JkZXItdC02IGJvcmRlci15ZWxsb3cgdy1mdWxsIGgtZml0IHNoYWRvdy1pbm5lciBib3R0b20tMFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgIGRyb3Atc2hhZG93LXhsIG10LTIgdGV4dC1jZW50ZXIgdGV4dC1zaGFkb3cgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAge21haW5OZXdzWzBdLnRpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZHJvcC1zaGFkb3cteGwgdGV4dC1jZW50ZXIgdGV4dC1zaGFkb3cgbWItOCBmb250LW1lZGl1bSB0ZXh0LWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIHttYWluTmV3c1swXS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIG1iLTQgc3BhY2UteC0xIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAge21haW5OZXdzPy5zbGljZSgxKS5tYXAoKG1OZXcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvbmV3cy9bdGl0bGVdXCIsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1OZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IG1OZXcuX2lkLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17bU5ldy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTk2IGgtOTYgc2hhZG93LXhsIG0tNFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicm91bmRlZC14bCBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21OZXcuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezkgKiAxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNiAqIDE4fVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXttTmV3LnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIGJvcmRlci10LTYgYm9yZGVyLXllbGxvdyB3LWZ1bGwgaC1maXQgc2hhZG93LWlubmVyIGJvdHRvbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCAgZHJvcC1zaGFkb3cteGwgbXQtMiB0ZXh0LWNlbnRlciB0ZXh0LXNoYWRvdyB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bU5ldy50aXRsZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGRyb3Atc2hhZG93LXhsIHRleHQtY2VudGVyIHRleHQtc2hhZG93IG1iLTggZm9udC1tZWRpdW0gdGV4dC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bU5ldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHttYWluTmV3cyAmJiAoXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiBtdC0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TXlCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LXNtXCI+VmVyIHRvZGFzIGxhcyBub3RpY2lhczwvaDQ+XG4gICAgICAgICAgICAgICAgPC9NeUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TmV3cyIsImdldE5ld3NBcGkiLCJJbWFnZSIsIkxpbmsiLCJNeUJ1dHRvbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJOZXdzIiwibWFpbk5ld3MiLCJzZXRNYWluTmV3cyIsImhlaWdodCIsIndpZHRoIiwiaCIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5IiwidGl0bGUiLCJpZCIsIl9pZCIsInRhcmdldCIsImEiLCJzcmMiLCJpbWFnZSIsImxheW91dCIsInF1YWxpdHkiLCJhbHQiLCJzdWJ0aXRsZSIsImgyIiwicCIsInNsaWNlIiwibWFwIiwibU5ldyIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});