"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5820);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2782);
/* harmony import */ var _AddComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const initialState = {
    time: "",
    title: "",
    subtitle: "",
    body: "",
    image: null,
    imageName: "",
    imageDesc: ""
};
var ActionType;
(function(ActionType) {
    ActionType["TIME"] = "TIME";
    ActionType["TITLE"] = "TITLE";
    ActionType["SUBTITLE"] = "SUBTITLE";
    ActionType["BODY"] = "BODY";
    ActionType["IMAGE"] = "IMAGE";
    ActionType["IMAGENAME"] = "IMAMGENAME";
    ActionType["IMAGEDESC"] = "IMAGEDESC";
    ActionType["CLEAR"] = "CLEAR";
})(ActionType || (ActionType = {}));
function reducer(state = initialState, action) {
    switch(action.type){
        case ActionType.BODY:
            return {
                ...state,
                body: action.payload
            };
        case ActionType.IMAGE:
            return {
                ...state,
                image: action.payload
            };
        case ActionType.IMAGENAME:
            return {
                ...state,
                imageName: action.payload
            };
        case ActionType.IMAGEDESC:
            return {
                ...state,
                imageDesc: action.payload
            };
        case ActionType.TITLE:
            return {
                ...state,
                title: action.payload
            };
        case ActionType.TIME:
            return {
                ...state,
                time: action.payload
            };
        case ActionType.SUBTITLE:
            return {
                ...state,
                subtitle: action.payload
            };
        case ActionType.CLEAR:
            return initialState;
        default:
            return state;
    }
}
const HandleNew = ({ id , propState =initialState  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, propState);
    const currentUser = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentUser */ .xJ)();
    const uploadImage = (event)=>{
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            dispatch({
                type: ActionType.IMAGE,
                payload: i
            });
        }
    };
    const inputs = [
        {
            placeholder: "Titulo",
            value: state.title,
            setter: (t)=>dispatch({
                    type: ActionType.TITLE,
                    payload: t
                })
        },
        {
            placeholder: "Subtitulo",
            value: state.subtitle,
            setter: (r)=>dispatch({
                    type: ActionType.SUBTITLE,
                    payload: r
                })
        },
        {
            placeholder: "Cuerpo",
            value: state.body,
            setter: (r)=>dispatch({
                    type: ActionType.BODY,
                    payload: r
                }),
            type: "textarea"
        },
        {
            placeholder: "Fecha",
            value: state.time,
            setter: (r)=>dispatch({
                    type: ActionType.TIME,
                    payload: r
                }),
            type: "datetime-local"
        },
        {
            placeholder: "Imagen",
            value: state.image,
            setter: (e)=>uploadImage(e),
            type: "file"
        },
        {
            placeholder: "Nombre de la imagen",
            value: state.imageName,
            setter: (r)=>dispatch({
                    type: ActionType.IMAGENAME,
                    payload: r
                })
        },
        {
            placeholder: "Descripcion de la imagen",
            value: state.imageDesc,
            setter: (r)=>dispatch({
                    type: ActionType.IMAGEDESC,
                    payload: r
                })
        }, 
    ];
    const send = async (e)=>{
        e.preventDefault();
        try {
            const { image , title , subtitle , body , time , imageDesc , imageName  } = state;
            const auxTime = time.replace("T", " ") + ":00.000";
            let res;
            const bodyToSend = new FormData();
            bodyToSend.append("file", image);
            bodyToSend.append("title", title);
            bodyToSend.append("time", auxTime);
            bodyToSend.append("body", body);
            bodyToSend.append("subtitle", subtitle);
            bodyToSend.append("imageName", imageName);
            bodyToSend.append("imageDesc", imageDesc);
            if (id) {
                res = await fetch(_utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .BASE_API_URL */ .Mr + "news/" + id, {
                    method: "PATCH",
                    headers: {
                        Authorization: "Bearer " + currentUser?.token,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(state)
                });
            } else {
                res = await fetch(_utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .BASE_API_URL */ .Mr + "news", {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + currentUser?.token
                    },
                    body: bodyToSend
                });
            }
            const data = await res.json();
            dispatch({
                type: ActionType.CLEAR
            });
            router.push("/admin");
            return data;
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        inputs: inputs,
        submit: send
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleNew);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;