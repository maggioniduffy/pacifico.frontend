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

/***/ "./components/NavMenu/NavMenu.tsx":
/*!****************************************!*\
  !*** ./components/NavMenu/NavMenu.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/menu.png */ \"./public/assets/menu.png\");\n/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuList */ \"./components/NavMenu/MenuList.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar NavMenu = function(param) {\n    var options = param.options;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visible = ref[0], setVisible = ref[1];\n    var toggleVisible = function() {\n        setTimeout(function() {\n            return setVisible(!visible);\n        }, 200);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(visible ? \"\" : \"m-auto\", \" sm:basis-1/4 ml-6 block top-0 z-50\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"dropdownDefault\",\n                \"data-dropdown-toggle\": \"dropdown\",\n                className: \"max-h-10 text-white font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center\",\n                type: \"button\",\n                onClick: toggleVisible,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _public_assets_menu_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    layout: \"fixed\",\n                    height: 30,\n                    width: 30\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                visible: visible,\n                options: options,\n                toggleVisible: toggleVisible\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavMenu, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavMenu);\nvar _c;\n$RefreshReg$(_c, \"NavMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdk1lbnUvTmF2TWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUF3QztBQUNUO0FBQ2lCO0FBQ2Q7QUFXbEMsSUFBTUssT0FBTyxHQUFHLGdCQUF3QjtRQUFyQkMsT0FBTyxTQUFQQSxPQUFPOztJQUN4QixJQUE4QkwsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q00sT0FBTyxHQUFnQk4sR0FBZSxHQUEvQixFQUFFTyxVQUFVLEdBQUlQLEdBQWUsR0FBbkI7SUFFMUIsSUFBTVEsYUFBYSxHQUFHLFdBQU07UUFDMUJDLFVBQVUsQ0FBQzttQkFBTUYsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztTQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDN0M7SUFFRCxxQkFDRSw4REFBQ0ksS0FBRztRQUNGQyxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQW1DLENBRGxDTCxPQUFPLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFDeEIscUNBQW1DLENBQUM7OzBCQUVyQyw4REFBQ00sUUFBTTtnQkFDTEMsRUFBRSxFQUFDLGlCQUFpQjtnQkFDcEJDLHNCQUFvQixFQUFDLFVBQVU7Z0JBQy9CSCxTQUFTLEVBQUMscUdBQXFHO2dCQUMvR0ksSUFBSSxFQUFDLFFBQVE7Z0JBQ2JDLE9BQU8sRUFBRVIsYUFBYTswQkFFdEIsNEVBQUNQLG1EQUFLO29CQUFDZ0IsR0FBRyxFQUFFZiwrREFBSTtvQkFBRWdCLE1BQU0sRUFBQyxPQUFPO29CQUFDQyxNQUFNLEVBQUUsRUFBRTtvQkFBRUMsS0FBSyxFQUFFLEVBQUU7Ozs7O3lCQUFJOzs7OztxQkFDbkQ7MEJBQ1QsOERBQUNqQixpREFBUTtnQkFDUEcsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQkQsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQkcsYUFBYSxFQUFFQSxhQUFhOzs7OztxQkFDNUI7Ozs7OzthQUNFLENBQ047Q0FDSDtHQTdCS0osT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBK0JiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZNZW51L05hdk1lbnUudHN4PzQ4MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL21lbnUucG5nXCI7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIi4vTWVudUxpc3RcIjtcblxuaW50ZXJmYWNlIE9wdGlvbiB7XG4gIHNlY3Rpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcHRpb25zOiBPcHRpb25bXTtcbn1cblxuY29uc3QgTmF2TWVudSA9ICh7IG9wdGlvbnMgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKCF2aXNpYmxlKSwgMjAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIHZpc2libGUgPyBcIlwiIDogXCJtLWF1dG9cIlxuICAgICAgfSBzbTpiYXNpcy0xLzQgbWwtNiBibG9jayB0b3AtMCB6LTUwYH1cbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiZHJvcGRvd25EZWZhdWx0XCJcbiAgICAgICAgZGF0YS1kcm9wZG93bi10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC1oLTEwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTIgcHktMi41IHRleHQtY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2Ugc3JjPXttZW51fSBsYXlvdXQ9XCJmaXhlZFwiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPE1lbnVMaXN0XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHRvZ2dsZVZpc2libGU9e3RvZ2dsZVZpc2libGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TWVudTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJtZW51IiwiTWVudUxpc3QiLCJOYXZNZW51Iiwib3B0aW9ucyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpZCIsImRhdGEtZHJvcGRvd24tdG9nZ2xlIiwidHlwZSIsIm9uQ2xpY2siLCJzcmMiLCJsYXlvdXQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavMenu/NavMenu.tsx\n"));

/***/ })

});