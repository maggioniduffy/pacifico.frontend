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

/***/ "./components/Header/Social.tsx":
/*!**************************************!*\
  !*** ./components/Header/Social.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\nvar _this = undefined;\n\n\n\n\nvar Social = function() {\n    // const [show, setShow] = useState(false);\n    // if (show) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"social-media flex h-12 justify-end place-items-end text-yellow basis-1/4 m-auto\",\n        children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.socialMedia.map(function(param) {\n            var url = param.url, image = param.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: url,\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    width: 50,\n                    height: 50,\n                    layout: \"fixed\",\n                    className: \"object-fill\"\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this)\n            }, url, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Social;\n// return (\n//   <div className=\"social-media basis-1/4 place-items-end m-auto justify-end flex\">\n//     <button className=\"w-12 mt-2\" onClick={() => setShow(true)}>\n//       <Image src={world} width={25} height={25} />\n//     </button>\n//   </div>\n// );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\nvar _c;\n$RefreshReg$(_c, \"Social\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1Q7QUFDcUI7QUFJcEQsSUFBTUcsTUFBTSxHQUFHLFdBQU07SUFDbkIsMkNBQTJDO0lBRTNDLGNBQWM7SUFDZCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsaUZBQWlGO2tCQUs3RkgsNkRBQWUsQ0FBQztnQkFBR0ssR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSztpQ0FDNUIsOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBRUgsR0FBRztnQkFBWUksTUFBTSxFQUFDLFFBQVE7Z0JBQUNDLEdBQUcsRUFBQyxZQUFZOzBCQUN0RCw0RUFBQ1gsbURBQUs7b0JBQ0pZLEdBQUcsRUFBRUwsS0FBSztvQkFDVk0sS0FBSyxFQUFFLEVBQUU7b0JBQ1RDLE1BQU0sRUFBRSxFQUFFO29CQUNWQyxNQUFNLEVBQUMsT0FBTztvQkFDZFgsU0FBUyxFQUFDLGFBQWE7Ozs7O3lCQUN2QjtlQVBlRSxHQUFHOzs7O3FCQVFsQjtTQUNMLENBQUM7Ozs7O2FBRUUsQ0FDTjtDQUNIO0FBeEJLSixLQUFBQSxNQUFNO0FBMEJaLFdBQVc7QUFDWCxxRkFBcUY7QUFDckYsbUVBQW1FO0FBQ25FLHFEQUFxRDtBQUNyRCxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLEtBQUs7QUFDTCxLQUFLO0FBRUwsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWwudHN4PzJlNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHNvY2lhbE1lZGlhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHggZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMveC5wbmdcIjtcbmltcG9ydCB3b3JsZCBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy93b3JsZC5wbmdcIjtcblxuY29uc3QgU29jaWFsID0gKCkgPT4ge1xuICAvLyBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gaWYgKHNob3cpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYSBmbGV4IGgtMTIganVzdGlmeS1lbmQgcGxhY2UtaXRlbXMtZW5kIHRleHQteWVsbG93IGJhc2lzLTEvNCBtLWF1dG9cIj5cbiAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cInctMTIgbXQtMlwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfT5cbiAgICAgICAgPEltYWdlIHNyYz17eH0gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxuICAgICAgPC9idXR0b24+ICovfVxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBwLTEgc2hhZG93LXhsIGgtZml0IGJnLXllbGxvdyByb3VuZGVkLWZ1bGxcIj4gKi99XG4gICAgICB7c29jaWFsTWVkaWEubWFwKCh7IHVybCwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICA8YSBocmVmPXt1cmx9IGtleT17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1maWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICApKX1cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyByZXR1cm4gKFxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYSBiYXNpcy0xLzQgcGxhY2UtaXRlbXMtZW5kIG0tYXV0byBqdXN0aWZ5LWVuZCBmbGV4XCI+XG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEyIG10LTJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfT5cbi8vICAgICAgIDxJbWFnZSBzcmM9e3dvcmxkfSB3aWR0aD17MjV9IGhlaWdodD17MjV9IC8+XG4vLyAgICAgPC9idXR0b24+XG4vLyAgIDwvZGl2PlxuLy8gKTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwic29jaWFsTWVkaWEiLCJTb2NpYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ1cmwiLCJpbWFnZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/Social.tsx\n"));

/***/ })

});