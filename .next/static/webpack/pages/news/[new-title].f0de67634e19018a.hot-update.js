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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NewCard */ \"./components/NewCard/index.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/assets/left-arrow.png */ \"./public/assets/left-arrow.png\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar NewPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded = ref1[0], setLoaded = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), otherNews = ref2[0], setOtherNews = ref2[1];\n    var setNewQuery = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,_utils_api__WEBPACK_IMPORTED_MODULE_10__.getNew)(router.query.id).then(function(res) {\n                            var auxRes = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])({}, res), {\n                                time: new Date(res.time)\n                            });\n                            setLoaded(true);\n                            setData(auxRes);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setNewQuery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setOtherNewsCall = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,_utils_api__WEBPACK_IMPORTED_MODULE_10__.getNews)().then(function(res) {\n                            var auxRes = res === null || res === void 0 ? void 0 : res.filter(function(param) {\n                                var _id = param._id;\n                                return _id != (data === null || data === void 0 ? void 0 : data._id);\n                            }).map(function(param) {\n                                var title = param.title, _id = param._id, image = param.image, subtitle = param.subtitle;\n                                return {\n                                    id: _id,\n                                    title: title,\n                                    image: image,\n                                    subtitle: subtitle\n                                };\n                            });\n                            setOtherNews(auxRes);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setOtherNewsCall() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setNewQuery();\n        if (data) {\n            setOtherNewsCall();\n        }\n    }, [\n        router,\n        router.isReady,\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sections: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.sections,\n                socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.socialMedia,\n                showMenu: false\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                        href: \"/news\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"fixed top-15 left-10 h-fit w-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"h-12 w-12 shadow shadow-yellow rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: _public_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n                                    layout: \"fill\",\n                                    alt: \"Volver a noticias\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-transparent p-8 px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 h-fit\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: \"text-left text-6xl camelcase font-medium \",\n                                children: data === null || data === void 0 ? void 0 : data.title\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"text-lext text-3xl mt-1\",\n                                children: data === null || data === void 0 ? void 0 : data.subtitle\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                className: \"text-gray\",\n                                children: [\n                                    \" \",\n                                    _utils__WEBPACK_IMPORTED_MODULE_6__.weekDays.get(data === null || data === void 0 ? void 0 : data.time.getDay()) + \" \" + (data === null || data === void 0 ? void 0 : data.time.getDate()),\n                                    \" de \",\n                                    _utils__WEBPACK_IMPORTED_MODULE_6__.months.get(data === null || data === void 0 ? void 0 : data.time.getMonth()),\n                                    \", \",\n                                    data === null || data === void 0 ? void 0 : data.time.getFullYear()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this),\n                            (data === null || data === void 0 ? void 0 : data.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-10/12 h-fit relative my-8 rounded-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: data === null || data === void 0 ? void 0 : data.image,\n                                    layout: \"responsive\",\n                                    width: 16,\n                                    height: 9,\n                                    className: \"rounded-lg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"mt-16 indent-3 leading-relaxed text-justify text-lg\",\n                                children: data === null || data === void 0 ? void 0 : data.body\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-realwhite shadow-inner-xl mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                className: \"text-center text-xl mt-2\",\n                                children: [\n                                    \" \",\n                                    \"Tambien te puede interesar\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row w-10/12 my-4 mx-auto overflow-x-auto place-items-center justify-center\",\n                                children: otherNews === null || otherNews === void 0 ? void 0 : otherNews.map(function(param) {\n                                    var title = param.title, id = param.id, image = param.image, subtitle = param.subtitle;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NewCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        title: title,\n                                        image: image,\n                                        id: id,\n                                        subtitle: subtitle\n                                    }, id, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: \"h-16 w-full p-auto bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"text-white text-center text-sm\",\n                    children: [\n                        \" \",\n                        \"Made by Faustino Maggioni Duffy\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(NewPage, \"N4KYfu2xWj4Flm7GylKOP/qbI/g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPage);\nvar _c;\n$RefreshReg$(_c, \"NewPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQixTQUFTLEVBQUMsMEJBQTBCOztvQ0FDckMsR0FBRztvQ0FBQyw0QkFDcUI7b0NBQUMsR0FBRzs7Ozs7O3FDQUMzQjswQ0FDTCw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHNGQUFzRjswQ0FDbEcxQixTQUFTLGFBQVRBLFNBQVMsV0FBSyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLFNBQVMsQ0FBRWEsR0FBRyxDQUFDO3dDQUFHQyxLQUFLLFNBQUxBLEtBQUssRUFBRVYsRUFBRSxTQUFGQSxFQUFFLEVBQUVXLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7eURBQzNDLDhEQUFDM0IsMkRBQU87d0NBQ055QixLQUFLLEVBQUVBLEtBQUs7d0NBQ1pDLEtBQUssRUFBRUEsS0FBSzt3Q0FDWlgsRUFBRSxFQUFFQSxFQUFFO3dDQUVOWSxRQUFRLEVBQUVBLFFBQVE7dUNBRGJaLEVBQUU7Ozs7NkNBRVA7aUNBQ0gsQ0FBQzs7Ozs7cUNBQ0U7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDd0MsUUFBTTtnQkFBQ2xCLFNBQVMsRUFBQyw2QkFBNkI7MEJBQzdDLDRFQUFDTyxJQUFFO29CQUFDUCxTQUFTLEVBQUMsZ0NBQWdDOzt3QkFDM0MsR0FBRzt3QkFBQyxpQ0FFUDs7Ozs7O3lCQUFLOzs7OztxQkFDRTs7b0JBQ1IsQ0FDSDtDQUNIO0dBL0dLaEMsT0FBTzs7UUFDSWQsa0RBQVM7OztBQURwQmMsS0FBQUEsT0FBTztBQWlIYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW25ldy10aXRsZV0udHN4P2ExYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgbW9udGhzLCB3ZWVrRGF5cyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgc2VjdGlvbnMsIHNvY2lhbE1lZGlhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTmV3Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OZXdDYXJkXCI7XG5pbXBvcnQgeyBnZXROZXcsIGdldE5ld3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgbGVmdCBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9sZWZ0LWFycm93LnBuZ1wiO1xuXG5pbnRlcmZhY2UgTmV3QXJ0aWNsZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIF9pZDogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIHRpbWU6IERhdGU7XG4gIGltYWdlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBPdGhlck5ldyB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5ld1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxOZXdBcnRpY2xlPigpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3RoZXJOZXdzLCBzZXRPdGhlck5ld3NdID0gdXNlU3RhdGU8T3RoZXJOZXdbXT4oKTtcblxuICBjb25zdCBzZXROZXdRdWVyeSA9IGFzeW5jICgpID0+IHtcbiAgICBnZXROZXcocm91dGVyIS5xdWVyeSEuaWQgYXMgc3RyaW5nKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGF1eFJlcyA9IHsgLi4ucmVzISwgdGltZTogbmV3IERhdGUocmVzIS50aW1lKSB9O1xuICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgc2V0RGF0YShhdXhSZXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldE90aGVyTmV3c0NhbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgZ2V0TmV3cygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgYXV4UmVzID0gcmVzXG4gICAgICAgID8uZmlsdGVyKCh7IF9pZCB9KSA9PiBfaWQgIT0gZGF0YT8uX2lkKVxuICAgICAgICAubWFwKCh7IHRpdGxlLCBfaWQsIGltYWdlLCBzdWJ0aXRsZSB9KSA9PiAoe1xuICAgICAgICAgIGlkOiBfaWQsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgc3VidGl0bGUsXG4gICAgICAgIH0pKTtcbiAgICAgIHNldE90aGVyTmV3cyhhdXhSZXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TmV3UXVlcnkoKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgc2V0T3RoZXJOZXdzQ2FsbCgpO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IFBhY2lmaWNvIEJhc3F1ZXQgPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJDbHViIFBhY2lmaWNvIEJhc3F1ZXQgI0RlY2Fub1Bhc2lvbi4gTmV1cXVlblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgc2VjdGlvbnM9e3NlY3Rpb25zfSBzb2NpYWxNZWRpYT17c29jaWFsTWVkaWF9IHNob3dNZW51PXtmYWxzZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTE1IGxlZnQtMTAgaC1maXQgdy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEyIHctMTIgc2hhZG93IHNoYWRvdy15ZWxsb3cgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xlZnR9IGxheW91dD1cImZpbGxcIiBhbHQ9XCJWb2x2ZXIgYSBub3RpY2lhc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgcC04IHB4LTE2IHctMTAvMTIgbWQ6dy04LzEyIG10LTE2IG0tYXV0byBtYi01IGgtZml0XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LTZ4bCBjYW1lbGNhc2UgZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAgICB7ZGF0YT8udGl0bGV9XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxleHQgdGV4dC0zeGwgbXQtMVwiPntkYXRhPy5zdWJ0aXRsZX08L2gzPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXlcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIHt3ZWVrRGF5cy5nZXQoZGF0YT8udGltZS5nZXREYXkoKSkgKyBcIiBcIiArIGRhdGE/LnRpbWUuZ2V0RGF0ZSgpfVxuICAgICAgICAgICAge1wiIGRlIFwifVxuICAgICAgICAgICAge21vbnRocy5nZXQoZGF0YT8udGltZS5nZXRNb250aCgpKX1cbiAgICAgICAgICAgIHtcIiwgXCJ9XG4gICAgICAgICAgICB7ZGF0YT8udGltZS5nZXRGdWxsWWVhcigpfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAge2RhdGE/LmltYWdlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBoLWZpdCByZWxhdGl2ZSBteS04IHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtkYXRhPy5pbWFnZX1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTE2IGluZGVudC0zIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWp1c3RpZnkgdGV4dC1sZ1wiPlxuICAgICAgICAgICAge2RhdGE/LmJvZHl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWFsd2hpdGUgc2hhZG93LWlubmVyLXhsIG10LThcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14bCBtdC0yXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBUYW1iaWVuIHRlIHB1ZWRlIGludGVyZXNhcntcIiBcIn1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LTEwLzEyIG15LTQgbXgtYXV0byBvdmVyZmxvdy14LWF1dG8gcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICB7b3RoZXJOZXdzPy5tYXAoKHsgdGl0bGUsIGlkLCBpbWFnZSwgc3VidGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgICA8TmV3Q2FyZFxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImgtMTYgdy1mdWxsIHAtYXV0byBib3R0b20tMFwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIE1hZGUgYnkgRmF1c3Rpbm8gTWFnZ2lvbmkgRHVmZnlcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3UGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJtb250aHMiLCJ3ZWVrRGF5cyIsInNlY3Rpb25zIiwic29jaWFsTWVkaWEiLCJJbWFnZSIsIk5ld0NhcmQiLCJnZXROZXciLCJnZXROZXdzIiwiTGluayIsImxlZnQiLCJOZXdQYWdlIiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJvdGhlck5ld3MiLCJzZXRPdGhlck5ld3MiLCJzZXROZXdRdWVyeSIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzIiwiYXV4UmVzIiwidGltZSIsIkRhdGUiLCJzZXRPdGhlck5ld3NDYWxsIiwiZmlsdGVyIiwiX2lkIiwibWFwIiwidGl0bGUiLCJpbWFnZSIsInN1YnRpdGxlIiwiaXNSZWFkeSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic2hvd01lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJzcmMiLCJsYXlvdXQiLCJhbHQiLCJoMSIsImgzIiwiaDUiLCJnZXQiLCJnZXREYXkiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImJvZHkiLCJoNCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/[new-title].tsx\n"));

/***/ })

});