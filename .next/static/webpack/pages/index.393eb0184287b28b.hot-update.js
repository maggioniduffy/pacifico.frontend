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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\nvar _this = undefined;\n\n\n\n\nvar Social = function() {\n    // const [show, setShow] = useState(false);\n    // if (show) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"social-media flex h-fit justify-end place-items-end text-yellow basis-1/4 m-auto\",\n        children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.socialMedia.map(function(param) {\n            var url = param.url, image = param.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"basis-1/3\",\n                href: url,\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    width: 30,\n                    height: 30,\n                    layout: \"fixed\",\n                    className: \"object-fill\"\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this)\n            }, url, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Social;\n// return (\n//   <div className=\"social-media basis-1/4 place-items-end m-auto justify-end flex\">\n//     <button className=\"w-12 mt-2\" onClick={() => setShow(true)}>\n//       <Image src={world} width={25} height={25} />\n//     </button>\n//   </div>\n// );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\nvar _c;\n$RefreshReg$(_c, \"Social\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1Q7QUFDcUI7QUFJcEQsSUFBTUcsTUFBTSxHQUFHLFdBQU07SUFDbkIsMkNBQTJDO0lBRTNDLGNBQWM7SUFDZCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsa0ZBQWtGO2tCQUs5RkgsNkRBQWUsQ0FBQztnQkFBR0ssR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSztpQ0FDNUIsOERBQUNDLEdBQUM7Z0JBQ0FKLFNBQVMsRUFBQyxXQUFXO2dCQUNyQkssSUFBSSxFQUFFSCxHQUFHO2dCQUVUSSxNQUFNLEVBQUMsUUFBUTtnQkFDZkMsR0FBRyxFQUFDLFlBQVk7MEJBRWhCLDRFQUFDWCxtREFBSztvQkFDSlksR0FBRyxFQUFFTCxLQUFLO29CQUNWTSxLQUFLLEVBQUUsRUFBRTtvQkFDVEMsTUFBTSxFQUFFLEVBQUU7b0JBQ1ZDLE1BQU0sRUFBQyxPQUFPO29CQUNkWCxTQUFTLEVBQUMsYUFBYTs7Ozs7eUJBQ3ZCO2VBVkdFLEdBQUc7Ozs7cUJBV047U0FDTCxDQUFDOzs7OzthQUVFLENBQ047Q0FDSDtBQTlCS0osS0FBQUEsTUFBTTtBQWdDWixXQUFXO0FBQ1gscUZBQXFGO0FBQ3JGLG1FQUFtRTtBQUNuRSxxREFBcUQ7QUFDckQsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxLQUFLO0FBQ0wsS0FBSztBQUVMLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsLnRzeD8yZTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBzb2NpYWxNZWRpYSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB4IGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL3gucG5nXCI7XG5pbXBvcnQgd29ybGQgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvd29ybGQucG5nXCI7XG5cbmNvbnN0IFNvY2lhbCA9ICgpID0+IHtcbiAgLy8gY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGlmIChzaG93KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEgZmxleCBoLWZpdCBqdXN0aWZ5LWVuZCBwbGFjZS1pdGVtcy1lbmQgdGV4dC15ZWxsb3cgYmFzaXMtMS80IG0tYXV0b1wiPlxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwidy0xMiBtdC0yXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyhmYWxzZSl9PlxuICAgICAgICA8SW1hZ2Ugc3JjPXt4fSB3aWR0aD17MjV9IGhlaWdodD17MjV9IC8+XG4gICAgICA8L2J1dHRvbj4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LTEyIHAtMSBzaGFkb3cteGwgaC1maXQgYmcteWVsbG93IHJvdW5kZWQtZnVsbFwiPiAqL31cbiAgICAgIHtzb2NpYWxNZWRpYS5tYXAoKHsgdXJsLCBpbWFnZSB9KSA9PiAoXG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaXMtMS8zXCJcbiAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAga2V5PXt1cmx9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtZmlsbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgKSl9XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gcmV0dXJuIChcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEgYmFzaXMtMS80IHBsYWNlLWl0ZW1zLWVuZCBtLWF1dG8ganVzdGlmeS1lbmQgZmxleFwiPlxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0xMiBtdC0yXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX0+XG4vLyAgICAgICA8SW1hZ2Ugc3JjPXt3b3JsZH0gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxuLy8gICAgIDwvYnV0dG9uPlxuLy8gICA8L2Rpdj5cbi8vICk7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInNvY2lhbE1lZGlhIiwiU29jaWFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidXJsIiwiaW1hZ2UiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Social.tsx\n"));

/***/ })

});