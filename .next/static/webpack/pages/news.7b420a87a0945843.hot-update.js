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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar STEP = 10;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10), to = ref2[0], setTo = ref2[1];\n    var setNewsCall = function(from, to) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getNews)(0, 10).then(function(res) {\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            setNews(aux);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNewsCall();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" \"\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, _this);\n};\n_s(NewsPage, \"WOuVA7L5pgj4eWfv2UcWpsJFzRw=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQW1EO0FBQ1Q7QUFTMUMsSUFBTUksSUFBSSxHQUFHLEVBQUU7QUFFZixJQUFNQyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBd0JILEdBQXVCLEdBQXZCQSwrQ0FBUSxDQUFZLEVBQUUsQ0FBQyxFQUF4Q0ksSUFBSSxHQUFhSixHQUF1QixHQUFwQyxFQUFFSyxPQUFPLEdBQUlMLEdBQXVCLEdBQTNCO0lBQ3BCLElBQXdCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTVCTSxJQUFJLEdBQWFOLElBQVcsR0FBeEIsRUFBRU8sT0FBTyxHQUFJUCxJQUFXLEdBQWY7SUFDcEIsSUFBb0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBekJRLEVBQUUsR0FBV1IsSUFBWSxHQUF2QixFQUFFUyxLQUFLLEdBQUlULElBQVksR0FBaEI7SUFFaEIsSUFBTVUsV0FBVyxHQUFHLFNBQUNKLElBQVksRUFBRUUsRUFBVSxFQUFLO1FBQ2hEUCxtREFBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUMzQixJQUFNQyxHQUFHLEdBQUdELEdBQUcsYUFBSEEsR0FBRyxXQUFLLEdBQVJBLEtBQUFBLENBQVEsR0FBUkEsR0FBRyxDQUFFRSxHQUFHLENBQUM7b0JBQUdDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt1QkFBUTtvQkFDekRDLEVBQUUsRUFBRUosR0FBRztvQkFDUEMsS0FBSyxFQUFMQSxLQUFLO29CQUNMQyxRQUFRLEVBQVJBLFFBQVE7b0JBQ1JDLEtBQUssRUFBTEEsS0FBSztpQkFDTjthQUFDLENBQUM7WUFDSGIsT0FBTyxDQUFDUSxHQUFHLENBQUMsQ0FBQztTQUNkLENBQUMsQ0FBQztLQUNKO0lBRURkLGdEQUFTLENBQUMsV0FBTTtRQUNkVyxXQUFXLEVBQUUsQ0FBQztLQUNmLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ1UsS0FBRztrQkFBQyxHQUFDOzs7OzthQUFNLENBQUM7Q0FDckI7R0F0QktqQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF3QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL2luZGV4LnRzeD9kYzVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXROZXdzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiO1xuXG5pbnRlcmZhY2UgTmV3SW5mbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNURVAgPSAxMDtcblxuY29uc3QgTmV3c1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlPE5ld0luZm9bXT4oW10pO1xuICBjb25zdCBbZnJvbSwgc2V0RnJvbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3Qgc2V0TmV3c0NhbGwgPSAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSA9PiB7XG4gICAgZ2V0TmV3cygwLCAxMCkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCBhdXggPSByZXM/Lm1hcCgoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2UgfSkgPT4gKHtcbiAgICAgICAgaWQ6IF9pZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHN1YnRpdGxlLFxuICAgICAgICBpbWFnZSxcbiAgICAgIH0pKTtcbiAgICAgIHNldE5ld3MoYXV4KTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5ld3NDYWxsKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj4gPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldE5ld3MiLCJTVEVQIiwiTmV3c1BhZ2UiLCJuZXdzIiwic2V0TmV3cyIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInNldE5ld3NDYWxsIiwidGhlbiIsInJlcyIsImF1eCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZSIsImlkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ })

});