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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar BASE_API_URL = \"http://localhost:5000/\";\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), images = ref1[0], setImages = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var setImage = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id, i) {\n                var res, image, src;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return fetch(BASE_API_URL + \"attachment/files/\" + id);\n                        case 3:\n                            res = _ctx.sent;\n                            _ctx.next = 6;\n                            return res.blob();\n                        case 6:\n                            image = _ctx.sent;\n                            src = URL.createObjectURL(image);\n                            return _ctx.abrupt(\"return\", src);\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        11\n                    ]\n                ]);\n            }));\n            return function setImage(id, i) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, auxImages, auxNews;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getMainNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            auxImages = [];\n                            auxNews = [];\n                            res === null || res === void 0 ? void 0 : res.forEach(function() {\n                                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param, i) {\n                                    var image, title, subtitle, id, src, article;\n                                    return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                image = param.image, title = param.title, subtitle = param.subtitle, id = param.id;\n                                                _ctx.next = 3;\n                                                return setImage(image.id, i);\n                                            case 3:\n                                                src = _ctx.sent;\n                                                auxImages.push(src);\n                                                article = {\n                                                    title: title,\n                                                    subtitle: subtitle,\n                                                    id: id\n                                                };\n                                                auxNews.push(article);\n                                            case 7:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee);\n                                }));\n                                return function(_, i) {\n                                    return _ref.apply(this, arguments);\n                                };\n                            }());\n                            console.log(\"images len: \", auxImages);\n                            console.log(\"news len: \", auxNews);\n                            setImages(auxImages);\n                            setMainNews(auxNews);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n        setTimeout(function() {\n            if (mainNews && images) {\n                var newOrderNews = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mainNews);\n                var newOrderImages = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(images);\n                mainNews === null || mainNews === void 0 ? void 0 : mainNews.forEach(function(mNew, i) {\n                    newOrderNews[(i + 1) % mainNews.length] = mNew;\n                });\n                images === null || images === void 0 ? void 0 : images.forEach(function(image, i) {\n                    newOrderImages[(i + 1) % images.length] = image;\n                });\n                setImages(newOrderImages);\n                setMainNews(newOrderNews);\n            }\n        }, 1000);\n        return;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new\",\n        children: mainNews && images && images[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex h-full justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"main-new h-full w-full basis-9/12 mr-4 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: images[0],\n                            height: 20,\n                            width: 30,\n                            layout: \"fill\",\n                            alt: mainNews[0].title,\n                            priority: true,\n                            className: \"rounded-l-xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"z-10 absolute bg-realwhite bottom-0 w-full text-center p-2 px-32 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"text-black font-bold text-2xl\",\n                                    children: [\n                                        \" \",\n                                        mainNews[0].title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                    className: \"text-gray text-xl\",\n                                    children: mainNews[0].subtitle\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                    className: \"basis-3/12 h-full bg-realwhite rounded-r-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        className: \"h-full\",\n                        children: mainNews.slice(1).map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                className: \"h-2/6 relative w-full mb-2 rounded-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: images[i + 1],\n                                        layout: \"fill\",\n                                        height: 20,\n                                        width: 20,\n                                        alt: mainNews[i + 1].title,\n                                        priority: true,\n                                        className: \"rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"z-10 bg-realwhite w-full p-2 absolute\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                                className: \"text-black font-bold text-left text-xl\",\n                                                children: [\n                                                    \" \",\n                                                    item.title\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"text-gray text-left text-l\",\n                                                children: item.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, images[i + 1], true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 19\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 70,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRztvREFDSFksSUFBSSxDQUFDeEIsS0FBSzs7Ozs7O3FEQUNSOzBEQUNMLDhEQUFDMEIsR0FBQztnREFBQ2QsU0FBUyxFQUFDLDRCQUE0QjswREFDdENZLElBQUksQ0FBQ3ZCLFFBQVE7Ozs7O3FEQUNaOzs7Ozs7NkNBQ0E7OytCQXBCRGpCLE1BQU0sQ0FBQ0ksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztxQ0FxQmYsQ0FDTDt5QkFDSCxDQUFDOzs7Ozs2QkFDQzs7Ozs7eUJBQ0M7Ozs7OztpQkFDSjs7Ozs7YUFFSixDQUNOO0NBQ0g7R0EzR0tQLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTZHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLnRzeD9kMmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRJbWFnZSwgZ2V0TWFpbk5ld3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmNvbnN0IEJBU0VfQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiO1xuXG5pbnRlcmZhY2UgTmV3QXJ0aWNsZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJbWFnZSB7XG4gIHNyYzogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBOZXdzID0gKCkgPT4ge1xuICBjb25zdCBbbWFpbk5ld3MsIHNldE1haW5OZXdzXSA9IHVzZVN0YXRlPE5ld0FydGljbGVbXT4oKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZXRJbWFnZSA9IGFzeW5jIChpZDogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEJBU0VfQVBJX1VSTCArIFwiYXR0YWNobWVudC9maWxlcy9cIiArIGlkKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCByZXMuYmxvYigpO1xuICAgICAgICBjb25zdCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKTtcbiAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfTtcbiAgICBjb25zdCBnZXROZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TWFpbk5ld3MoKTtcbiAgICAgIGNvbnN0IGF1eEltYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGNvbnN0IGF1eE5ld3M6IE5ld0FydGljbGVbXSA9IFtdO1xuICAgICAgcmVzPy5mb3JFYWNoKGFzeW5jICh7IGltYWdlLCB0aXRsZSwgc3VidGl0bGUsIGlkIH0sIGkpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gYXdhaXQgc2V0SW1hZ2UoaW1hZ2UuaWQsIGkpO1xuICAgICAgICBhdXhJbWFnZXMucHVzaChzcmMhKTtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IHtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBzdWJ0aXRsZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfTtcbiAgICAgICAgYXV4TmV3cy5wdXNoKGFydGljbGUpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImltYWdlcyBsZW46IFwiLCBhdXhJbWFnZXMpO1xuICAgICAgY29uc29sZS5sb2coXCJuZXdzIGxlbjogXCIsIGF1eE5ld3MpO1xuICAgICAgc2V0SW1hZ2VzKGF1eEltYWdlcyk7XG4gICAgICBzZXRNYWluTmV3cyhhdXhOZXdzKTtcbiAgICB9O1xuICAgIGdldE5ld3MoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChtYWluTmV3cyAmJiBpbWFnZXMpIHtcbiAgICAgICAgY29uc3QgbmV3T3JkZXJOZXdzID0gWy4uLm1haW5OZXdzIV07XG4gICAgICAgIGNvbnN0IG5ld09yZGVySW1hZ2VzID0gWy4uLmltYWdlc107XG4gICAgICAgIG1haW5OZXdzPy5mb3JFYWNoKChtTmV3LCBpKSA9PiB7XG4gICAgICAgICAgbmV3T3JkZXJOZXdzWyhpICsgMSkgJSBtYWluTmV3cy5sZW5ndGhdID0gbU5ldztcbiAgICAgICAgfSk7XG4gICAgICAgIGltYWdlcz8uZm9yRWFjaCgoaW1hZ2UsIGkpID0+IHtcbiAgICAgICAgICBuZXdPcmRlckltYWdlc1soaSArIDEpICUgaW1hZ2VzLmxlbmd0aF0gPSBpbWFnZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEltYWdlcyhuZXdPcmRlckltYWdlcyk7XG4gICAgICAgIHNldE1haW5OZXdzKG5ld09yZGVyTmV3cyk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmV3XCI+XG4gICAgICB7bWFpbk5ld3MgJiYgaW1hZ2VzICYmIGltYWdlc1swXSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5ldyBoLWZ1bGwgdy1mdWxsIGJhc2lzLTkvMTIgbXItNCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzWzBdfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBhbHQ9e21haW5OZXdzWzBdLnRpdGxlfVxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWwteGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBhYnNvbHV0ZSBiZy1yZWFsd2hpdGUgYm90dG9tLTAgdy1mdWxsIHRleHQtY2VudGVyIHAtMiBweC0zMiBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIHttYWluTmV3c1swXS50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtZ3JheSB0ZXh0LXhsXCI+e21haW5OZXdzWzBdLnN1YnRpdGxlfTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYmFzaXMtMy8xMiBoLWZ1bGwgYmctcmVhbHdoaXRlIHJvdW5kZWQtci14bFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImgtZnVsbFwiPlxuICAgICAgICAgICAgICB7bWFpbk5ld3Muc2xpY2UoMSkubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlc1tpICsgMV19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMi82IHJlbGF0aXZlIHctZnVsbCBtYi0yIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpICsgMV19XG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXttYWluTmV3c1tpICsgMV0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGJnLXJlYWx3aGl0ZSB3LWZ1bGwgcC0yIGFic29sdXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtbGVmdCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheSB0ZXh0LWxlZnQgdGV4dC1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TWFpbk5ld3MiLCJJbWFnZSIsIkJBU0VfQVBJX1VSTCIsIk5ld3MiLCJtYWluTmV3cyIsInNldE1haW5OZXdzIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwic2V0SW1hZ2UiLCJpZCIsImkiLCJyZXMiLCJpbWFnZSIsInNyYyIsImZldGNoIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImdldE5ld3MiLCJhdXhJbWFnZXMiLCJhdXhOZXdzIiwiZm9yRWFjaCIsInRpdGxlIiwic3VidGl0bGUiLCJhcnRpY2xlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwibmV3T3JkZXJOZXdzIiwibmV3T3JkZXJJbWFnZXMiLCJtTmV3IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJsYXlvdXQiLCJhbHQiLCJwcmlvcml0eSIsImgzIiwiaDUiLCJhc2lkZSIsInVsIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});