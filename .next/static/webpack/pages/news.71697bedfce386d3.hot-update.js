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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar STEP = 10;\nvar NewsPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), from = ref1[0], setFrom = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10), to = ref2[0], setTo = ref2[1];\n    var setNewsCall = function(from, to) {\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getNews)(0, 10).then(function(res) {\n            var aux = res === null || res === void 0 ? void 0 : res.map(function(param) {\n                var _id = param._id, title = param.title, subtitle = param.subtitle, image = param.image;\n                return {\n                    id: _id,\n                    title: title,\n                    subtitle: subtitle,\n                    image: image\n                };\n            });\n            if (aux) setNews((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(news).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(aux)));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNewsCall(from, to);\n    }, [\n        from,\n        to\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" \"\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, _this);\n};\n_s(NewsPage, \"WOuVA7L5pgj4eWfv2UcWpsJFzRw=\");\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFDVDtBQVMxQyxJQUFNSSxJQUFJLEdBQUcsRUFBRTtBQUVmLElBQU1DLFFBQVEsR0FBRyxXQUFNOztJQUNyQixJQUF3QkgsR0FBdUIsR0FBdkJBLCtDQUFRLENBQVksRUFBRSxDQUFDLEVBQXhDSSxJQUFJLEdBQWFKLEdBQXVCLEdBQXBDLEVBQUVLLE9BQU8sR0FBSUwsR0FBdUIsR0FBM0I7SUFDcEIsSUFBd0JBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBNUJNLElBQUksR0FBYU4sSUFBVyxHQUF4QixFQUFFTyxPQUFPLEdBQUlQLElBQVcsR0FBZjtJQUNwQixJQUFvQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6QlEsRUFBRSxHQUFXUixJQUFZLEdBQXZCLEVBQUVTLEtBQUssR0FBSVQsSUFBWSxHQUFoQjtJQUVoQixJQUFNVSxXQUFXLEdBQUcsU0FBQ0osSUFBWSxFQUFFRSxFQUFVLEVBQUs7UUFDaERQLG1EQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDVSxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQzNCLElBQU1DLEdBQUcsR0FBR0QsR0FBRyxhQUFIQSxHQUFHLFdBQUssR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxHQUFHLENBQUVFLEdBQUcsQ0FBQztvQkFBR0MsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO3VCQUFRO29CQUN6REMsRUFBRSxFQUFFSixHQUFHO29CQUNQQyxLQUFLLEVBQUxBLEtBQUs7b0JBQ0xDLFFBQVEsRUFBUkEsUUFBUTtvQkFDUkMsS0FBSyxFQUFMQSxLQUFLO2lCQUNOO2FBQUMsQ0FBQztZQUNILElBQUlMLEdBQUcsRUFBRVIsT0FBTyxDQUFDLHFGQUFJRCxJQUFJLENBQUpBLFFBQU0scUZBQUdTLEdBQUcsQ0FBSEEsQ0FBSSxDQUFDLENBQUM7U0FDckMsQ0FBQyxDQUFDO0tBQ0o7SUFFRGQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RXLFdBQVcsQ0FBQ0osSUFBSSxFQUFFRSxFQUFFLENBQUMsQ0FBQztLQUN2QixFQUFFO1FBQUNGLElBQUk7UUFBRUUsRUFBRTtLQUFDLENBQUMsQ0FBQztJQUVmLHFCQUFPLDhEQUFDWSxLQUFHO2tCQUFDLEdBQUM7Ozs7O2FBQU0sQ0FBQztDQUNyQjtHQXRCS2pCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXdCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvaW5kZXgudHN4P2RjNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldE5ld3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5cbmludGVyZmFjZSBOZXdJbmZvIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgU1RFUCA9IDEwO1xuXG5jb25zdCBOZXdzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGU8TmV3SW5mb1tdPihbXSk7XG4gIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKDEwKTtcblxuICBjb25zdCBzZXROZXdzQ2FsbCA9IChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpID0+IHtcbiAgICBnZXROZXdzKDAsIDEwKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGF1eCA9IHJlcz8ubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZSB9KSA9PiAoe1xuICAgICAgICBpZDogX2lkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgc3VidGl0bGUsXG4gICAgICAgIGltYWdlLFxuICAgICAgfSkpO1xuICAgICAgaWYgKGF1eCkgc2V0TmV3cyhbLi4ubmV3cywgLi4uYXV4XSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROZXdzQ2FsbChmcm9tLCB0byk7XG4gIH0sIFtmcm9tLCB0b10pO1xuXG4gIHJldHVybiA8ZGl2PiA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TmV3cyIsIlNURVAiLCJOZXdzUGFnZSIsIm5ld3MiLCJzZXROZXdzIiwiZnJvbSIsInNldEZyb20iLCJ0byIsInNldFRvIiwic2V0TmV3c0NhbGwiLCJ0aGVuIiwicmVzIiwiYXV4IiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsImltYWdlIiwiaWQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/index.tsx\n"));

/***/ })

});