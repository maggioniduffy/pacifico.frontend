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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _MyButton_MyButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MyButton/MyButton */ \"./components/MyButton/MyButton.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n // requires a loader\n\n\n\n\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            setMainNews(res);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"pt-10 w-full h-96 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                swipeable: true,\n                stopOnHover: true,\n                dynamicHeight: true,\n                showIndicators: true,\n                autoPlay: true,\n                infiniteLoop: true,\n                emulateTouch: true,\n                showStatus: true,\n                showArrows: true,\n                axis: \"horizontal\",\n                className: \"overflow-hidden h-fit rounded-xl\",\n                children: mainNews === null || mainNews === void 0 ? void 0 : mainNews.map(function(mNew) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        href: {\n                            pathname: \"/news/[title]\",\n                            query: {\n                                title: mNew.title,\n                                id: mNew._id\n                            }\n                        },\n                        target: \"_blank\",\n                        className: \"w-full h-full relative rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            className: \"rounded-xl h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-full rounded-xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: mNew.image,\n                                        layout: \"responsive\",\n                                        height: 9,\n                                        width: 16,\n                                        alt: mNew.subtitle,\n                                        className: \"rounded-xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"rounded-tr-2xl rounded-b-xl overflow-hidden bg-white bg-opacity-80 border-t-6 border-yellow w-full h-fit absolute shadow-inner bottom-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                            className: \"text-3xl drop-shadow-xl mt-2 text-center text-shadow text-black\",\n                                            children: [\n                                                \" \",\n                                                mNew.title,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"text-sm drop-shadow-xl text-center text-shadow mb-8 font-medium text-gray\",\n                                            children: mNew.subtitle\n                                        }, void 0, false, {\n                                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, _this)\n                    }, mNew.image, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: \"/news\",\n                className: \"w-full h-12 mt-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MyButton_MyButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: \"Ver todas las noticias\"\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Q7Ozs7OzthQUNILENBQ047Q0FDSDtHQTFFS25DLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTRFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLnRzeD9kMmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcGlOZXcsIGdldE5ld3MgYXMgZ2V0TmV3c0FwaSB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXJcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNeUJ1dHRvbiBmcm9tIFwiLi4vTXlCdXR0b24vTXlCdXR0b25cIjtcblxuY29uc3QgTmV3cyA9ICgpID0+IHtcbiAgY29uc3QgW21haW5OZXdzLCBzZXRNYWluTmV3c10gPSB1c2VTdGF0ZTxBcGlOZXdbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5ld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXROZXdzQXBpKCk7XG4gICAgICBzZXRNYWluTmV3cyhyZXMpO1xuICAgIH07XG4gICAgZ2V0TmV3cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHctZnVsbCBoLTk2IHJvdW5kZWQteGxcIj5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzd2lwZWFibGVcbiAgICAgICAgc3RvcE9uSG92ZXJcbiAgICAgICAgZHluYW1pY0hlaWdodFxuICAgICAgICBzaG93SW5kaWNhdG9yc1xuICAgICAgICBhdXRvUGxheVxuICAgICAgICBpbmZpbml0ZUxvb3BcbiAgICAgICAgZW11bGF0ZVRvdWNoXG4gICAgICAgIHNob3dTdGF0dXNcbiAgICAgICAgc2hvd0Fycm93c1xuICAgICAgICBheGlzPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBoLWZpdCByb3VuZGVkLXhsXCJcbiAgICAgID5cbiAgICAgICAge21haW5OZXdzPy5tYXAoKG1OZXcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9uZXdzL1t0aXRsZV1cIixcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IG1OZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICBpZDogbU5ldy5faWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXttTmV3LmltYWdlfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttTmV3LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bU5ldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10ci0yeGwgcm91bmRlZC1iLXhsIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIGJvcmRlci10LTYgYm9yZGVyLXllbGxvdyB3LWZ1bGwgaC1maXQgYWJzb2x1dGUgc2hhZG93LWlubmVyIGJvdHRvbS0wXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZHJvcC1zaGFkb3cteGwgbXQtMiB0ZXh0LWNlbnRlciB0ZXh0LXNoYWRvdyB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge21OZXcudGl0bGV9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZHJvcC1zaGFkb3cteGwgdGV4dC1jZW50ZXIgdGV4dC1zaGFkb3cgbWItOCBmb250LW1lZGl1bSB0ZXh0LWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgICAge21OZXcuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8TGluayBocmVmPVwiL25ld3NcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiBtdC0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8TXlCdXR0b24+XG4gICAgICAgICAgICA8aDQ+VmVyIHRvZGFzIGxhcyBub3RpY2lhczwvaDQ+XG4gICAgICAgICAgPC9NeUJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXROZXdzIiwiZ2V0TmV3c0FwaSIsIkNhcm91c2VsIiwiSW1hZ2UiLCJMaW5rIiwiTXlCdXR0b24iLCJOZXdzIiwibWFpbk5ld3MiLCJzZXRNYWluTmV3cyIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsInN3aXBlYWJsZSIsInN0b3BPbkhvdmVyIiwiZHluYW1pY0hlaWdodCIsInNob3dJbmRpY2F0b3JzIiwiYXV0b1BsYXkiLCJpbmZpbml0ZUxvb3AiLCJlbXVsYXRlVG91Y2giLCJzaG93U3RhdHVzIiwic2hvd0Fycm93cyIsImF4aXMiLCJtYXAiLCJtTmV3IiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJ0aXRsZSIsImlkIiwiX2lkIiwidGFyZ2V0IiwiYSIsInNyYyIsImltYWdlIiwibGF5b3V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJzdWJ0aXRsZSIsImgyIiwicCIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});