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

/***/ "./components/Admin/AddComponent.tsx":
/*!*******************************************!*\
  !*** ./components/Admin/AddComponent.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar AddComponent = function(param) {\n    var inputs = param.inputs, submit = param.submit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col\",\n        onSubmit: function(e) {\n            return submit(e);\n        },\n        children: [\n            inputs.map(function(param) {\n                var placeholder = param.placeholder, value = param.value, setter = param.setter, options = param.options, type = param.type;\n                if (type == \"textarea\") {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        onChange: function(e) {\n                            return setter(e.target.value);\n                        },\n                        value: value,\n                        className: \"my-2\"\n                    }, placeholder, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, _this);\n                }\n                if (type == \"file\") {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: function(e) {\n                            return setter(e);\n                        },\n                        className: \"my-2\",\n                        type: type\n                    }, placeholder, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, _this);\n                }\n                if (!options) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: placeholder,\n                        value: value,\n                        onChange: function(e) {\n                            return setter(e.target.value);\n                        },\n                        className: \"my-2\",\n                        type: type ? type : \"text\"\n                    }, placeholder, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, _this);\n                } else {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: value,\n                        onChange: function(e) {\n                            return setter(e.target.value);\n                        },\n                        className: \"my-2\",\n                        children: options.map(function(param) {\n                            var value = param.value, label = param.label;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: value,\n                                children: [\n                                    \" \",\n                                    label,\n                                    \" \"\n                                ]\n                            }, placeholder + label, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, Date.now() + placeholder, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this);\n                }\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function(e) {\n                    return submit(e);\n                },\n                type: \"submit\",\n                className: \"bg-yellow p-1 rounded shadow m-2\",\n                children: [\n                    \" \",\n                    \"Enviar\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/Admin/AddComponent.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = AddComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddComponent);\nvar _c;\n$RefreshReg$(_c, \"AddComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vY29tcG9uZW50cy9BZG1pbi9BZGRDb21wb25lbnQudHN4P2Y0MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRQcm9wcyB9IGZyb20gXCIuL0ZpeHR1cmUvaW50ZXJmYWNlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbnB1dHM6IElucHV0UHJvcHNbXTtcbiAgc3VibWl0OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQWRkQ29tcG9uZW50ID0gKHsgaW5wdXRzLCBzdWJtaXQgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXQoZSl9PlxuICAgICAge2lucHV0cy5tYXAoKHsgcGxhY2Vob2xkZXIsIHZhbHVlLCBzZXR0ZXIsIG9wdGlvbnMsIHR5cGUgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGtleT17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0dGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSBcImZpbGVcIikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAga2V5PXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXR0ZXIoZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTJcIlxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAga2V5PXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0dGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMlwiXG4gICAgICAgICAgICAgIHR5cGU9e3R5cGUgPyB0eXBlIDogXCJ0ZXh0XCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAga2V5PXtEYXRlLm5vdygpICsgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXR0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29wdGlvbnMubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dmFsdWV9IGtleT17cGxhY2Vob2xkZXIgKyBsYWJlbH0+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc3VibWl0KGUpfVxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93IHAtMSByb3VuZGVkIHNoYWRvdyBtLTJcIlxuICAgICAgPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIEVudmlhcntcIiBcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJBZGRDb21wb25lbnQiLCJpbnB1dHMiLCJzdWJtaXQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJlIiwibWFwIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNldHRlciIsIm9wdGlvbnMiLCJ0eXBlIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsInRhcmdldCIsImlucHV0Iiwic2VsZWN0IiwibGFiZWwiLCJvcHRpb24iLCJEYXRlIiwibm93IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Admin/AddComponent.tsx\n"));

/***/ })

});