"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[new-title]",{

/***/ "./pages/news/[new-title].tsx":
/*!************************************!*\
  !*** ./pages/news/[new-title].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NewPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loaded = ref1[0], setLoaded = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(\"effect\", router.isReady);\n        if (!router.isReady) return;\n        console.log(router);\n        console.log(\"is ready\");\n        var query = router.query;\n        console.log(\"query\", query);\n        var auxQuery = {\n            title: query.title,\n            subtitle: query.subtitle,\n            id: query.id,\n            body: query.body,\n            time: new Date(query.time),\n            src: query.src\n        };\n        setLoaded(true);\n        setData(auxQuery);\n    }, [\n        router,\n        router.isReady,\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sections: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.sections,\n                socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.socialMedia,\n                showImage: false,\n                showMenu: false\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: loaded && data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-realwhite p-8 px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 rounded h-fit shadow rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-left text-6xl camelcase font-medium \",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lext text-3xl mt-1\",\n                            children: data.subtitle\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"text-gray\",\n                            children: [\n                                \" \",\n                                _utils__WEBPACK_IMPORTED_MODULE_5__.weekDays.get(data.time.getDay()) + \" \" + data.time.getDate(),\n                                \" de \",\n                                _utils__WEBPACK_IMPORTED_MODULE_5__.months.get(data.time.getMonth()),\n                                \", \",\n                                data.time.getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10/12 h-fit relative m-auto my-8 rounded-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                src: data.image,\n                                layout: \"responsive\",\n                                width: 16,\n                                height: 9,\n                                className: \"rounded-lg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-8 text-lg\",\n                            children: data.body\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-screen w-full p-auto flex place-items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        role: \"status\",\n                        className: \"m-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"inline m-auto w-16 h-16 text-black animate-spin dark:text-gray-600 fill-yellow\",\n                                viewBox: \"0 0 100 101\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                        fill: \"currentColor\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                        fill: \"currentFill\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"h-16 w-full p-auto bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-white text-center text-sm\",\n                    children: [\n                        \" \",\n                        \"Made by Faustino Maggioni Duffy\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(NewPage, \"eGMssy13Fwkt71+MOGHNA+lqIpA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPage);\nvar _c;\n$RefreshReg$(_c, \"NewPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTs7Ozs7NkNBQ2xCOzs7Ozs7cUNBQ0U7MENBQ04sOERBQUNJLE1BQUk7Z0NBQUN0QixTQUFTLEVBQUMsU0FBUzswQ0FBQyxZQUFVOzs7OztxQ0FBTzs7Ozs7OzZCQUN2Qzs7Ozs7eUJBQ0Y7Ozs7O3FCQUVKOzBCQUNOLDhEQUFDdUIsUUFBTTtnQkFBQ3ZCLFNBQVMsRUFBQyw2QkFBNkI7MEJBQzdDLDRFQUFDRyxJQUFFO29CQUFDSCxTQUFTLEVBQUMsZ0NBQWdDOzt3QkFDM0MsR0FBRzt3QkFBQyxpQ0FFUDs7Ozs7O3lCQUFLOzs7OztxQkFDRTs7b0JBQ1IsQ0FDSDtDQUNIO0dBbEdLM0IsT0FBTzs7UUFDSVQsa0RBQVM7OztBQURwQlMsS0FBQUEsT0FBTztBQW9HYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW25ldy10aXRsZV0udHN4P2ExYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgbW9udGhzLCB3ZWVrRGF5cyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgc2VjdGlvbnMsIHNvY2lhbE1lZGlhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmludGVyZmFjZSBOZXdBcnRpY2xlUXVlcnkge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIHRpbWU6IERhdGU7XG4gIHNyYzogc3RyaW5nO1xufVxuXG5jb25zdCBOZXdQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8TmV3QXJ0aWNsZVF1ZXJ5PigpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZWZmZWN0XCIsIHJvdXRlci5pc1JlYWR5KTtcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgICBjb25zb2xlLmxvZyhcImlzIHJlYWR5XCIpO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcbiAgICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIsIHF1ZXJ5KTtcbiAgICBjb25zdCBhdXhRdWVyeTogTmV3QXJ0aWNsZVF1ZXJ5ID0ge1xuICAgICAgdGl0bGU6IHF1ZXJ5LnRpdGxlIGFzIHN0cmluZyxcbiAgICAgIHN1YnRpdGxlOiBxdWVyeS5zdWJ0aXRsZSBhcyBzdHJpbmcsXG4gICAgICBpZDogcXVlcnkuaWQgYXMgc3RyaW5nLFxuICAgICAgYm9keTogcXVlcnkuYm9keSBhcyBzdHJpbmcsXG4gICAgICB0aW1lOiBuZXcgRGF0ZShxdWVyeS50aW1lIGFzIHN0cmluZyksXG4gICAgICBzcmM6IHF1ZXJ5LnNyYyBhcyBzdHJpbmcsXG4gICAgfTtcbiAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgc2V0RGF0YShhdXhRdWVyeSk7XG4gIH0sIFtyb3V0ZXIsIHJvdXRlci5pc1JlYWR5LCByb3V0ZXIucXVlcnldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBQYWNpZmljbyBCYXNxdWV0IDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQ2x1YiBQYWNpZmljbyBCYXNxdWV0ICNEZWNhbm9QYXNpb24uIE5ldXF1ZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9Mb2dvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIHNlY3Rpb25zPXtzZWN0aW9uc31cbiAgICAgICAgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfVxuICAgICAgICBzaG93SW1hZ2U9e2ZhbHNlfVxuICAgICAgICBzaG93TWVudT17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgICAge2xvYWRlZCAmJiBkYXRhID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVhbHdoaXRlIHAtOCBweC0xNiB3LTEwLzEyIG1kOnctOC8xMiBtdC0xNiBtLWF1dG8gbWItNSByb3VuZGVkIGgtZml0IHNoYWRvdyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtNnhsIGNhbWVsY2FzZSBmb250LW1lZGl1bSBcIj5cbiAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZXh0IHRleHQtM3hsIG10LTFcIj57ZGF0YS5zdWJ0aXRsZX08L2gzPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtZ3JheVwiPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHt3ZWVrRGF5cy5nZXQoZGF0YS50aW1lLmdldERheSgpKSArIFwiIFwiICsgZGF0YS50aW1lLmdldERhdGUoKX1cbiAgICAgICAgICAgICAge1wiIGRlIFwifVxuICAgICAgICAgICAgICB7bW9udGhzLmdldChkYXRhLnRpbWUuZ2V0TW9udGgoKSl9XG4gICAgICAgICAgICAgIHtcIiwgXCJ9XG4gICAgICAgICAgICAgIHtkYXRhLnRpbWUuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgaC1maXQgcmVsYXRpdmUgbS1hdXRvIG15LTggcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgIGhlaWdodD17OX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtbGdcIj57ZGF0YS5ib2R5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctZnVsbCBwLWF1dG8gZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgcm9sZT1cInN0YXR1c1wiIGNsYXNzTmFtZT1cIm0tYXV0b1wiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lIG0tYXV0byB3LTE2IGgtMTYgdGV4dC1ibGFjayBhbmltYXRlLXNwaW4gZGFyazp0ZXh0LWdyYXktNjAwIGZpbGwteWVsbG93XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudEZpbGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImgtMTYgdy1mdWxsIHAtYXV0byBib3R0b20tMFwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIE1hZGUgYnkgRmF1c3Rpbm8gTWFnZ2lvbmkgRHVmZnlcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3UGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJtb250aHMiLCJ3ZWVrRGF5cyIsInNlY3Rpb25zIiwic29jaWFsTWVkaWEiLCJJbWFnZSIsIk5ld1BhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRlZCIsInNldExvYWRlZCIsImNvbnNvbGUiLCJsb2ciLCJpc1JlYWR5IiwicXVlcnkiLCJhdXhRdWVyeSIsInRpdGxlIiwic3VidGl0bGUiLCJpZCIsImJvZHkiLCJ0aW1lIiwiRGF0ZSIsInNyYyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic2hvd0ltYWdlIiwic2hvd01lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgzIiwiaDUiLCJnZXQiLCJnZXREYXkiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImltYWdlIiwibGF5b3V0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIiwicm9sZSIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInNwYW4iLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[new-title].tsx\n"));

/***/ })

});