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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_menuitem_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/menuitem.png */ \"./public/assets/menuitem.png\");\n/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuList */ \"./components/NavMenu/MenuList.tsx\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuButton */ \"./components/NavMenu/MenuButton.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NavMenu = function(param) {\n    var options = param.options;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visible = ref[0], setVisible = ref[1];\n    var toggleVisible = function() {\n        setTimeout(function() {\n            return setVisible(!visible);\n        }, 200);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(visible ? \"mt-2\" : \"mt-2 m-auto\", \" sm:basis-1/4 ml-6 block\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                toggleVisible: toggleVisible,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _public_assets_menuitem_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    layout: \"fixed\",\n                    height: 30,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                visible: visible,\n                options: options,\n                toggleVisible: toggleVisible\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/NavMenu.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavMenu, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NavMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavMenu);\nvar _c;\n$RefreshReg$(_c, \"NavMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdk1lbnUvTmF2TWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBd0M7QUFDVDtBQUNxQjtBQUNsQjtBQUNJO0FBV3RDLElBQU1NLE9BQU8sR0FBRyxnQkFBd0I7UUFBckJDLE9BQU8sU0FBUEEsT0FBTzs7SUFDeEIsSUFBOEJOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENPLE9BQU8sR0FBZ0JQLEdBQWUsR0FBL0IsRUFBRVEsVUFBVSxHQUFJUixHQUFlLEdBQW5CO0lBRTFCLElBQU1TLGFBQWEsR0FBRyxXQUFNO1FBQzFCQyxVQUFVLENBQUM7bUJBQU1GLFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7U0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzdDO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7UUFDRkMsU0FBUyxFQUFFLEVBQUMsQ0FBbUMsTUFBd0IsQ0FBekRMLE9BQU8sR0FBRyxNQUFNLEdBQUcsYUFBYSxFQUFDLDBCQUF3QixDQUFDOzswQkFFeEUsOERBQUNILG1EQUFVO2dCQUFDSyxhQUFhLEVBQUVBLGFBQWE7MEJBQ3RDLDRFQUFDUixtREFBSztvQkFBQ1ksR0FBRyxFQUFFWCxtRUFBSTtvQkFBRVksTUFBTSxFQUFDLE9BQU87b0JBQUNDLE1BQU0sRUFBRSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsRUFBRTs7Ozs7eUJBQUk7Ozs7O3FCQUMvQzswQkFDYiw4REFBQ2IsaURBQVE7Z0JBQ1BJLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJELE9BQU8sRUFBRUEsT0FBTztnQkFDaEJHLGFBQWEsRUFBRUEsYUFBYTs7Ozs7cUJBQzVCOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0FyQktKLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXVCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2TWVudS9OYXZNZW51LnRzeD80ODBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9tZW51aXRlbS5wbmdcIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiLi9NZW51TGlzdFwiO1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4vTWVudUJ1dHRvblwiO1xuXG5pbnRlcmZhY2UgT3B0aW9uIHtcbiAgc2VjdGlvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9wdGlvbnM6IE9wdGlvbltdO1xufVxuXG5jb25zdCBOYXZNZW51ID0gKHsgb3B0aW9ucyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFZpc2libGUoIXZpc2libGUpLCAyMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHt2aXNpYmxlID8gXCJtdC0yXCIgOiBcIm10LTIgbS1hdXRvXCJ9IHNtOmJhc2lzLTEvNCBtbC02IGJsb2NrYH1cbiAgICA+XG4gICAgICA8TWVudUJ1dHRvbiB0b2dnbGVWaXNpYmxlPXt0b2dnbGVWaXNpYmxlfT5cbiAgICAgICAgPEltYWdlIHNyYz17bWVudX0gbGF5b3V0PVwiZml4ZWRcIiBoZWlnaHQ9ezMwfSB3aWR0aD17NDB9IC8+XG4gICAgICA8L01lbnVCdXR0b24+XG4gICAgICA8TWVudUxpc3RcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgdG9nZ2xlVmlzaWJsZT17dG9nZ2xlVmlzaWJsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZNZW51O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIm1lbnUiLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJOYXZNZW51Iiwib3B0aW9ucyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJsYXlvdXQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavMenu/NavMenu.tsx\n"));

/***/ })

});