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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingSpinner */ \"./components/LoadingSpinner/index.ts\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n // requires a loader\n\n\n\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            setMainNews(res);\n                            console.log(mainNews);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new pt-10 h-92 w-full rounded-xl overflow-hidden\",\n        children: mainNews ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n            swipeable: true,\n            stopOnHover: true,\n            showIndicators: true,\n            axis: \"horizontal\",\n            className: \"shadow rounded-xl overflow-hidden\",\n            children: mainNews.map(function(mNew) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    href: \"/news/\" + mNew.title,\n                    target: \"_blank\",\n                    className: \"w-full h-92 shadow relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"rounded-xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                src: mNew.image,\n                                layout: \"responsive\",\n                                height: 500,\n                                width: 500,\n                                alt: mNew.subtitle\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"rounded-t-xl bg-transparent w-full h-fit shadow absolute bottom-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"text-4xl drop-shadow-xl text-center text-shadow mb-8 font-bold text-white\",\n                                    children: [\n                                        \" \",\n                                        mNew.title,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this)\n                }, mNew.image, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 15\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3MvTmV3cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBbUQ7QUFDYTtBQUNqQjtBQUNnQixDQUFDLG9CQUFvQjtBQUMvQjtBQUN0QjtBQUNGO0FBRTdCLElBQU1TLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFnQ1AsR0FBb0IsR0FBcEJBLCtDQUFRLEVBQVksRUFBN0NRLFFBQVEsR0FBaUJSLEdBQW9CLEdBQXJDLEVBQUVTLFdBQVcsR0FBSVQsR0FBb0IsR0FBeEI7SUFFNUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1FLE9BQU87dUJBQUcsNFBBQVk7b0JBQ3BCUyxHQUFHOzs7OzttQ0FBU1IsbURBQVUsRUFBRTs7NEJBQXhCUSxHQUFHLFlBQXFCOzRCQUM5QkQsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQzs0QkFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixRQUFRLENBQUMsQ0FBQzs7Ozs7O2FBQ3ZCOzRCQUpLUCxPQUFPOzs7V0FJWjtRQUNEQSxPQUFPLEVBQUUsQ0FBQztLQUNYLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ1ksS0FBRztRQUFDQyxTQUFTLEVBQUMsdURBQXVEO2tCQUNuRU4sUUFBUSxpQkFDUCw4REFBQ0osK0RBQVE7WUFDUFcsU0FBUztZQUNUQyxXQUFXO1lBQ1hDLGNBQWM7WUFDZEMsSUFBSSxFQUFDLFlBQVk7WUFDakJKLFNBQVMsRUFBQyxtQ0FBbUM7c0JBRTVDTixRQUFRLENBQUNXLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7Z0JBQ3RCLHFCQUNFLDhEQUFDZCxrREFBSTtvQkFDSGUsSUFBSSxFQUFFLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxLQUFLO29CQUUzQkMsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZULFNBQVMsRUFBQyw2QkFBNkI7OEJBRXZDLDRFQUFDVSxHQUFDO3dCQUFDVixTQUFTLEVBQUMsNEJBQTRCOzswQ0FDdkMsOERBQUNULG1EQUFLO2dDQUNKb0IsR0FBRyxFQUFFTCxJQUFJLENBQUNNLEtBQUs7Z0NBQ2ZDLE1BQU0sRUFBQyxZQUFZO2dDQUNuQkMsTUFBTSxFQUFFLEdBQUc7Z0NBQ1hDLEtBQUssRUFBRSxHQUFHO2dDQUNWQyxHQUFHLEVBQUVWLElBQUksQ0FBQ1csUUFBUTs7Ozs7cUNBQ2xCOzBDQUNGLDhEQUFDbEIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLG1FQUFtRTswQ0FDaEYsNEVBQUNrQixJQUFFO29DQUFDbEIsU0FBUyxFQUFDLDJFQUEyRTs7d0NBQ3RGLEdBQUc7d0NBQ0hNLElBQUksQ0FBQ0UsS0FBSzt3Q0FBRSxHQUFHOzs7Ozs7eUNBQ2I7Ozs7O3FDQUNEOzs7Ozs7NkJBQ0o7bUJBbEJDRixJQUFJLENBQUNNLEtBQUs7Ozs7eUJBbUJWLENBQ1A7YUFDSCxDQUFDOzs7OztpQkFDTyxpQkFFWCw4REFBQ3ZCLHVEQUFjOzs7O2lCQUFHOzs7OzthQUVoQixDQUNOO0NBQ0g7R0F0REtJLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXdEViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLnRzeD9kMmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcGlOZXcsIGdldE5ld3MgYXMgZ2V0TmV3c0FwaSB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXJcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmV3cyA9ICgpID0+IHtcbiAgY29uc3QgW21haW5OZXdzLCBzZXRNYWluTmV3c10gPSB1c2VTdGF0ZTxBcGlOZXdbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5ld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXROZXdzQXBpKCk7XG4gICAgICBzZXRNYWluTmV3cyhyZXMpO1xuICAgICAgY29uc29sZS5sb2cobWFpbk5ld3MpO1xuICAgIH07XG4gICAgZ2V0TmV3cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmV3IHB0LTEwIGgtOTIgdy1mdWxsIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICB7bWFpbk5ld3MgPyAoXG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIHN3aXBlYWJsZVxuICAgICAgICAgIHN0b3BPbkhvdmVyXG4gICAgICAgICAgc2hvd0luZGljYXRvcnNcbiAgICAgICAgICBheGlzPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIHttYWluTmV3cy5tYXAoKG1OZXcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17XCIvbmV3cy9cIiArIG1OZXcudGl0bGV9XG4gICAgICAgICAgICAgICAga2V5PXttTmV3LmltYWdlfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTIgc2hhZG93IHJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttTmV3LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bU5ldy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bCBiZy10cmFuc3BhcmVudCB3LWZ1bGwgaC1maXQgc2hhZG93IGFic29sdXRlIGJvdHRvbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBkcm9wLXNoYWRvdy14bCB0ZXh0LWNlbnRlciB0ZXh0LXNoYWRvdyBtYi04IGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHttTmV3LnRpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldE5ld3MiLCJnZXROZXdzQXBpIiwiTG9hZGluZ1NwaW5uZXIiLCJDYXJvdXNlbCIsIkltYWdlIiwiTGluayIsIk5ld3MiLCJtYWluTmV3cyIsInNldE1haW5OZXdzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInN3aXBlYWJsZSIsInN0b3BPbkhvdmVyIiwic2hvd0luZGljYXRvcnMiLCJheGlzIiwibWFwIiwibU5ldyIsImhyZWYiLCJ0aXRsZSIsInRhcmdldCIsImEiLCJzcmMiLCJpbWFnZSIsImxheW91dCIsImhlaWdodCIsIndpZHRoIiwiYWx0Iiwic3VidGl0bGUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});