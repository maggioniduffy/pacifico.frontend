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

/***/ "./components/News/News.tsx":
/*!**********************************!*\
  !*** ./components/News/News.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar BASE_API_URL = \"http://localhost:5000/\";\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), images = ref1[0], setImages = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var setImage = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id, i) {\n                var res, image, src;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return fetch(BASE_API_URL + \"attachment/files/\" + id);\n                        case 3:\n                            res = _ctx.sent;\n                            _ctx.next = 6;\n                            return res.blob();\n                        case 6:\n                            image = _ctx.sent;\n                            src = URL.createObjectURL(image);\n                            return _ctx.abrupt(\"return\", src);\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        11\n                    ]\n                ]);\n            }));\n            return function setImage(id, i) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, auxImages, auxNews;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getMainNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            auxImages = [];\n                            auxNews = [];\n                            res === null || res === void 0 ? void 0 : res.forEach(function() {\n                                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param, i) {\n                                    var image, title, subtitle, id, src, article;\n                                    return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                image = param.image, title = param.title, subtitle = param.subtitle, id = param.id;\n                                                _ctx.next = 3;\n                                                return setImage(image.id, i);\n                                            case 3:\n                                                src = _ctx.sent;\n                                                auxImages.push(src);\n                                                article = {\n                                                    title: title,\n                                                    subtitle: subtitle,\n                                                    id: id\n                                                };\n                                                auxNews.push(article);\n                                            case 7:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee);\n                                }));\n                                return function(_, i) {\n                                    return _ref.apply(this, arguments);\n                                };\n                            }());\n                            console.log(\"images len: \", auxImages);\n                            console.log(\"news len: \", auxNews);\n                            setImages(auxImages);\n                            setMainNews(auxNews);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n        setTimeout(function() {\n            if (mainNews && images) {\n                var newOrderNews = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mainNews);\n                var newOrderImages = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(images);\n                mainNews === null || mainNews === void 0 ? void 0 : mainNews.forEach(function(mNew, i) {\n                    newOrderNews[(i + 1) % mainNews.length] = mNew;\n                });\n                images === null || images === void 0 ? void 0 : images.forEach(function(image, i) {\n                    newOrderImages[(i + 1) % images.length] = image;\n                });\n                setImages(newOrderImages);\n                setMainNews(newOrderNews);\n            }\n        }, 1000);\n        return;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new pt-10\",\n        children: mainNews && images && images[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex h-full justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"main-new w-full basis-9/12 mr-4 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: images[0],\n                            height: 20,\n                            width: 30,\n                            layout: \"fill\",\n                            alt: mainNews[0].title,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"z-10 absolute bg-realwhite bottom-0 w-full h-20 text-center p-2 px-32 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"text-black font-bold text-2xl\",\n                                    children: [\n                                        \" \",\n                                        mainNews[0].title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                    className: \"text-gray text-xl\",\n                                    children: mainNews[0].subtitle\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                    className: \"basis-3/12 main-new\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-full flex flex-col justify-between\",\n                        children: mainNews.slice(1).map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"h-2/6 relative w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: images[i + 1],\n                                        layout: \"fill\",\n                                        height: 10,\n                                        width: 10,\n                                        alt: mainNews[i + 1].title,\n                                        priority: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"z-10 bg-realwhite w-full h-20 p-2 absolute bottom-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                                className: \"text-black font-bold text-left text-xl\",\n                                                children: [\n                                                    \" \",\n                                                    item.title\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"text-gray text-left text-l\",\n                                                children: item.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, images[i + 1], true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 19\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 70,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDTCw4REFBQ3dCLEdBQUM7Z0RBQUNaLFNBQVMsRUFBQyw0QkFBNEI7MERBQ3RDVyxJQUFJLENBQUN0QixRQUFROzs7OztxREFDWjs7Ozs7OzZDQUNBOzsrQkFqQkVqQixNQUFNLENBQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7cUNBa0JqQixDQUNOO3lCQUNILENBQUM7Ozs7OzZCQUNFOzs7Ozt5QkFDQTs7Ozs7O2lCQUNKOzs7OzthQUVKLENBQ047Q0FDSDtHQXRHS1AsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBd0dWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL05ld3MudHN4P2QyZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEltYWdlLCBnZXRNYWluTmV3cyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuY29uc3QgQkFTRV9BUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCI7XG5cbmludGVyZmFjZSBOZXdBcnRpY2xlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEltYWdlIHtcbiAgc3JjOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5ld3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttYWluTmV3cywgc2V0TWFpbk5ld3NdID0gdXNlU3RhdGU8TmV3QXJ0aWNsZVtdPigpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNldEltYWdlID0gYXN5bmMgKGlkOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQkFTRV9BUElfVVJMICsgXCJhdHRhY2htZW50L2ZpbGVzL1wiICsgaWQpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHJlcy5ibG9iKCk7XG4gICAgICAgIGNvbnN0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpO1xuICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9O1xuICAgIGNvbnN0IGdldE5ld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRNYWluTmV3cygpO1xuICAgICAgY29uc3QgYXV4SW1hZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgY29uc3QgYXV4TmV3czogTmV3QXJ0aWNsZVtdID0gW107XG4gICAgICByZXM/LmZvckVhY2goYXN5bmMgKHsgaW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSwgaWQgfSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSBhd2FpdCBzZXRJbWFnZShpbWFnZS5pZCwgaSk7XG4gICAgICAgIGF1eEltYWdlcy5wdXNoKHNyYyEpO1xuICAgICAgICBjb25zdCBhcnRpY2xlID0ge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIHN1YnRpdGxlLFxuICAgICAgICAgIGlkLFxuICAgICAgICB9O1xuICAgICAgICBhdXhOZXdzLnB1c2goYXJ0aWNsZSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VzIGxlbjogXCIsIGF1eEltYWdlcyk7XG4gICAgICBjb25zb2xlLmxvZyhcIm5ld3MgbGVuOiBcIiwgYXV4TmV3cyk7XG4gICAgICBzZXRJbWFnZXMoYXV4SW1hZ2VzKTtcbiAgICAgIHNldE1haW5OZXdzKGF1eE5ld3MpO1xuICAgIH07XG4gICAgZ2V0TmV3cygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKG1haW5OZXdzICYmIGltYWdlcykge1xuICAgICAgICBjb25zdCBuZXdPcmRlck5ld3MgPSBbLi4ubWFpbk5ld3MhXTtcbiAgICAgICAgY29uc3QgbmV3T3JkZXJJbWFnZXMgPSBbLi4uaW1hZ2VzXTtcbiAgICAgICAgbWFpbk5ld3M/LmZvckVhY2goKG1OZXcsIGkpID0+IHtcbiAgICAgICAgICBuZXdPcmRlck5ld3NbKGkgKyAxKSAlIG1haW5OZXdzLmxlbmd0aF0gPSBtTmV3O1xuICAgICAgICB9KTtcbiAgICAgICAgaW1hZ2VzPy5mb3JFYWNoKChpbWFnZSwgaSkgPT4ge1xuICAgICAgICAgIG5ld09yZGVySW1hZ2VzWyhpICsgMSkgJSBpbWFnZXMubGVuZ3RoXSA9IGltYWdlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0SW1hZ2VzKG5ld09yZGVySW1hZ2VzKTtcbiAgICAgICAgc2V0TWFpbk5ld3MobmV3T3JkZXJOZXdzKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm47XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uZXcgcHQtMTBcIj5cbiAgICAgIHttYWluTmV3cyAmJiBpbWFnZXMgJiYgaW1hZ2VzWzBdICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmV3IHctZnVsbCBiYXNpcy05LzEyIG1yLTQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1swXX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgYWx0PXttYWluTmV3c1swXS50aXRsZX1cbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgYmctcmVhbHdoaXRlIGJvdHRvbS0wIHctZnVsbCBoLTIwIHRleHQtY2VudGVyIHAtMiBweC0zMiBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIHttYWluTmV3c1swXS50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtZ3JheSB0ZXh0LXhsXCI+e21haW5OZXdzWzBdLnN1YnRpdGxlfTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYmFzaXMtMy8xMiBtYWluLW5ld1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAge21haW5OZXdzLnNsaWNlKDEpLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2VzW2kgKyAxXX0gY2xhc3NOYW1lPVwiaC0yLzYgcmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2kgKyAxXX1cbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e21haW5OZXdzW2kgKyAxXS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgYmctcmVhbHdoaXRlIHctZnVsbCBoLTIwIHAtMiBhYnNvbHV0ZSBib3R0b20tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LWxlZnQgdGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXkgdGV4dC1sZWZ0IHRleHQtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TWFpbk5ld3MiLCJJbWFnZSIsIkJBU0VfQVBJX1VSTCIsIk5ld3MiLCJtYWluTmV3cyIsInNldE1haW5OZXdzIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwic2V0SW1hZ2UiLCJpZCIsImkiLCJyZXMiLCJpbWFnZSIsInNyYyIsImZldGNoIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImdldE5ld3MiLCJhdXhJbWFnZXMiLCJhdXhOZXdzIiwiZm9yRWFjaCIsInRpdGxlIiwic3VidGl0bGUiLCJhcnRpY2xlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwibmV3T3JkZXJOZXdzIiwibmV3T3JkZXJJbWFnZXMiLCJtTmV3IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJsYXlvdXQiLCJhbHQiLCJwcmlvcml0eSIsImgzIiwiaDUiLCJhc2lkZSIsInNsaWNlIiwibWFwIiwiaXRlbSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});