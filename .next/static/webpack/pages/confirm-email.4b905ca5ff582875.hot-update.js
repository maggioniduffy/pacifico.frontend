"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/confirm-email",{

/***/ "./pages/confirm-email/index.tsx":
/*!***************************************!*\
  !*** ./pages/confirm-email/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ConfirmEmailPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var token = router.query.token;\n    console.log(token);\n    var confirmEmail = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"confirm email\");\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return fetch(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.BASE_API_URL + \"newsletter/confirm\", {\n                            method: \"POST\",\n                            body: JSON.stringify({\n                                token: token\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        // const data = await res.json();\n                        // console.log(data);\n                        router.push(\"/\");\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function confirmEmail() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen flex place-items-center align-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-56 shadow-xl h-56 bg-white border-2 space-y-2 flex flex-col place-items-center justify-center border-yellow bg-opacity-90 rounded-3xl m-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"text-center\",\n                            children: \" Hola de nuevo! \"\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: confirmEmail,\n                            className: \"m-auto text-black text-center bg-yellow p-4 rounded-xl font-bold text-xl\",\n                            children: [\n                                \" \",\n                                \"Confirma tu email\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/confirm-email/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(ConfirmEmailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ConfirmEmailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmEmailPage);\nvar _c;\n$RefreshReg$(_c, \"ConfirmEmailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25maXJtLWVtYWlsL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTZCO0FBRVc7QUFDZDtBQUMyQjtBQUVyRCxJQUFNSSxnQkFBZ0IsR0FBRyxXQUFNOztJQUM3QixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIsSUFBTSxLQUFPLEdBQUtJLE1BQU0sQ0FBQ0UsS0FBSyxDQUF0QkQsS0FBSztJQUNiRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBTUksWUFBWTttQkFBRyw0UEFBWTtnQkFHdkJDLEdBQUc7Ozs7d0JBRlhILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7K0JBRVRHLEtBQUssQ0FBQ1QsMERBQVksR0FBRyxvQkFBb0IsRUFBRTs0QkFDM0RVLE1BQU0sRUFBRSxNQUFNOzRCQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUFFVixLQUFLLEVBQUVBLEtBQUs7NkJBQUUsQ0FBQzs0QkFDdENXLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzt5QkFDRixDQUFDOzt3QkFOSU4sR0FBRyxZQU1QO3dCQUNGLGlDQUFpQzt3QkFDakMscUJBQXFCO3dCQUNyQk4sTUFBTSxDQUFDYSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozt3QkFFakJWLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXRCO3dCQWhCS0MsWUFBWTs7O09BZ0JqQjtJQUNELHFCQUNFLDhEQUFDUyxLQUFHOzswQkFDRiw4REFBQ25CLGtEQUFJOztrQ0FDSCw4REFBQ29CLE9BQUs7a0NBQUMsb0JBQWtCOzs7Ozs2QkFBUTtrQ0FDakMsOERBQUNDLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLDhDQUE4Qzs7Ozs7NkJBQ3REO2tDQUNGLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLFdBQVc7Ozs7OzZCQUFHOzs7Ozs7cUJBQy9COzBCQUNQLDhEQUFDUCxLQUFHO2dCQUFDUSxTQUFTLEVBQUMscUVBQXFFOzBCQUNsRiw0RUFBQ1IsS0FBRztvQkFBQ1EsU0FBUyxFQUFDLGdKQUFnSjs7c0NBQzdKLDhEQUFDQyxJQUFFOzRCQUFDRCxTQUFTLEVBQUMsYUFBYTtzQ0FBQyxrQkFBZ0I7Ozs7O2lDQUFLO3NDQUNqRCw4REFBQ0UsUUFBTTs0QkFDTEMsT0FBTyxFQUFFcEIsWUFBWTs0QkFDckJpQixTQUFTLEVBQUMsMEVBQTBFOztnQ0FFbkYsR0FBRztnQ0FBQyxtQkFDWTtnQ0FBQyxHQUFHOzs7Ozs7aUNBQ2Q7Ozs7Ozt5QkFDTDs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDtHQTlDS3ZCLGdCQUFnQjs7UUFDTEgsa0RBQVM7OztBQURwQkcsS0FBQUEsZ0JBQWdCO0FBZ0R0QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybS1lbWFpbC9pbmRleC50c3g/ODIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJBU0VfQVBJX1VSTCB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcblxuY29uc3QgQ29uZmlybUVtYWlsUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyB0b2tlbiB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyh0b2tlbik7XG4gIGNvbnN0IGNvbmZpcm1FbWFpbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNvbmZpcm0gZW1haWxcIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEJBU0VfQVBJX1VSTCArIFwibmV3c2xldHRlci9jb25maXJtXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b2tlbjogdG9rZW4gfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gUGFjaWZpY28gQmFzcXVldCA8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkNsdWIgUGFjaWZpY28gQmFzcXVldCAjRGVjYW5vUGFzaW9uLiBOZXVxdWVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01NiBzaGFkb3cteGwgaC01NiBiZy13aGl0ZSBib3JkZXItMiBzcGFjZS15LTIgZmxleCBmbGV4LWNvbCBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLXllbGxvdyBiZy1vcGFjaXR5LTkwIHJvdW5kZWQtM3hsIG0tYXV0b1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBIb2xhIGRlIG51ZXZvISA8L2gyPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpcm1FbWFpbH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0byB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGJnLXllbGxvdyBwLTQgcm91bmRlZC14bCBmb250LWJvbGQgdGV4dC14bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgQ29uZmlybWEgdHUgZW1haWx7XCIgXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtRW1haWxQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkJBU0VfQVBJX1VSTCIsIkNvbmZpcm1FbWFpbFBhZ2UiLCJyb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1FbWFpbCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicHVzaCIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/confirm-email/index.tsx\n"));

/***/ })

});