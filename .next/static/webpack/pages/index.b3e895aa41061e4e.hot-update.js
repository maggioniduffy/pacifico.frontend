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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar PlaylistCard = function(param) {\n    var src = param.src, text = param.text;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-fit rounded-b-xl overflow-hidden border-b-2 border-yellow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                width: \"560\",\n                height: \"315\",\n                src: src,\n                title: \"YouTube video player\",\n                frameBorder: \"0\",\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-12 flex rounded-b-xl justify-center border-yellow border-r-2 border-l-2 place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-gray text-lg\",\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, _this);\n};\n_c = PlaylistCard;\nvar playlists = [\n    {\n        src: \"https://www.youtube.com/embed/videoseries?list=PLRkIjXKovdlqofvjr4u6qQSg2Pr1qpcRw\",\n        text: \"Torneo Provincial 2022 - Primera Femenina\"\n    },\n    {\n        src: \"https://www.youtube.com/embed/videoseries?list=PLRkIjXKovdlrhFl4Nu6r8tuifynhJZcET\",\n        text: \"Torneo Prefederal 2022 - Primera Masculina\"\n    }, \n];\n// Pasar esto a la api asi puede ser editado\nvar Videos = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-aos\": \"fade-up\",\n        \"data-aos-duration\": \"2000\",\n        className: \"mt-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-black header-font font-bold text-left text-3xl\",\n                children: [\n                    \" \",\n                    \"Videos\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex overflow-x-auto space-x-4 pt-2\",\n                children: playlists.map(function(param) {\n                    var src = param.src, text = param.text;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlaylistCard, {\n                        src: src,\n                        text: text\n                    }, src, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/VIdeos/Videos.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Videos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c, _c1;\n$RefreshReg$(_c, \"PlaylistCard\");\n$RefreshReg$(_c1, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZJZGVvcy9WaWRlb3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBCO0FBTzFCLElBQU1DLFlBQVksR0FBRztRQUFHQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsSUFBSSxTQUFKQSxJQUFJO3lCQUMvQiw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkRBQTZEOzswQkFDMUUsOERBQUNDLFFBQU07Z0JBQ0xDLEtBQUssRUFBQyxLQUFLO2dCQUNYQyxNQUFNLEVBQUMsS0FBSztnQkFDWk4sR0FBRyxFQUFFQSxHQUFHO2dCQUNSTyxLQUFLLEVBQUMsc0JBQXNCO2dCQUM1QkMsV0FBVyxFQUFDLEdBQUc7Z0JBQ2ZDLEtBQUssRUFBQywwRkFBMEY7Z0JBQ2hHQyxlQUFlOzs7OztxQkFDUDswQkFDViw4REFBQ1IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDhGQUE4RjswQkFDM0csNEVBQUNRLElBQUU7b0JBQUNSLFNBQVMsRUFBQyxtQkFBbUI7OEJBQUVGLElBQUk7Ozs7O3lCQUFNOzs7OztxQkFDekM7Ozs7OzthQUNGO0NBQ1A7QUFmS0YsS0FBQUEsWUFBWTtBQWlCbEIsSUFBTWEsU0FBUyxHQUFHO0lBQ2hCO1FBQ0VaLEdBQUcsRUFBRSxtRkFBbUY7UUFDeEZDLElBQUksRUFBRSwyQ0FBMkM7S0FDbEQ7SUFFRDtRQUNFRCxHQUFHLEVBQUUsbUZBQW1GO1FBQ3hGQyxJQUFJLEVBQUUsNENBQTRDO0tBQ25EO0NBQ0Y7QUFFRCw0Q0FBNEM7QUFFNUMsSUFBTVksTUFBTSxHQUFHLFdBQU07SUFDbkIscUJBQ0UsOERBQUNYLEtBQUc7UUFBQ1ksVUFBUSxFQUFDLFNBQVM7UUFBQ0MsbUJBQWlCLEVBQUMsTUFBTTtRQUFDWixTQUFTLEVBQUMsT0FBTzs7MEJBQ2hFLDhEQUFDYSxJQUFFO2dCQUFDYixTQUFTLEVBQUMscURBQXFEOztvQkFDaEUsR0FBRztvQkFBQyxRQUNDO29CQUFDLEdBQUc7Ozs7OztxQkFDUDswQkFDTCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFDQUFxQzswQkFDakRTLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDO3dCQUFHakIsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLElBQUksU0FBSkEsSUFBSTt5Q0FDekIsOERBQUNGLFlBQVk7d0JBQVdDLEdBQUcsRUFBRUEsR0FBRzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJO3VCQUF6QkQsR0FBRzs7Ozs2QkFBMEI7aUJBQ2pELENBQUM7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUFkS2EsTUFBQUEsTUFBTTtBQWdCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVklkZW9zL1ZpZGVvcy50c3g/ZjU3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQbGF5bGlzdENhcmRQcm9wcyB7XG4gIHNyYzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IFBsYXlsaXN0Q2FyZCA9ICh7IHNyYywgdGV4dCB9OiBQbGF5bGlzdENhcmRQcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImgtZml0IHJvdW5kZWQtYi14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWItMiBib3JkZXIteWVsbG93XCI+XG4gICAgPGlmcmFtZVxuICAgICAgd2lkdGg9XCI1NjBcIlxuICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAgIHNyYz17c3JjfVxuICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgID48L2lmcmFtZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTIgZmxleCByb3VuZGVkLWIteGwganVzdGlmeS1jZW50ZXIgYm9yZGVyLXllbGxvdyBib3JkZXItci0yIGJvcmRlci1sLTIgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1ncmF5IHRleHQtbGdcIj57dGV4dH08L2g1PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHBsYXlsaXN0cyA9IFtcbiAge1xuICAgIHNyYzogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC92aWRlb3Nlcmllcz9saXN0PVBMUmtJalhLb3ZkbHFvZnZqcjR1NnFRU2cyUHIxcXBjUndcIixcbiAgICB0ZXh0OiBcIlRvcm5lbyBQcm92aW5jaWFsIDIwMjIgLSBQcmltZXJhIEZlbWVuaW5hXCIsXG4gIH0sXG5cbiAge1xuICAgIHNyYzogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC92aWRlb3Nlcmllcz9saXN0PVBMUmtJalhLb3ZkbHJoRmw0TnU2cjh0dWlmeW5oSlpjRVRcIixcbiAgICB0ZXh0OiBcIlRvcm5lbyBQcmVmZWRlcmFsIDIwMjIgLSBQcmltZXJhIE1hc2N1bGluYVwiLFxuICB9LFxuXTtcblxuLy8gUGFzYXIgZXN0byBhIGxhIGFwaSBhc2kgcHVlZGUgc2VyIGVkaXRhZG9cblxuY29uc3QgVmlkZW9zID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCIgY2xhc3NOYW1lPVwibXQtMzJcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGhlYWRlci1mb250IGZvbnQtYm9sZCB0ZXh0LWxlZnQgdGV4dC0zeGxcIj5cbiAgICAgICAge1wiIFwifVxuICAgICAgICBWaWRlb3N7XCIgXCJ9XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBzcGFjZS14LTQgcHQtMlwiPlxuICAgICAgICB7cGxheWxpc3RzLm1hcCgoeyBzcmMsIHRleHQgfSkgPT4gKFxuICAgICAgICAgIDxQbGF5bGlzdENhcmQga2V5PXtzcmN9IHNyYz17c3JjfSB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGxheWxpc3RDYXJkIiwic3JjIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwiaDUiLCJwbGF5bGlzdHMiLCJWaWRlb3MiLCJkYXRhLWFvcyIsImRhdGEtYW9zLWR1cmF0aW9uIiwiaDMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VIdeos/Videos.tsx\n"));

/***/ })

});