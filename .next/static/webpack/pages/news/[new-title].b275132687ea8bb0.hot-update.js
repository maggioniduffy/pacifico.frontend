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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar NewPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded = ref1[0], setLoaded = ref1[1];\n    var setNewQuery = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        (0,_utils_api__WEBPACK_IMPORTED_MODULE_9__.getNew)(router.query.id).then(function(res) {\n                            var auxRes = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({}, res), {\n                                time: new Date(res.time)\n                            });\n                            setLoaded(true);\n                            setData(auxRes);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function setNewQuery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setNewQuery();\n    }, [\n        router,\n        router.isReady,\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \" Pacifico Basquet \"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Club Pacifico Basquet #DecanoPasion. Neuquen\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sections: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.sections,\n                socialMedia: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.socialMedia,\n                showMenu: false\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: loaded && data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"bg-realwhite p-8 px-16 w-10/12 md:w-8/12 mt-16 m-auto mb-5 rounded h-fit shadow rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-left text-6xl camelcase font-medium \",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: \"text-lext text-3xl mt-1\",\n                            children: data.subtitle\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                            className: \"text-gray\",\n                            children: [\n                                \" \",\n                                _utils__WEBPACK_IMPORTED_MODULE_6__.weekDays.get(data.time.getDay()) + \" \" + data.time.getDate(),\n                                \" de \",\n                                _utils__WEBPACK_IMPORTED_MODULE_6__.months.get(data.time.getMonth()),\n                                \", \",\n                                data.time.getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-10/12 h-fit relative m-auto my-8 rounded-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: data.src,\n                                layout: \"responsive\",\n                                width: 16,\n                                height: 9,\n                                className: \"rounded-lg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"mt-8 text-lg\",\n                            children: data.body\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"h-screen w-full p-auto flex place-items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        role: \"status\",\n                        className: \"m-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                                className: \"inline m-auto w-16 h-16 text-black animate-spin dark:text-gray-600 fill-yellow\",\n                                viewBox: \"0 0 100 101\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                        d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                        fill: \"currentColor\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                        d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                        fill: \"currentFill\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: \"h-16 w-full p-auto bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"text-white text-center text-sm\",\n                    children: [\n                        \" \",\n                        \"Made by Faustino Maggioni Duffy\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/fm/Documents/Code/pacifico/frontend/pages/news/[new-title].tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(NewPage, \"eGMssy13Fwkt71+MOGHNA+lqIpA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPage);\nvar _c;\n$RefreshReg$(_c, \"NewPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDSDtHQXRGS3hCLE9BQU87O1FBQ0lWLGtEQUFTOzs7QUFEcEJVLEtBQUFBLE9BQU87QUF3RmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL1tuZXctdGl0bGVdLnRzeD9hMWI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IG1vbnRocywgd2Vla0RheXMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IHNlY3Rpb25zLCBzb2NpYWxNZWRpYSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQXBpTmV3LCBnZXROZXcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG5cbmNvbnN0IE5ld1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxBcGlOZXc+KCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2V0TmV3UXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgZ2V0TmV3KHJvdXRlciEucXVlcnkhLmlkIGFzIHN0cmluZykudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCBhdXhSZXMgPSB7IC4uLnJlcywgdGltZTogbmV3IERhdGUocmVzLnRpbWUpIH07XG4gICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICBzZXREYXRhKGF1eFJlcyk7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TmV3UXVlcnkoKTtcbiAgfSwgW3JvdXRlciwgcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IFBhY2lmaWNvIEJhc3F1ZXQgPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJDbHViIFBhY2lmaWNvIEJhc3F1ZXQgI0RlY2Fub1Bhc2lvbi4gTmV1cXVlblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgc2VjdGlvbnM9e3NlY3Rpb25zfSBzb2NpYWxNZWRpYT17c29jaWFsTWVkaWF9IHNob3dNZW51PXtmYWxzZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIHtsb2FkZWQgJiYgZGF0YSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlYWx3aGl0ZSBwLTggcHgtMTYgdy0xMC8xMiBtZDp3LTgvMTIgbXQtMTYgbS1hdXRvIG1iLTUgcm91bmRlZCBoLWZpdCBzaGFkb3cgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LTZ4bCBjYW1lbGNhc2UgZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGV4dCB0ZXh0LTN4bCBtdC0xXCI+e2RhdGEuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXlcIj5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICB7d2Vla0RheXMuZ2V0KGRhdGEudGltZS5nZXREYXkoKSkgKyBcIiBcIiArIGRhdGEudGltZS5nZXREYXRlKCl9XG4gICAgICAgICAgICAgIHtcIiBkZSBcIn1cbiAgICAgICAgICAgICAge21vbnRocy5nZXQoZGF0YS50aW1lLmdldE1vbnRoKCkpfVxuICAgICAgICAgICAgICB7XCIsIFwifVxuICAgICAgICAgICAgICB7ZGF0YS50aW1lLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGgtZml0IHJlbGF0aXZlIG0tYXV0byBteS04IHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtkYXRhLnNyY31cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTggdGV4dC1sZ1wiPntkYXRhLmJvZHl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIHAtYXV0byBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwibS1hdXRvXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUgbS1hdXRvIHctMTYgaC0xNiB0ZXh0LWJsYWNrIGFuaW1hdGUtc3BpbiBkYXJrOnRleHQtZ3JheS02MDAgZmlsbC15ZWxsb3dcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50RmlsbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaC0xNiB3LWZ1bGwgcC1hdXRvIGJvdHRvbS0wXCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtc21cIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgTWFkZSBieSBGYXVzdGlubyBNYWdnaW9uaSBEdWZmeVxuICAgICAgICA8L2g1PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIm1vbnRocyIsIndlZWtEYXlzIiwic2VjdGlvbnMiLCJzb2NpYWxNZWRpYSIsIkltYWdlIiwiZ2V0TmV3IiwiTmV3UGFnZSIsInJvdXRlciIsImRhdGEiLCJzZXREYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic2V0TmV3UXVlcnkiLCJxdWVyeSIsImlkIiwidGhlbiIsInJlcyIsImF1eFJlcyIsInRpbWUiLCJEYXRlIiwiaXNSZWFkeSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzaG93TWVudSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJzdWJ0aXRsZSIsImg1IiwiZ2V0IiwiZ2V0RGF5IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJzcmMiLCJsYXlvdXQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJib2R5Iiwicm9sZSIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInNwYW4iLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[new-title].tsx\n"));

/***/ })

});