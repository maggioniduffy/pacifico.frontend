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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingSpinner */ \"./components/LoadingSpinner/index.ts\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n // requires a loader\n\n\n\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            setMainNews(res);\n                            console.log(mainNews);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new pt-10 w-full rounded-xl\",\n        children: mainNews ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                    swipeable: true,\n                    stopOnHover: true,\n                    dynamicHeight: true,\n                    showIndicators: true,\n                    autoPlay: true,\n                    infiniteLoop: true,\n                    emulateTouch: true,\n                    showStatus: true,\n                    showArrows: true,\n                    axis: \"horizontal\",\n                    className: \"overflow-hidden h-fit\",\n                    children: mainNews.map(function(mNew) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            href: {\n                                pathname: \"/news/[title]\",\n                                query: {\n                                    title: mNew.title,\n                                    id: mNew._id\n                                }\n                            },\n                            target: \"_blank\",\n                            className: \"w-full h-full relative rounded-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"rounded-xl h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-full rounded-xl\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            src: mNew.image,\n                                            layout: \"responsive\",\n                                            height: 9,\n                                            width: 16,\n                                            alt: mNew.subtitle\n                                        }, void 0, false, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 21\n                                    }, _this),\n                                    \"\\\\\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"rounded-t-xl bg-realwhite border-t-4 border-yellow w-full h-fit absolute bottom-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                className: \"text-4xl drop-shadow-xl mt-2 text-center text-shadow text-black\",\n                                                children: [\n                                                    \" \",\n                                                    mNew.title,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"text-xl drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray\",\n                                                children: mNew.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 19\n                            }, _this)\n                        }, mNew.image, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    href: \"/news\",\n                    className: \"w-full h-12 mt-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"bg-realwhite rounded p-2 shadow shadow-yellow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                className: \"text-black\",\n                                children: \" Ver todas las noticias\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsWUFBWTswQ0FBQyx5QkFBdUI7Ozs7O3FDQUFLOzs7OztpQ0FDaEQ7Ozs7OzZCQUNMOzs7Ozt5QkFDRDs7d0JBQ04saUJBRUgsOERBQUNYLHVEQUFjOzs7O2lCQUFHOzs7OzthQUVoQixDQUNOO0NBQ0g7R0FqRktJLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQW1GViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLnRzeD9kMmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcGlOZXcsIGdldE5ld3MgYXMgZ2V0TmV3c0FwaSB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXJcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmV3cyA9ICgpID0+IHtcbiAgY29uc3QgW21haW5OZXdzLCBzZXRNYWluTmV3c10gPSB1c2VTdGF0ZTxBcGlOZXdbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5ld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXROZXdzQXBpKCk7XG4gICAgICBzZXRNYWluTmV3cyhyZXMpO1xuICAgICAgY29uc29sZS5sb2cobWFpbk5ld3MpO1xuICAgIH07XG4gICAgZ2V0TmV3cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmV3IHB0LTEwIHctZnVsbCByb3VuZGVkLXhsXCI+XG4gICAgICB7bWFpbk5ld3MgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICBzd2lwZWFibGVcbiAgICAgICAgICAgIHN0b3BPbkhvdmVyXG4gICAgICAgICAgICBkeW5hbWljSGVpZ2h0XG4gICAgICAgICAgICBzaG93SW5kaWNhdG9yc1xuICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgIGluZmluaXRlTG9vcFxuICAgICAgICAgICAgZW11bGF0ZVRvdWNoXG4gICAgICAgICAgICBzaG93U3RhdHVzXG4gICAgICAgICAgICBzaG93QXJyb3dzXG4gICAgICAgICAgICBheGlzPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gaC1maXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttYWluTmV3cy5tYXAoKG1OZXcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvbmV3cy9bdGl0bGVdXCIsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1OZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IG1OZXcuX2lkLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17bU5ldy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21OZXcuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bU5ldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXFxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQteGwgYmctcmVhbHdoaXRlIGJvcmRlci10LTQgYm9yZGVyLXllbGxvdyB3LWZ1bGwgaC1maXQgYWJzb2x1dGUgYm90dG9tLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZHJvcC1zaGFkb3cteGwgbXQtMiB0ZXh0LWNlbnRlciB0ZXh0LXNoYWRvdyB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bU5ldy50aXRsZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRyb3Atc2hhZG93LXhsIHRleHQtY2VudGVyIHRleHQtc2hhZG93IG1iLTggZm9udC1tZWRpdW0gdGV4dC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bU5ldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgbXQtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlYWx3aGl0ZSByb3VuZGVkIHAtMiBzaGFkb3cgc2hhZG93LXllbGxvd1wiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+IFZlciB0b2RhcyBsYXMgbm90aWNpYXM8L2g0PlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXROZXdzIiwiZ2V0TmV3c0FwaSIsIkxvYWRpbmdTcGlubmVyIiwiQ2Fyb3VzZWwiLCJJbWFnZSIsIkxpbmsiLCJOZXdzIiwibWFpbk5ld3MiLCJzZXRNYWluTmV3cyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzd2lwZWFibGUiLCJzdG9wT25Ib3ZlciIsImR5bmFtaWNIZWlnaHQiLCJzaG93SW5kaWNhdG9ycyIsImF1dG9QbGF5IiwiaW5maW5pdGVMb29wIiwiZW11bGF0ZVRvdWNoIiwic2hvd1N0YXR1cyIsInNob3dBcnJvd3MiLCJheGlzIiwibWFwIiwibU5ldyIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5IiwidGl0bGUiLCJpZCIsIl9pZCIsInRhcmdldCIsImEiLCJzcmMiLCJpbWFnZSIsImxheW91dCIsImhlaWdodCIsIndpZHRoIiwiYWx0Iiwic3VidGl0bGUiLCJoMiIsInAiLCJidXR0b24iLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});