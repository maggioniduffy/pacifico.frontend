"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/Admin/AddComponent.tsx":
/*!*******************************************!*\
  !*** ./components/Admin/AddComponent.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar AddComponent = function(param) {\n    var inputs = param.inputs, submit = param.submit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col\",\n        onSubmit: function(e) {\n            return submit(e);\n        },\n        children: [\n            inputs.map(function(param) {\n                var placeholder = param.placeholder, value = param.value, setter = param.setter;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: placeholder,\n                    value: value,\n                    onChange: function(e) {\n                        return setter(e.target.value);\n                    }\n                }, Date.now() + placeholder, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return send(e);\n                },\n                type: \"submit\",\n                className: \"bg-yellow p-1 rounded shadow m-2\",\n                children: [\n                    \" \",\n                    \"Enviar\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = AddComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddComponent);\nvar _c;\n$RefreshReg$(_c, \"AddComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkbWluL0FkZENvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFhMUIsSUFBTUMsWUFBWSxHQUFHLGdCQUErQjtRQUE1QkMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUNwQyxxQkFDRSw4REFBQ0MsTUFBSTtRQUFDQyxTQUFTLEVBQUMsZUFBZTtRQUFDQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQkFBS0osTUFBTSxDQUFDSSxDQUFDLENBQUM7U0FBQTs7WUFDdkRMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLGdCQUFvQztvQkFBakNDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsTUFBTSxTQUFOQSxNQUFNO2dCQUN2QyxxQkFDRSw4REFBQ0MsT0FBSztvQkFFSkgsV0FBVyxFQUFFQSxXQUFXO29CQUN4QkMsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxRQUFRLEVBQUUsU0FBQ04sQ0FBQzsrQkFBS0ksTUFBTSxDQUFDSixDQUFDLENBQUNPLE1BQU0sQ0FBQ0osS0FBSyxDQUFDO3FCQUFBO21CQUhsQ0ssSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBR1AsV0FBVzs7Ozt5QkFJN0IsQ0FDRjthQUNILENBQUM7MEJBQ0YsOERBQUNRLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRSxTQUFDWCxDQUFDOzJCQUFLWSxJQUFJLENBQUNaLENBQUMsQ0FBQztpQkFBQTtnQkFDdkJhLElBQUksRUFBQyxRQUFRO2dCQUNiZixTQUFTLEVBQUMsa0NBQWtDOztvQkFFM0MsR0FBRztvQkFBQyxRQUNDO29CQUFDLEdBQUc7Ozs7OztxQkFDSDs7Ozs7O2FBQ0osQ0FDUDtDQUNIO0FBdkJLSixLQUFBQSxZQUFZO0FBeUJsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRtaW4vQWRkQ29tcG9uZW50LnRzeD9mNDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElucHV0UHJvcHMge1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICBzZXR0ZXI6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbnB1dHM6IElucHV0UHJvcHNbXTtcbiAgc3VibWl0OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQWRkQ29tcG9uZW50ID0gKHsgaW5wdXRzLCBzdWJtaXQgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXQoZSl9PlxuICAgICAge2lucHV0cy5tYXAoKHsgcGxhY2Vob2xkZXIsIHZhbHVlLCBzZXR0ZXIgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAga2V5PXtEYXRlLm5vdygpICsgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHRlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2VuZChlKX1cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdyBwLTEgcm91bmRlZCBzaGFkb3cgbS0yXCJcbiAgICAgID5cbiAgICAgICAge1wiIFwifVxuICAgICAgICBFbnZpYXJ7XCIgXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBZGRDb21wb25lbnQiLCJpbnB1dHMiLCJzdWJtaXQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJlIiwibWFwIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNldHRlciIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJEYXRlIiwibm93IiwiYnV0dG9uIiwib25DbGljayIsInNlbmQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Admin/AddComponent.tsx\n"));

/***/ })

});