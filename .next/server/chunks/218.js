"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 5820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aU": () => (/* reexport safe */ _useLogout__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   "dz": () => (/* reexport safe */ _useWindowDimensions__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "f0": () => (/* reexport safe */ _useLogin__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "xJ": () => (/* reexport safe */ _useCurrentUser__WEBPACK_IMPORTED_MODULE_2__.x)
/* harmony export */ });
/* harmony import */ var _useLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4349);
/* harmony import */ var _useLogout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2790);
/* harmony import */ var _useCurrentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2256);
/* harmony import */ var _useWindowDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useLogin__WEBPACK_IMPORTED_MODULE_0__, _useLogout__WEBPACK_IMPORTED_MODULE_1__, _useCurrentUser__WEBPACK_IMPORTED_MODULE_2__]);
([_useLogin__WEBPACK_IMPORTED_MODULE_0__, _useLogout__WEBPACK_IMPORTED_MODULE_1__, _useCurrentUser__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useCurrentUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCurrentUser = ()=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const currentUser = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("currentUser");
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
    }, []);
    return user;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useLogin)
/* harmony export */ });
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3549);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLogin = ()=>{
    const log = async (username, password)=>{
        const user = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_0__/* .login */ .x)(username, password);
        if (user) {
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("currentUser", JSON.stringify(user));
        }
        return user;
    };
    return {
        log
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useLogout)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLogout = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const logout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("currentUser");
        router.push("/login");
    };
    return {
        logout
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getWindowDimensions(window1) {
    const { innerWidth: width , innerHeight: height  } = window1;
    return {
        width,
        height
    };
}
function useWindowDimensions() {
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: 1000,
        height: 600
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWindowDimensions(getWindowDimensions(window));
        function handleResize() {
            setWindowDimensions(getWindowDimensions(window));
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
};


/***/ }),

/***/ 3549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2782);

const timeout = 30000;
const timeoutErrorMessage = "Se acabo la sesion, por favor volve a ingresar";
async function login(username, password) {
    try {
        const res = await fetch(_utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .BASE_API_URL */ .Mr + "auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await res.json();
        return {
            username,
            token: data.token,
            expiredAt: Date.now() + Number(data.expiresIn) * 1000
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}


/***/ })

};
;