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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingSpinner */ \"./components/LoadingSpinner/index.ts\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n // requires a loader\n\n\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            setMainNews(res);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new pt-10\",\n        children: mainNews && mainNews.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n            children: mainNews.map(function(mNew) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        src: mNew.image,\n                        layout: \"fill\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this)\n                }, mNew.image, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 15\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3MvTmV3cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQW1EO0FBQ2E7QUFDakI7QUFDZ0IsQ0FBQyxvQkFBb0I7QUFDL0I7QUFDdEI7QUFFL0IsSUFBTVEsSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQWdDTixHQUFvQixHQUFwQkEsK0NBQVEsRUFBWSxFQUE3Q08sUUFBUSxHQUFpQlAsR0FBb0IsR0FBckMsRUFBRVEsV0FBVyxHQUFJUixHQUFvQixHQUF4QjtJQUU1QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTUUsT0FBTzt1QkFBRyw0UEFBWTtvQkFDcEJRLEdBQUc7Ozs7O21DQUFTUCxtREFBVSxFQUFFOzs0QkFBeEJPLEdBQUcsWUFBcUI7NEJBQzlCRCxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7YUFDbEI7NEJBSEtSLE9BQU87OztXQUdaO1FBQ0RBLE9BQU8sRUFBRSxDQUFDO0tBQ1gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7a0JBQzVCSixRQUFRLElBQUlBLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHLENBQUMsaUJBQzlCLDhEQUFDUiwrREFBUTtzQkFDTkcsUUFBUSxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO2dCQUN0QixxQkFDRSw4REFBQ0osS0FBRztvQkFBa0JDLFNBQVMsRUFBQyxRQUFROzhCQUN0Qyw0RUFBQ04sbURBQUs7d0JBQUNVLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQUFLO3dCQUFFQyxNQUFNLEVBQUMsTUFBTTs7Ozs7NkJBQUc7bUJBRGhDSCxJQUFJLENBQUNFLEtBQUs7Ozs7eUJBRWQsQ0FDTjthQUNILENBQUM7Ozs7O2lCQUNPLGlCQUVYLDhEQUFDYix1REFBYzs7OztpQkFBRzs7Ozs7YUFFaEIsQ0FDTjtDQUNIO0dBNUJLRyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE4QlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld3MvTmV3cy50c3g/ZDJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBpTmV3LCBnZXROZXdzIGFzIGdldE5ld3NBcGkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL0xvYWRpbmdTcGlubmVyXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IE5ld3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttYWluTmV3cywgc2V0TWFpbk5ld3NdID0gdXNlU3RhdGU8QXBpTmV3W10+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXROZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TmV3c0FwaSgpO1xuICAgICAgc2V0TWFpbk5ld3MocmVzKTtcbiAgICB9O1xuICAgIGdldE5ld3MoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5ldyBwdC0xMFwiPlxuICAgICAge21haW5OZXdzICYmIG1haW5OZXdzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICB7bWFpbk5ld3MubWFwKChtTmV3KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17bU5ldy5pbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17bU5ldy5pbWFnZX0gbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldE5ld3MiLCJnZXROZXdzQXBpIiwiTG9hZGluZ1NwaW5uZXIiLCJDYXJvdXNlbCIsIkltYWdlIiwiTmV3cyIsIm1haW5OZXdzIiwic2V0TWFpbk5ld3MiLCJyZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJtTmV3Iiwic3JjIiwiaW1hZ2UiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});