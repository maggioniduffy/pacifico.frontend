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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\nvar _this = undefined;\n\n\n\n\nvar Social = function() {\n    // const [show, setShow] = useState(false);\n    // if (show) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"social-media flex overflow-hidden justify-end place-items-end text-yellow basis-1/4 m-auto\",\n        children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.socialMedia.map(function(param) {\n            var url = param.url, image = param.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: url,\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                className: \"rounded-full p-2 border border-yellow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    width: 50,\n                    height: 50,\n                    className: \"object-cover\"\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this)\n            }, url, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Header/Social.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Social;\n// return (\n//   <div className=\"social-media basis-1/4 place-items-end m-auto justify-end flex\">\n//     <button className=\"w-12 mt-2\" onClick={() => setShow(true)}>\n//       <Image src={world} width={25} height={25} />\n//     </button>\n//   </div>\n// );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\nvar _c;\n$RefreshReg$(_c, \"Social\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1Q7QUFDcUI7QUFJcEQsSUFBTUcsTUFBTSxHQUFHLFdBQU07SUFDbkIsMkNBQTJDO0lBRTNDLGNBQWM7SUFDZCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNEZBQTRGO2tCQUt4R0gsNkRBQWUsQ0FBQztnQkFBR0ssR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEtBQUssU0FBTEEsS0FBSztpQ0FDNUIsOERBQUNDLEdBQUM7Z0JBQ0FDLElBQUksRUFBRUgsR0FBRztnQkFFVEksTUFBTSxFQUFDLFFBQVE7Z0JBQ2ZDLEdBQUcsRUFBQyxZQUFZO2dCQUNoQlAsU0FBUyxFQUFDLHVDQUF1QzswQkFFakQsNEVBQUNKLG1EQUFLO29CQUFDWSxHQUFHLEVBQUVMLEtBQUs7b0JBQUVNLEtBQUssRUFBRSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsRUFBRTtvQkFBRVYsU0FBUyxFQUFDLGNBQWM7Ozs7O3lCQUFHO2VBTGhFRSxHQUFHOzs7O3FCQU1OO1NBQ0wsQ0FBQzs7Ozs7YUFFRSxDQUNOO0NBQ0g7QUF4QktKLEtBQUFBLE1BQU07QUEwQlosV0FBVztBQUNYLHFGQUFxRjtBQUNyRixtRUFBbUU7QUFDbkUscURBQXFEO0FBQ3JELGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsS0FBSztBQUNMLEtBQUs7QUFFTCwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbC50c3g/MmU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeCBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy94LnBuZ1wiO1xuaW1wb3J0IHdvcmxkIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL3dvcmxkLnBuZ1wiO1xuXG5jb25zdCBTb2NpYWwgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBpZiAoc2hvdykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGp1c3RpZnktZW5kIHBsYWNlLWl0ZW1zLWVuZCB0ZXh0LXllbGxvdyBiYXNpcy0xLzQgbS1hdXRvXCI+XG4gICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEyIG10LTJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgICAgIDxJbWFnZSBzcmM9e3h9IHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gLz5cbiAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInctMTIgcC0xIHNoYWRvdy14bCBoLWZpdCBiZy15ZWxsb3cgcm91bmRlZC1mdWxsXCI+ICovfVxuICAgICAge3NvY2lhbE1lZGlhLm1hcCgoeyB1cmwsIGltYWdlIH0pID0+IChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAga2V5PXt1cmx9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0yIGJvcmRlciBib3JkZXIteWVsbG93XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICkpfVxuICAgICAgey8qIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIHJldHVybiAoXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhIGJhc2lzLTEvNCBwbGFjZS1pdGVtcy1lbmQgbS1hdXRvIGp1c3RpZnktZW5kIGZsZXhcIj5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMTIgbXQtMlwiIG9uQ2xpY2s9eygpID0+IHNldFNob3codHJ1ZSl9PlxuLy8gICAgICAgPEltYWdlIHNyYz17d29ybGR9IHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gLz5cbi8vICAgICA8L2J1dHRvbj5cbi8vICAgPC9kaXY+XG4vLyApO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJzb2NpYWxNZWRpYSIsIlNvY2lhbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInVybCIsImltYWdlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Social.tsx\n"));

/***/ })

});