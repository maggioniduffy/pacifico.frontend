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

/***/ "./components/VIdeos/Videos.tsx":
/*!**************************************!*\
  !*** ./components/VIdeos/Videos.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar PlaylistCard = function(param) {\n    var src = param.src, text = param.text;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-fit rounded-b-xl overflow-hidden border-b-2 border-yellow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                width: \"560\",\n                height: \"315\",\n                src: src,\n                title: \"YouTube video player\",\n                frameBorder: \"0\",\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-12 flex rounded-b-xl justify-center border-yellow border-r-2 border-l-2 place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-gray text-lg\",\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, _this);\n};\n_c = PlaylistCard;\nvar playlists = [\n    {\n        src: \"https://www.youtube.com/embed/videoseries?list=PLRkIjXKovdlqofvjr4u6qQSg2Pr1qpcRw\",\n        text: \"Torneo Provincial 2022 - Primera Femenina\"\n    },\n    {\n        src: \"https://www.youtube.com/embed/videoseries?list=PLRkIjXKovdlrhFl4Nu6r8tuifynhJZcET\",\n        text: \"Torneo Prefederal 2022 - Primera Masculina\"\n    }, \n];\nvar Videos = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-aos\": \"fade-up\",\n        \"data-aos-duration\": \"2000\",\n        className: \"mt-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-black header-font font-bold text-left text-3xl\",\n                children: [\n                    \" \",\n                    \"Videos\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex overflow-x-auto space-x-4 pt-2\",\n                children: playlists.map(function(param) {\n                    var src = param.src, text = param.text;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlaylistCard, {\n                        src: src,\n                        text: text\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Videos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c, _c1;\n$RefreshReg$(_c, \"PlaylistCard\");\n$RefreshReg$(_c1, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZJZGVvcy9WaWRlb3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBCO0FBTzFCLElBQU1DLFlBQVksR0FBRztRQUFHQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsSUFBSSxTQUFKQSxJQUFJO3lCQUMvQiw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkRBQTZEOzswQkFDMUUsOERBQUNDLFFBQU07Z0JBQ0xDLEtBQUssRUFBQyxLQUFLO2dCQUNYQyxNQUFNLEVBQUMsS0FBSztnQkFDWk4sR0FBRyxFQUFFQSxHQUFHO2dCQUNSTyxLQUFLLEVBQUMsc0JBQXNCO2dCQUM1QkMsV0FBVyxFQUFDLEdBQUc7Z0JBQ2ZDLEtBQUssRUFBQywwRkFBMEY7Z0JBQ2hHQyxlQUFlOzs7OztxQkFDUDswQkFDViw4REFBQ1IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDhGQUE4RjswQkFDM0csNEVBQUNRLElBQUU7b0JBQUNSLFNBQVMsRUFBQyxtQkFBbUI7OEJBQUVGLElBQUk7Ozs7O3lCQUFNOzs7OztxQkFDekM7Ozs7OzthQUNGO0NBQ1A7QUFmS0YsS0FBQUEsWUFBWTtBQWlCbEIsSUFBTWEsU0FBUyxHQUFHO0lBQ2hCO1FBQ0VaLEdBQUcsRUFBRSxtRkFBbUY7UUFDeEZDLElBQUksRUFBRSwyQ0FBMkM7S0FDbEQ7SUFFRDtRQUNFRCxHQUFHLEVBQUUsbUZBQW1GO1FBQ3hGQyxJQUFJLEVBQUUsNENBQTRDO0tBQ25EO0NBQ0Y7QUFFRCxJQUFNWSxNQUFNLEdBQUcsV0FBTTtJQUNuQixxQkFDRSw4REFBQ1gsS0FBRztRQUFDWSxVQUFRLEVBQUMsU0FBUztRQUFDQyxtQkFBaUIsRUFBQyxNQUFNO1FBQUNaLFNBQVMsRUFBQyxPQUFPOzswQkFDaEUsOERBQUNhLElBQUU7Z0JBQUNiLFNBQVMsRUFBQyxxREFBcUQ7O29CQUNoRSxHQUFHO29CQUFDLFFBQ0M7b0JBQUMsR0FBRzs7Ozs7O3FCQUNQOzBCQUNMLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUNBQXFDOzBCQUNqRFMsU0FBUyxDQUFDSyxHQUFHLENBQUM7d0JBQUdqQixHQUFHLFNBQUhBLEdBQUcsRUFBRUMsSUFBSSxTQUFKQSxJQUFJO3lDQUN6Qiw4REFBQ0YsWUFBWTt3QkFBQ0MsR0FBRyxFQUFFQSxHQUFHO3dCQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7OzZCQUFJO2lCQUN2QyxDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBZEtZLE1BQUFBLE1BQU07QUFnQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ZJZGVvcy9WaWRlb3MudHN4P2Y1NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RDYXJkUHJvcHMge1xuICBzcmM6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBQbGF5bGlzdENhcmQgPSAoeyBzcmMsIHRleHQgfTogUGxheWxpc3RDYXJkUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoLWZpdCByb3VuZGVkLWIteGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iLTIgYm9yZGVyLXllbGxvd1wiPlxuICAgIDxpZnJhbWVcbiAgICAgIHdpZHRoPVwiNTYwXCJcbiAgICAgIGhlaWdodD1cIjMxNVwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICA+PC9pZnJhbWU+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTEyIGZsZXggcm91bmRlZC1iLXhsIGp1c3RpZnktY2VudGVyIGJvcmRlci15ZWxsb3cgYm9yZGVyLXItMiBib3JkZXItbC0yIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtZ3JheSB0ZXh0LWxnXCI+e3RleHR9PC9oNT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBwbGF5bGlzdHMgPSBbXG4gIHtcbiAgICBzcmM6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdmlkZW9zZXJpZXM/bGlzdD1QTFJrSWpYS292ZGxxb2Z2anI0dTZxUVNnMlByMXFwY1J3XCIsXG4gICAgdGV4dDogXCJUb3JuZW8gUHJvdmluY2lhbCAyMDIyIC0gUHJpbWVyYSBGZW1lbmluYVwiLFxuICB9LFxuXG4gIHtcbiAgICBzcmM6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdmlkZW9zZXJpZXM/bGlzdD1QTFJrSWpYS292ZGxyaEZsNE51NnI4dHVpZnluaEpaY0VUXCIsXG4gICAgdGV4dDogXCJUb3JuZW8gUHJlZmVkZXJhbCAyMDIyIC0gUHJpbWVyYSBNYXNjdWxpbmFcIixcbiAgfSxcbl07XG5cbmNvbnN0IFZpZGVvcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMjAwMFwiIGNsYXNzTmFtZT1cIm10LTMyXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBoZWFkZXItZm9udCBmb250LWJvbGQgdGV4dC1sZWZ0IHRleHQtM3hsXCI+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgVmlkZW9ze1wiIFwifVxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWF1dG8gc3BhY2UteC00IHB0LTJcIj5cbiAgICAgICAge3BsYXlsaXN0cy5tYXAoKHsgc3JjLCB0ZXh0IH0pID0+IChcbiAgICAgICAgICA8UGxheWxpc3RDYXJkIHNyYz17c3JjfSB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGxheWxpc3RDYXJkIiwic3JjIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwiaDUiLCJwbGF5bGlzdHMiLCJWaWRlb3MiLCJkYXRhLWFvcyIsImRhdGEtYW9zLWR1cmF0aW9uIiwiaDMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VIdeos/Videos.tsx\n"));

/***/ })

});