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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/assets/left-arrow.png */ \"./public/assets/left-arrow.png\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar NewPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded = ref1[0], setLoaded = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), otherNews = ref2[0], setOtherNews = ref2[1];\n    var setNewQuery = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,_utils_api__WEBPACK_IMPORTED_MODULE_10__.getNew)(router.query.id).then(function(res) {\n                            var auxRes = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])({}, res), {\n                                time: new Date(res.time)\n                            });\n                            setLoaded(true);\n                            setData(auxRes);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setNewQuery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setOtherNewsCall = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,_utils_api__WEBPACK_IMPORTED_MODULE_10__.getNews)().then(function(res) {\n                            var auxRes = res === null || res === void 0 ? void 0 : res.filter(function(param) {\n                                var _id = param._id;\n                                return _id != (data === null || data === void 0 ? void 0 : data._id);\n                            }).map(function(param) {\n                                var title = param.title, _id = param._id, image = param.image, subtitle = param.subtitle;\n                                return {\n                                    id: _id,\n                                    title: title,\n                                    image: image,\n                                    subtitle: subtitle\n                                };\n                            });\n                            setOtherNews(auxRes);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setOtherNewsCall() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setNewQuery();\n        if (data) {\n            setOtherNewsCall();\n        }\n    }, [\n        router,\n        router.isReady,\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sections: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.sections,\n                socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.socialMedia,\n                showMenu: false\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                        href: \"/news\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"fixed top-15 left-10 h-fit w-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"h-12 w-12 shadow shadow-yellow rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: _public_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n                                    layout: \"fill\",\n                                    alt: \"Volver a noticias\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-transparent p-8 px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 h-fit\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: \"text-left text-6xl camelcase font-medium \",\n                                children: data === null || data === void 0 ? void 0 : data.title\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"text-lext text-3xl mt-1\",\n                                children: data === null || data === void 0 ? void 0 : data.subtitle\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            (data === null || data === void 0 ? void 0 : data.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-10/12 h-fit relative my-8 rounded-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: data === null || data === void 0 ? void 0 : data.image,\n                                    layout: \"responsive\",\n                                    width: 16,\n                                    height: 9,\n                                    className: \"rounded-lg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                className: \"text-gray\",\n                                children: [\n                                    \" \",\n                                    _utils__WEBPACK_IMPORTED_MODULE_6__.weekDays.get(data === null || data === void 0 ? void 0 : data.time.getDay()) + \" \" + (data === null || data === void 0 ? void 0 : data.time.getDate()),\n                                    \" de \",\n                                    _utils__WEBPACK_IMPORTED_MODULE_6__.months.get(data === null || data === void 0 ? void 0 : data.time.getMonth()),\n                                    \", \",\n                                    data === null || data === void 0 ? void 0 : data.time.getFullYear()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"mt-8 indent-3 leading-relaxed text-justify text-lg\",\n                                children: data === null || data === void 0 ? void 0 : data.body\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-realwhite shadow-inner-xl mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                className: \"text-center text-xl mt-2\",\n                                children: [\n                                    \" \",\n                                    \"Tambien te puede interesar\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row w-10/12 my-4 mx-auto overflow-x-auto place-items-center justify-center\",\n                                children: otherNews === null || otherNews === void 0 ? void 0 : otherNews.map(function(param) {\n                                    var title = param.title, id = param.id, image = param.image, subtitle = param.subtitle;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        title: title,\n                                        image: image,\n                                        id: id,\n                                        subtitle: subtitle\n                                    }, id, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: \"h-16 w-full p-auto bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"text-white text-center text-sm\",\n                    children: [\n                        \" \",\n                        \"Made by Faustino Maggioni Duffy\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(NewPage, \"N4KYfu2xWj4Flm7GylKOP/qbI/g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPage);\nvar _c;\n$RefreshReg$(_c, \"NewPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pCLFNBQVMsRUFBQywwQkFBMEI7O29DQUNyQyxHQUFHO29DQUFDLDRCQUNxQjtvQ0FBQyxHQUFHOzs7Ozs7cUNBQzNCOzBDQUNMLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsc0ZBQXNGOzBDQUNsRzFCLFNBQVMsYUFBVEEsU0FBUyxXQUFLLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsU0FBUyxDQUFFYSxHQUFHLENBQUM7d0NBQUdDLEtBQUssU0FBTEEsS0FBSyxFQUFFVixFQUFFLFNBQUZBLEVBQUUsRUFBRVcsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTt5REFDM0MsOERBQUMzQiwyREFBTzt3Q0FDTnlCLEtBQUssRUFBRUEsS0FBSzt3Q0FDWkMsS0FBSyxFQUFFQSxLQUFLO3dDQUNaWCxFQUFFLEVBQUVBLEVBQUU7d0NBRU5ZLFFBQVEsRUFBRUEsUUFBUTt1Q0FEYlosRUFBRTs7Ozs2Q0FFUDtpQ0FDSCxDQUFDOzs7OztxQ0FDRTs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUN3QyxRQUFNO2dCQUFDbEIsU0FBUyxFQUFDLDZCQUE2QjswQkFDN0MsNEVBQUNTLElBQUU7b0JBQUNULFNBQVMsRUFBQyxnQ0FBZ0M7O3dCQUMzQyxHQUFHO3dCQUFDLGlDQUVQOzs7Ozs7eUJBQUs7Ozs7O3FCQUNFOztvQkFDUixDQUNIO0NBQ0g7R0EvR0toQyxPQUFPOztRQUNJZCxrREFBUzs7O0FBRHBCYyxLQUFBQSxPQUFPO0FBaUhiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bbmV3LXRpdGxlXS50c3g/YTFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBtb250aHMsIHdlZWtEYXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBzZWN0aW9ucywgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBOZXdDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05ld0NhcmRcIjtcbmltcG9ydCB7IGdldE5ldywgZ2V0TmV3cyB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBsZWZ0IGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2xlZnQtYXJyb3cucG5nXCI7XG5cbmludGVyZmFjZSBOZXdBcnRpY2xlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgdGltZTogRGF0ZTtcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE90aGVyTmV3IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgTmV3UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPE5ld0FydGljbGU+KCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvdGhlck5ld3MsIHNldE90aGVyTmV3c10gPSB1c2VTdGF0ZTxPdGhlck5ld1tdPigpO1xuXG4gIGNvbnN0IHNldE5ld1F1ZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGdldE5ldyhyb3V0ZXIhLnF1ZXJ5IS5pZCBhcyBzdHJpbmcpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgYXV4UmVzID0geyAuLi5yZXMhLCB0aW1lOiBuZXcgRGF0ZShyZXMhLnRpbWUpIH07XG4gICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICBzZXREYXRhKGF1eFJlcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0T3RoZXJOZXdzQ2FsbCA9IGFzeW5jICgpID0+IHtcbiAgICBnZXROZXdzKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCBhdXhSZXMgPSByZXNcbiAgICAgICAgPy5maWx0ZXIoKHsgX2lkIH0pID0+IF9pZCAhPSBkYXRhPy5faWQpXG4gICAgICAgIC5tYXAoKHsgdGl0bGUsIF9pZCwgaW1hZ2UsIHN1YnRpdGxlIH0pID0+ICh7XG4gICAgICAgICAgaWQ6IF9pZCxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICBzdWJ0aXRsZSxcbiAgICAgICAgfSkpO1xuICAgICAgc2V0T3RoZXJOZXdzKGF1eFJlcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROZXdRdWVyeSgpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRPdGhlck5ld3NDYWxsKCk7XG4gICAgfVxuICB9LCBbcm91dGVyLCByb3V0ZXIuaXNSZWFkeSwgcm91dGVyLnF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gUGFjaWZpY28gQmFzcXVldCA8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkNsdWIgUGFjaWZpY28gQmFzcXVldCAjRGVjYW5vUGFzaW9uLiBOZXVxdWVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciBzZWN0aW9ucz17c2VjdGlvbnN9IHNvY2lhbE1lZGlhPXtzb2NpYWxNZWRpYX0gc2hvd01lbnU9e2ZhbHNlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMTUgbGVmdC0xMCBoLWZpdCB3LTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTIgdy0xMiBzaGFkb3cgc2hhZG93LXllbGxvdyByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bGVmdH0gbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlZvbHZlciBhIG5vdGljaWFzXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBwLTggcHgtMTYgdy0xMC8xMiBtZDp3LTgvMTIgbXQtMTYgbS1hdXRvIG1iLTUgaC1maXRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtNnhsIGNhbWVsY2FzZSBmb250LW1lZGl1bSBcIj5cbiAgICAgICAgICAgIHtkYXRhPy50aXRsZX1cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGV4dCB0ZXh0LTN4bCBtdC0xXCI+e2RhdGE/LnN1YnRpdGxlfTwvaDM+XG4gICAgICAgICAge2RhdGE/LmltYWdlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBoLWZpdCByZWxhdGl2ZSBteS04IHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtkYXRhPy5pbWFnZX1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXlcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIHt3ZWVrRGF5cy5nZXQoZGF0YT8udGltZS5nZXREYXkoKSkgKyBcIiBcIiArIGRhdGE/LnRpbWUuZ2V0RGF0ZSgpfVxuICAgICAgICAgICAge1wiIGRlIFwifVxuICAgICAgICAgICAge21vbnRocy5nZXQoZGF0YT8udGltZS5nZXRNb250aCgpKX1cbiAgICAgICAgICAgIHtcIiwgXCJ9XG4gICAgICAgICAgICB7ZGF0YT8udGltZS5nZXRGdWxsWWVhcigpfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOCBpbmRlbnQtMyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1qdXN0aWZ5IHRleHQtbGdcIj5cbiAgICAgICAgICAgIHtkYXRhPy5ib2R5fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVhbHdoaXRlIHNoYWRvdy1pbm5lci14bCBtdC04XCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgbXQtMlwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgVGFtYmllbiB0ZSBwdWVkZSBpbnRlcmVzYXJ7XCIgXCJ9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy0xMC8xMiBteS00IG14LWF1dG8gb3ZlcmZsb3cteC1hdXRvIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAge290aGVyTmV3cz8ubWFwKCh7IHRpdGxlLCBpZCwgaW1hZ2UsIHN1YnRpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgPE5ld0NhcmRcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJoLTE2IHctZnVsbCBwLWF1dG8gYm90dG9tLTBcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBNYWRlIGJ5IEZhdXN0aW5vIE1hZ2dpb25pIER1ZmZ5XG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1BhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwibW9udGhzIiwid2Vla0RheXMiLCJzZWN0aW9ucyIsInNvY2lhbE1lZGlhIiwiSW1hZ2UiLCJOZXdDYXJkIiwiZ2V0TmV3IiwiZ2V0TmV3cyIsIkxpbmsiLCJsZWZ0IiwiTmV3UGFnZSIsInJvdXRlciIsImRhdGEiLCJzZXREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwib3RoZXJOZXdzIiwic2V0T3RoZXJOZXdzIiwic2V0TmV3UXVlcnkiLCJxdWVyeSIsImlkIiwidGhlbiIsInJlcyIsImF1eFJlcyIsInRpbWUiLCJEYXRlIiwic2V0T3RoZXJOZXdzQ2FsbCIsImZpbHRlciIsIl9pZCIsIm1hcCIsInRpdGxlIiwiaW1hZ2UiLCJzdWJ0aXRsZSIsImlzUmVhZHkiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNob3dNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwic3JjIiwibGF5b3V0IiwiYWx0IiwiaDEiLCJoMyIsIndpZHRoIiwiaGVpZ2h0IiwiaDUiLCJnZXQiLCJnZXREYXkiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInAiLCJib2R5IiwiaDQiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[new-title].tsx\n"));

/***/ })

});