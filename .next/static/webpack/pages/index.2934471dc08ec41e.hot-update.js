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

/***/ "./components/NavMenu/MenuList.tsx":
/*!*****************************************!*\
  !*** ./components/NavMenu/MenuList.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Link/Link */ \"./components/Link/Link.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_menuitem_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/menuitem.png */ \"./public/assets/menuitem.png\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuButton */ \"./components/NavMenu/MenuButton.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar MenuList = function(param) {\n    var visible = param.visible, options = param.options, toggleVisible = param.toggleVisible;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"dropdown\",\n        onClick: toggleVisible,\n        className: \"\".concat(visible ? \"\" : \"hidden\", \" z-10 absolute bg-dark bg-opacity-70 w-full h-screen top-0 left-0 bg-white overflow-visible divide-y divide-gray-100\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white w-44 md:w-3/12 lg:w-2/12 h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    toggleVisible: toggleVisible,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _public_assets_menuitem_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        layout: \"fixed\",\n                        height: 30,\n                        width: 40\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"py-1 text-sm text-gray-700 ml-6 dark:text-gray-200\",\n                    \"aria-labelledby\": \"dropdownDefault\",\n                    children: options.map(function(param) {\n                        var name = param.name, section = param.section;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block py-2 px-4 hover:text-gold-500 dark:hover:bg-gray-600 dark:hover:text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                url: section,\n                                target: \"_self\",\n                                onClick: toggleVisible,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-medium text-sm md:text-xl\",\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, _this)\n                        }, section, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/NavMenu/MenuList.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = MenuList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuList);\nvar _c;\n$RefreshReg$(_c, \"MenuList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdk1lbnUvTWVudUxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0M7QUFDTjtBQUNEO0FBQ3FCO0FBQ2Q7QUFhdEMsSUFBTUssUUFBUSxHQUFHLGdCQUFnRDtRQUE3Q0MsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxhQUFhLFNBQWJBLGFBQWE7SUFDakQscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsRUFBRSxFQUFDLFVBQVU7UUFDYkMsT0FBTyxFQUFFSCxhQUFhO1FBQ3RCSSxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQW9ILENBRG5ITixPQUFPLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFDeEIsc0hBQW9ILENBQUM7a0JBRXRILDRFQUFDRyxLQUFHO1lBQUNHLFNBQVMsRUFBQyw0Q0FBNEM7OzhCQUN6RCw4REFBQ1IsbURBQVU7b0JBQUNJLGFBQWEsRUFBRUEsYUFBYTs4QkFDdEMsNEVBQUNOLG1EQUFLO3dCQUFDVyxHQUFHLEVBQUVWLG1FQUFJO3dCQUFFVyxNQUFNLEVBQUMsT0FBTzt3QkFBQ0MsTUFBTSxFQUFFLEVBQUU7d0JBQUVDLEtBQUssRUFBRSxFQUFFOzs7Ozs2QkFBSTs7Ozs7eUJBQy9DOzhCQUNiLDhEQUFDQyxJQUFFO29CQUNETCxTQUFTLEVBQUMsb0RBQW9EO29CQUM5RE0saUJBQWUsRUFBQyxpQkFBaUI7OEJBRWhDWCxPQUFPLENBQUNZLEdBQUcsQ0FBQyxnQkFBdUI7NEJBQXBCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsT0FBTyxTQUFQQSxPQUFPO3dCQUMzQixxQkFDRSw4REFBQ0MsTUFBSTs0QkFFSFYsU0FBUyxFQUFDLGtGQUFrRjtzQ0FFNUYsNEVBQUNYLGtEQUFJO2dDQUFDc0IsR0FBRyxFQUFFRixPQUFPO2dDQUFFRyxNQUFNLEVBQUMsT0FBTztnQ0FBQ2IsT0FBTyxFQUFFSCxhQUFhOzBDQUN2RCw0RUFBQ2lCLEdBQUM7b0NBQUNiLFNBQVMsRUFBQyxnQ0FBZ0M7OENBQUVRLElBQUk7Ozs7O3lDQUFLOzs7OztxQ0FDbkQ7MkJBTEZDLE9BQU87Ozs7aUNBTVAsQ0FDUDtxQkFDSCxDQUFDOzs7Ozt5QkFDQzs7Ozs7O2lCQUNEOzs7OzthQUNGLENBQ047Q0FDSDtBQWpDS2hCLEtBQUFBLFFBQVE7QUFtQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdk1lbnUvTWVudUxpc3QudHN4PzEwOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL0xpbmsvTGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9tZW51aXRlbS5wbmdcIjtcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCIuL01lbnVCdXR0b25cIjtcblxuaW50ZXJmYWNlIE9wdGlvbiB7XG4gIHNlY3Rpb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBvcHRpb25zOiBPcHRpb25bXTtcbiAgdG9nZ2xlVmlzaWJsZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgTWVudUxpc3QgPSAoeyB2aXNpYmxlLCBvcHRpb25zLCB0b2dnbGVWaXNpYmxlIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJkcm9wZG93blwiXG4gICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgdmlzaWJsZSA/IFwiXCIgOiBcImhpZGRlblwiXG4gICAgICB9IHotMTAgYWJzb2x1dGUgYmctZGFyayBiZy1vcGFjaXR5LTcwIHctZnVsbCBoLXNjcmVlbiB0b3AtMCBsZWZ0LTAgYmctd2hpdGUgb3ZlcmZsb3ctdmlzaWJsZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0xMDBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy00NCBtZDp3LTMvMTIgbGc6dy0yLzEyIGgtc2NyZWVuXCI+XG4gICAgICAgIDxNZW51QnV0dG9uIHRvZ2dsZVZpc2libGU9e3RvZ2dsZVZpc2libGV9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e21lbnV9IGxheW91dD1cImZpeGVkXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezQwfSAvPlxuICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTEgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIG1sLTYgZGFyazp0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkRlZmF1bHRcIlxuICAgICAgICA+XG4gICAgICAgICAge29wdGlvbnMubWFwKCh7IG5hbWUsIHNlY3Rpb24gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC00IGhvdmVyOnRleHQtZ29sZC01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdXJsPXtzZWN0aW9ufSB0YXJnZXQ9XCJfc2VsZlwiIG9uQ2xpY2s9e3RvZ2dsZVZpc2libGV9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbSBtZDp0ZXh0LXhsXCI+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSW1hZ2UiLCJtZW51IiwiTWVudUJ1dHRvbiIsIk1lbnVMaXN0IiwidmlzaWJsZSIsIm9wdGlvbnMiLCJ0b2dnbGVWaXNpYmxlIiwiZGl2IiwiaWQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3JjIiwibGF5b3V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ1bCIsImFyaWEtbGFiZWxsZWRieSIsIm1hcCIsIm5hbWUiLCJzZWN0aW9uIiwic3BhbiIsInVybCIsInRhcmdldCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavMenu/MenuList.tsx\n"));

/***/ })

});