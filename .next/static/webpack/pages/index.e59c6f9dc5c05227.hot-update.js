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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar BASE_API_URL = \"http://localhost:5000/\";\nvar News = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), mainNews = ref[0], setMainNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), images = ref1[0], setImages = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var setImage = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id, i) {\n                var res, image, src;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return fetch(BASE_API_URL + \"attachment/files/\" + id);\n                        case 3:\n                            res = _ctx.sent;\n                            _ctx.next = 6;\n                            return res.blob();\n                        case 6:\n                            image = _ctx.sent;\n                            src = URL.createObjectURL(image);\n                            return _ctx.abrupt(\"return\", src);\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setImage(id, i);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        11\n                    ]\n                ]);\n            }));\n            return function setImage(id, i) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        var getNews = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, auxImages, auxNews;\n                return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getMainNews)();\n                        case 2:\n                            res = _ctx.sent;\n                            auxImages = [];\n                            auxNews = [];\n                            res === null || res === void 0 ? void 0 : res.forEach(function() {\n                                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param, i) {\n                                    var image, title, subtitle, id, src, article;\n                                    return _home_fm_Documents_Code_pacifico_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                image = param.image, title = param.title, subtitle = param.subtitle, id = param.id;\n                                                _ctx.next = 3;\n                                                return setImage(image.id, 0);\n                                            case 3:\n                                                src = _ctx.sent;\n                                                auxImages.push(src);\n                                                article = {\n                                                    title: title,\n                                                    subtitle: subtitle,\n                                                    id: id\n                                                };\n                                                auxNews.push(article);\n                                            case 7:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee);\n                                }));\n                                return function(_, i) {\n                                    return _ref.apply(this, arguments);\n                                };\n                            }());\n                            console.log(\"images len: \", auxImages);\n                            console.log(\"news len: \", auxNews);\n                            setImages(auxImages);\n                            setMainNews(auxNews);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getNews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNews();\n        var rotateNewsInterval = setInterval(function() {\n            console.log(\"interval\");\n            rotate();\n        }, 2000);\n        return function() {\n            return clearInterval(rotateNewsInterval);\n        };\n    }, []);\n    var rotate = function() {\n        if (mainNews && images) {\n            console.log(\"time to a change\");\n            var firstNew = mainNews.shift();\n            var newOrderNews = JSON.parse(JSON.stringify(mainNews));\n            newOrderNews.push(firstNew);\n            console.log(\"newOrderNews len: \", newOrderNews.length);\n            var firstImage = images.shift();\n            var newOrderImages = JSON.parse(JSON.stringify(images));\n            var imagesLen = newOrderImages.push(firstImage);\n            console.log(\"newOrderImages len: \", imagesLen);\n            setImages(newOrderImages);\n            setMainNews(newOrderNews);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"main-new pt-10\",\n        children: mainNews && images && images[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex h-full justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"main-new w-full basis-9/12 mr-4 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: images[0],\n                            height: 20,\n                            width: 30,\n                            layout: \"fill\",\n                            alt: mainNews[0].title,\n                            priority: true,\n                            className: \"rounded-lg\"\n                        }, void 0, false, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"z-10 absolute bg-realwhite bottom-0 rounded-b w-full h-20 text-center p-2 px-32 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"text-black font-bold text-2xl\",\n                                    children: [\n                                        \" \",\n                                        mainNews[0].title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                    className: \"text-gray text-xl\",\n                                    children: mainNews[0].subtitle\n                                }, void 0, false, {\n                                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                    className: \"basis-3/12 main-new\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-full flex flex-col \".concat(mainNews.length <= 3 ? \"mb-2\" : \"justify-between\"),\n                        children: mainNews.slice(1).map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"little-new relative w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: images[i + 1],\n                                        layout: \"fill\",\n                                        height: 10,\n                                        width: 10,\n                                        alt: mainNews[i + 1].title,\n                                        priority: true,\n                                        className: \"rounded-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"z-10 bg-realwhite w-full rounded-b h-20 p-2 absolute bottom-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                                className: \"text-black font-bold text-left text-xl\",\n                                                children: [\n                                                    \" \",\n                                                    item.title\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 121,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"text-gray text-left text-l\",\n                                                children: item.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                                lineNumber: 125,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, images[i + 1], true, {\n                                fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 19\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n            lineNumber: 80,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/fm/Documents/Code/pacifico/frontend/components/News/News.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this);\n};\n_s(News, \"1dTKgrdOw3Jf2F64iafR94kbw40=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3MvTmV3cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBbUQ7QUFDSztBQUN6QjtBQUMvQixJQUFNSyxZQUFZLEdBQUcsd0JBQXdCO0FBYTdDLElBQU1DLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFnQ0osR0FBd0IsR0FBeEJBLCtDQUFRLEVBQWdCLEVBQWpESyxRQUFRLEdBQWlCTCxHQUF3QixHQUF6QyxFQUFFTSxXQUFXLEdBQUlOLEdBQXdCLEdBQTVCO0lBQzVCLElBQTRCQSxJQUFzQixHQUF0QkEsK0NBQVEsQ0FBVyxFQUFFLENBQUMsRUFBM0NPLE1BQU0sR0FBZVAsSUFBc0IsR0FBckMsRUFBRVEsU0FBUyxHQUFJUixJQUFzQixHQUExQjtJQUV4QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVUsUUFBUTt1QkFBRywwUEFBT0MsRUFBVSxFQUFFQyxDQUFTLEVBQUs7b0JBRXhDQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsR0FBRzs7Ozs7O21DQUZTQyxLQUFLLENBQUNaLFlBQVksR0FBRyxtQkFBbUIsR0FBR08sRUFBRSxDQUFDOzs0QkFBMURFLEdBQUcsWUFBdUQ7O21DQUM1Q0EsR0FBRyxDQUFDSSxJQUFJLEVBQUU7OzRCQUF4QkgsS0FBSyxZQUFtQjs0QkFDeEJDLEdBQUcsR0FBR0csR0FBRyxDQUFDQyxlQUFlLENBQUNMLEtBQUssQ0FBQyxDQUFDO3lEQUNoQ0MsR0FBRzs7Ozs0QkFFVkwsUUFBUSxDQUFDQyxFQUFFLEVBQUVDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OzthQUVuQjs0QkFUS0YsUUFBUSxDQUFVQyxFQUFVLEVBQUVDLENBQVM7OztXQVM1QztRQUVELElBQU1RLE9BQU87dUJBQUcsNFBBQVk7b0JBQ3BCUCxHQUFHLEVBQ0hRLFNBQVMsRUFDVEMsT0FBTzs7Ozs7bUNBRktwQix1REFBVyxFQUFFOzs0QkFBekJXLEdBQUcsWUFBc0I7NEJBQ3pCUSxTQUFTLEdBQWEsRUFBRSxDQUFDOzRCQUN6QkMsT0FBTyxHQUFpQixFQUFFLENBQUM7NEJBQ2pDVCxHQUFHLGFBQUhBLEdBQUcsV0FBUyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLEdBQUcsQ0FBRVUsT0FBTzsyQ0FBQyxpUUFBdUNYLENBQUMsRUFBSzt3Q0FBcENFLEtBQUssRUFBRVUsS0FBSyxFQUFFQyxRQUFRLEVBQUVkLEVBQUUsRUFDeENJLEdBQUcsRUFFSFcsT0FBTzs7OztnREFIT1osS0FBSyxTQUFMQSxLQUFLLEVBQUVVLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRWQsRUFBRSxTQUFGQSxFQUFFOzt1REFDNUJELFFBQVEsQ0FBQ0ksS0FBSyxDQUFDSCxFQUFFLEVBQUUsQ0FBQyxDQUFDOztnREFBakNJLEdBQUcsWUFBOEI7Z0RBQ3ZDTSxTQUFTLENBQUNNLElBQUksQ0FBQ1osR0FBRyxDQUFFLENBQUM7Z0RBQ2ZXLE9BQU8sR0FBRztvREFDZEYsS0FBSyxFQUFMQSxLQUFLO29EQUNMQyxRQUFRLEVBQVJBLFFBQVE7b0RBQ1JkLEVBQUUsRUFBRkEsRUFBRTtpREFDSCxDQUFDO2dEQUNGVyxPQUFPLENBQUNLLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7Ozs7OztpQ0FDdkI7bURBVG1EZCxDQUFDOzs7Z0NBU25ELENBQUM7NEJBQ0hnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUVSLFNBQVMsQ0FBQyxDQUFDOzRCQUN2Q08sT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFUCxPQUFPLENBQUMsQ0FBQzs0QkFDbkNiLFNBQVMsQ0FBQ1ksU0FBUyxDQUFDLENBQUM7NEJBQ3JCZCxXQUFXLENBQUNlLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7YUFDdEI7NEJBbEJLRixPQUFPOzs7V0FrQlo7UUFDREEsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFNVSxrQkFBa0IsR0FBR0MsV0FBVyxDQUFDLFdBQU07WUFDM0NILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCRyxNQUFNLEVBQUUsQ0FBQztTQUNWLEVBQUUsSUFBSSxDQUFDO1FBRVIsT0FBTzttQkFBTUMsYUFBYSxDQUFDSCxrQkFBa0IsQ0FBQztTQUFBLENBQUM7S0FDaEQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1FLE1BQU0sR0FBRyxXQUFNO1FBQ25CLElBQUkxQixRQUFRLElBQUlFLE1BQU0sRUFBRTtZQUN0Qm9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsSUFBTUssUUFBUSxHQUFHNUIsUUFBUSxDQUFDNkIsS0FBSyxFQUFFO1lBQ2pDLElBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDakMsUUFBUSxDQUFDLENBQUM7WUFDekQ4QixZQUFZLENBQUNULElBQUksQ0FBQ08sUUFBUSxDQUFDLENBQUM7WUFDNUJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFTyxZQUFZLENBQUNJLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQU1DLFVBQVUsR0FBR2pDLE1BQU0sQ0FBQzJCLEtBQUssRUFBRTtZQUNqQyxJQUFNTyxjQUFjLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQy9CLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELElBQU1tQyxTQUFTLEdBQUdELGNBQWMsQ0FBQ2YsSUFBSSxDQUFDYyxVQUFVLENBQUM7WUFDakRiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixFQUFFYyxTQUFTLENBQUMsQ0FBQztZQUMvQ2xDLFNBQVMsQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDO1lBQzFCbkMsV0FBVyxDQUFDNkIsWUFBWSxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUVELHFCQUNFLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7a0JBQzVCdkMsUUFBUSxJQUFJRSxNQUFNLElBQUlBLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQzlCLDhEQUFDb0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzs4QkFDMUMsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQywwQ0FBMEM7O3NDQUN2RCw4REFBQzFDLG1EQUFLOzRCQUNKWSxHQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2RzQyxNQUFNLEVBQUUsRUFBRTs0QkFDVkMsS0FBSyxFQUFFLEVBQUU7NEJBQ1RDLE1BQU0sRUFBQyxNQUFNOzRCQUNiQyxHQUFHLEVBQUUzQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNrQixLQUFLOzRCQUN0QjBCLFFBQVE7NEJBQ1JMLFNBQVMsRUFBQyxZQUFZOzs7OztpQ0FDdEI7c0NBQ0YsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxrRkFBa0Y7OzhDQUMvRiw4REFBQ00sSUFBRTtvQ0FBQ04sU0FBUyxFQUFDLCtCQUErQjs7d0NBQzFDLEdBQUc7d0NBQ0h2QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNrQixLQUFLOzs7Ozs7eUNBQ2Y7OENBQ0wsOERBQUM0QixJQUFFO29DQUFDUCxTQUFTLEVBQUMsbUJBQW1COzhDQUFFdkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDbUIsUUFBUTs7Ozs7eUNBQU07Ozs7OztpQ0FDekQ7Ozs7Ozt5QkFDRjs4QkFDTiw4REFBQzRCLE9BQUs7b0JBQUNSLFNBQVMsRUFBQyxxQkFBcUI7OEJBQ3BDLDRFQUFDRCxLQUFHO3dCQUNGQyxTQUFTLEVBQUUsdUJBQXNCLENBRWhDLE9BREN2QyxRQUFRLENBQUNrQyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxpQkFBaUIsQ0FDakQ7a0NBRURsQyxRQUFRLENBQUNnRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUU1QyxDQUFDLEVBQUs7NEJBQ2xDLHFCQUNFLDhEQUFDZ0MsS0FBRztnQ0FFRkMsU0FBUyxFQUFDLDRCQUE0Qjs7a0RBRXRDLDhEQUFDMUMsbURBQUs7d0NBQ0pZLEdBQUcsRUFBRVAsTUFBTSxDQUFDSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dDQUNsQm9DLE1BQU0sRUFBQyxNQUFNO3dDQUNiRixNQUFNLEVBQUUsRUFBRTt3Q0FDVkMsS0FBSyxFQUFFLEVBQUU7d0NBQ1RFLEdBQUcsRUFBRTNDLFFBQVEsQ0FBQ00sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDWSxLQUFLO3dDQUMxQjBCLFFBQVE7d0NBQ1JMLFNBQVMsRUFBQyxZQUFZOzs7Ozs2Q0FDdEI7a0RBQ0YsOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQywrREFBK0Q7OzBEQUM1RSw4REFBQ08sSUFBRTtnREFBQ1AsU0FBUyxFQUFDLHdDQUF3Qzs7b0RBQ25ELEdBQUc7b0RBQ0hXLElBQUksQ0FBQ2hDLEtBQUs7Ozs7OztxREFDUjswREFDTCw4REFBQ2lDLEdBQUM7Z0RBQUNaLFNBQVMsRUFBQyw0QkFBNEI7MERBQ3RDVyxJQUFJLENBQUMvQixRQUFROzs7OztxREFDWjs7Ozs7OzZDQUNBOzsrQkFwQkRqQixNQUFNLENBQUNJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7cUNBcUJkLENBQ047eUJBQ0gsQ0FBQzs7Ozs7NkJBQ0U7Ozs7O3lCQUNBOzs7Ozs7aUJBQ0o7Ozs7O2FBRUosQ0FDTjtDQUNIO0dBekhLUCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUEySFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld3MvTmV3cy50c3g/ZDJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0SW1hZ2UsIGdldE1haW5OZXdzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5jb25zdCBCQVNFX0FQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIjtcblxuaW50ZXJmYWNlIE5ld0FydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSW1hZ2Uge1xuICBzcmM6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgTmV3cyA9ICgpID0+IHtcbiAgY29uc3QgW21haW5OZXdzLCBzZXRNYWluTmV3c10gPSB1c2VTdGF0ZTxOZXdBcnRpY2xlW10+KCk7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2V0SW1hZ2UgPSBhc3luYyAoaWQ6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChCQVNFX0FQSV9VUkwgKyBcImF0dGFjaG1lbnQvZmlsZXMvXCIgKyBpZCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgcmVzLmJsb2IoKTtcbiAgICAgICAgY29uc3Qgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSk7XG4gICAgICAgIHJldHVybiBzcmM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldEltYWdlKGlkLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmV3cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE1haW5OZXdzKCk7XG4gICAgICBjb25zdCBhdXhJbWFnZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBhdXhOZXdzOiBOZXdBcnRpY2xlW10gPSBbXTtcbiAgICAgIHJlcz8uZm9yRWFjaChhc3luYyAoeyBpbWFnZSwgdGl0bGUsIHN1YnRpdGxlLCBpZCB9LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IGF3YWl0IHNldEltYWdlKGltYWdlLmlkLCAwKTtcbiAgICAgICAgYXV4SW1hZ2VzLnB1c2goc3JjISk7XG4gICAgICAgIGNvbnN0IGFydGljbGUgPSB7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgc3VidGl0bGUsXG4gICAgICAgICAgaWQsXG4gICAgICAgIH07XG4gICAgICAgIGF1eE5ld3MucHVzaChhcnRpY2xlKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJpbWFnZXMgbGVuOiBcIiwgYXV4SW1hZ2VzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3cyBsZW46IFwiLCBhdXhOZXdzKTtcbiAgICAgIHNldEltYWdlcyhhdXhJbWFnZXMpO1xuICAgICAgc2V0TWFpbk5ld3MoYXV4TmV3cyk7XG4gICAgfTtcbiAgICBnZXROZXdzKCk7XG4gICAgY29uc3Qgcm90YXRlTmV3c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpbnRlcnZhbFwiKTtcbiAgICAgIHJvdGF0ZSgpO1xuICAgIH0sIDIwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwocm90YXRlTmV3c0ludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAobWFpbk5ld3MgJiYgaW1hZ2VzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRpbWUgdG8gYSBjaGFuZ2VcIik7XG4gICAgICBjb25zdCBmaXJzdE5ldyA9IG1haW5OZXdzLnNoaWZ0KCkhO1xuICAgICAgY29uc3QgbmV3T3JkZXJOZXdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtYWluTmV3cykpO1xuICAgICAgbmV3T3JkZXJOZXdzLnB1c2goZmlyc3ROZXcpO1xuICAgICAgY29uc29sZS5sb2coXCJuZXdPcmRlck5ld3MgbGVuOiBcIiwgbmV3T3JkZXJOZXdzLmxlbmd0aCk7XG4gICAgICBjb25zdCBmaXJzdEltYWdlID0gaW1hZ2VzLnNoaWZ0KCkhO1xuICAgICAgY29uc3QgbmV3T3JkZXJJbWFnZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGltYWdlcykpO1xuICAgICAgY29uc3QgaW1hZ2VzTGVuID0gbmV3T3JkZXJJbWFnZXMucHVzaChmaXJzdEltYWdlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3T3JkZXJJbWFnZXMgbGVuOiBcIiwgaW1hZ2VzTGVuKTtcbiAgICAgIHNldEltYWdlcyhuZXdPcmRlckltYWdlcyk7XG4gICAgICBzZXRNYWluTmV3cyhuZXdPcmRlck5ld3MpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uZXcgcHQtMTBcIj5cbiAgICAgIHttYWluTmV3cyAmJiBpbWFnZXMgJiYgaW1hZ2VzWzBdICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmV3IHctZnVsbCBiYXNpcy05LzEyIG1yLTQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1swXX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgYWx0PXttYWluTmV3c1swXS50aXRsZX1cbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGFic29sdXRlIGJnLXJlYWx3aGl0ZSBib3R0b20tMCByb3VuZGVkLWIgdy1mdWxsIGgtMjAgdGV4dC1jZW50ZXIgcC0yIHB4LTMyIFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAge21haW5OZXdzWzBdLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1ncmF5IHRleHQteGxcIj57bWFpbk5ld3NbMF0uc3VidGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJiYXNpcy0zLzEyIG1haW4tbmV3XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtZnVsbCBmbGV4IGZsZXgtY29sICR7XG4gICAgICAgICAgICAgICAgbWFpbk5ld3MubGVuZ3RoIDw9IDMgPyBcIm1iLTJcIiA6IFwianVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttYWluTmV3cy5zbGljZSgxKS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlc1tpICsgMV19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpdHRsZS1uZXcgcmVsYXRpdmUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaSArIDFdfVxuICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17bWFpbk5ld3NbaSArIDFdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBiZy1yZWFsd2hpdGUgdy1mdWxsIHJvdW5kZWQtYiBoLTIwIHAtMiBhYnNvbHV0ZSBib3R0b20tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LWxlZnQgdGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXkgdGV4dC1sZWZ0IHRleHQtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TWFpbk5ld3MiLCJJbWFnZSIsIkJBU0VfQVBJX1VSTCIsIk5ld3MiLCJtYWluTmV3cyIsInNldE1haW5OZXdzIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwic2V0SW1hZ2UiLCJpZCIsImkiLCJyZXMiLCJpbWFnZSIsInNyYyIsImZldGNoIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImdldE5ld3MiLCJhdXhJbWFnZXMiLCJhdXhOZXdzIiwiZm9yRWFjaCIsInRpdGxlIiwic3VidGl0bGUiLCJhcnRpY2xlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJyb3RhdGVOZXdzSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJvdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJmaXJzdE5ldyIsInNoaWZ0IiwibmV3T3JkZXJOZXdzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwiZmlyc3RJbWFnZSIsIm5ld09yZGVySW1hZ2VzIiwiaW1hZ2VzTGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJsYXlvdXQiLCJhbHQiLCJwcmlvcml0eSIsImgzIiwiaDUiLCJhc2lkZSIsInNsaWNlIiwibWFwIiwiaXRlbSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/News/News.tsx\n"));

/***/ })

});