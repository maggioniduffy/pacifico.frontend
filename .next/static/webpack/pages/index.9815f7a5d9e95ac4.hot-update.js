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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingSpinner */ \"./components/LoadingSpinner/index.ts\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n // requires a loader\n\n\n\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            setMainNews(res);\n                            console.log(mainNews);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new pt-10 w-full rounded-xl\",\n        children: mainNews ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                    swipeable: true,\n                    stopOnHover: true,\n                    dynamicHeight: true,\n                    showIndicators: true,\n                    autoPlay: true,\n                    infiniteLoop: true,\n                    emulateTouch: true,\n                    axis: \"horizontal\",\n                    className: \"shadow rounded-xl overflow-hidden h-fit\",\n                    children: mainNews.map(function(mNew) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            href: {\n                                pathname: \"/news/[title]\",\n                                query: {\n                                    title: mNew.title,\n                                    id: mNew._id\n                                }\n                            },\n                            target: \"_blank\",\n                            className: \"w-full h-full shadow relative rounded-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"rounded-xl h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-full rounded-xl\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            src: mNew.image,\n                                            layout: \"responsive\",\n                                            height: 9,\n                                            width: 16,\n                                            alt: mNew.subtitle\n                                        }, void 0, false, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"rounded-t-xl w-full h-fit absolute bottom-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                className: \"text-4xl drop-shadow-xl text-center text-shadow font-bold text-white\",\n                                                children: [\n                                                    \" \",\n                                                    mNew.title,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"text-xl drop-shadow-xl text-center text-shadow mb-8 font-medium text-white\",\n                                                children: mNew.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 19\n                            }, _this)\n                        }, mNew.image, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    href: \"/news\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"bg-white w-full h-12 font-bold text-black rounded shadow shadow-yellow\",\n                        children: [\n                            \" \",\n                            \"Ver todas las noticias\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 82,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld3MvTmV3cy50c3g/ZDJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBpTmV3LCBnZXROZXdzIGFzIGdldE5ld3NBcGkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL0xvYWRpbmdTcGlubmVyXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE5ld3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttYWluTmV3cywgc2V0TWFpbk5ld3NdID0gdXNlU3RhdGU8QXBpTmV3W10+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXROZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TmV3c0FwaSgpO1xuICAgICAgc2V0TWFpbk5ld3MocmVzKTtcbiAgICAgIGNvbnNvbGUubG9nKG1haW5OZXdzKTtcbiAgICB9O1xuICAgIGdldE5ld3MoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5ldyBwdC0xMCB3LWZ1bGwgcm91bmRlZC14bFwiPlxuICAgICAge21haW5OZXdzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgc3dpcGVhYmxlXG4gICAgICAgICAgICBzdG9wT25Ib3ZlclxuICAgICAgICAgICAgZHluYW1pY0hlaWdodFxuICAgICAgICAgICAgc2hvd0luZGljYXRvcnNcbiAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICBpbmZpbml0ZUxvb3BcbiAgICAgICAgICAgIGVtdWxhdGVUb3VjaFxuICAgICAgICAgICAgYXhpcz1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGgtZml0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWFpbk5ld3MubWFwKChtTmV3KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL25ld3MvW3RpdGxlXVwiLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtTmV3LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBtTmV3Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e21OZXcuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBzaGFkb3cgcmVsYXRpdmUgcm91bmRlZC14bFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicm91bmRlZC14bCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bU5ldy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXttTmV3LnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bCB3LWZ1bGwgaC1maXQgYWJzb2x1dGUgYm90dG9tLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZHJvcC1zaGFkb3cteGwgdGV4dC1jZW50ZXIgdGV4dC1zaGFkb3cgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttTmV3LnRpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZHJvcC1zaGFkb3cteGwgdGV4dC1jZW50ZXIgdGV4dC1zaGFkb3cgbWItOCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bU5ldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgaC0xMiBmb250LWJvbGQgdGV4dC1ibGFjayByb3VuZGVkIHNoYWRvdyBzaGFkb3cteWVsbG93XCI+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgVmVyIHRvZGFzIGxhcyBub3RpY2lhc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXROZXdzIiwiZ2V0TmV3c0FwaSIsIkxvYWRpbmdTcGlubmVyIiwiQ2Fyb3VzZWwiLCJJbWFnZSIsIkxpbmsiLCJOZXdzIiwibWFpbk5ld3MiLCJzZXRNYWluTmV3cyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzd2lwZWFibGUiLCJzdG9wT25Ib3ZlciIsImR5bmFtaWNIZWlnaHQiLCJzaG93SW5kaWNhdG9ycyIsImF1dG9QbGF5IiwiaW5maW5pdGVMb29wIiwiZW11bGF0ZVRvdWNoIiwiYXhpcyIsIm1hcCIsIm1OZXciLCJocmVmIiwicGF0aG5hbWUiLCJxdWVyeSIsInRpdGxlIiwiaWQiLCJfaWQiLCJ0YXJnZXQiLCJhIiwic3JjIiwiaW1hZ2UiLCJsYXlvdXQiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsInN1YnRpdGxlIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});