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

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CustomLink\": function() { return /* reexport safe */ _CustomLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"Fixture\": function() { return /* reexport safe */ _Fixture__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   \"Header\": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"Historia\": function() { return /* reexport safe */ _Historia__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"LoadingSpinner\": function() { return /* reexport safe */ _LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"News\": function() { return /* reexport safe */ _News__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"Newsletter\": function() { return /* reexport safe */ _Newsletter__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   \"Section\": function() { return /* reexport safe */ _Section__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Team\": function() { return /* reexport safe */ _Team__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"Videos\": function() { return /* reexport safe */ _VIdeos__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section */ \"./components/Section/index.ts\");\n/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomLink */ \"./components/CustomLink/index.ts\");\n/* harmony import */ var _Historia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Historia */ \"./components/Historia/index.ts\");\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./News */ \"./components/News/index.ts\");\n/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Newsletter */ \"./components/Newsletter/index.ts\");\n/* harmony import */ var _Fixture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fixture */ \"./components/Fixture/index.ts\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoadingSpinner */ \"./components/LoadingSpinner/index.ts\");\n/* harmony import */ var _VIdeos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VIdeos */ \"./components/VIdeos/index.ts\");\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Team */ \"./components/Team/index.ts\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ \"./components/Footer/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRTtBQUNNO0FBQ0o7QUFDUjtBQUNZO0FBQ047QUFDYztBQUNoQjtBQUNKO0FBQ0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC50cz9mMmM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb24gfSBmcm9tIFwiLi9TZWN0aW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUxpbmsgfSBmcm9tIFwiLi9DdXN0b21MaW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhpc3RvcmlhIH0gZnJvbSBcIi4vSGlzdG9yaWFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmV3cyB9IGZyb20gXCIuL05ld3NcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmV3c2xldHRlciB9IGZyb20gXCIuL05ld3NsZXR0ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRml4dHVyZSB9IGZyb20gXCIuL0ZpeHR1cmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1NwaW5uZXIgfSBmcm9tIFwiLi9Mb2FkaW5nU3Bpbm5lclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWaWRlb3MgfSBmcm9tIFwiLi9WSWRlb3NcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVhbSB9IGZyb20gXCIuL1RlYW1cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgKiBhcyBBZG1pbiBmcm9tIFwiLi9BZG1pblwiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJIZWFkZXIiLCJTZWN0aW9uIiwiQ3VzdG9tTGluayIsIkhpc3RvcmlhIiwiTmV3cyIsIk5ld3NsZXR0ZXIiLCJGaXh0dXJlIiwiTG9hZGluZ1NwaW5uZXIiLCJWaWRlb3MiLCJUZWFtIiwiRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.ts\n"));

/***/ })

});