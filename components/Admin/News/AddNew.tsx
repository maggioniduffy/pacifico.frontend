import React, { useReducer } from "react";
import { useCurrentUser } from "../../../hooks";
import { BASE_API_URL } from "../../../utils/constants";
import AddComponent from "../AddComponent";
import { AddNewDto, InputProps } from "../Fixture/interfaces";

interface Props {
  propState?: AddNewDto;
  id?: string;
}

const initialState: AddNewDto = {
  time: "",
  title: "",
  subtitle: "",
  body: "",
  image: null,
  imageName: "",
  imageDesc: "",
};

enum ActionType {
  TIME = "TIME",
  TITLE = "TITLE",
  SUBTITLE = "SUBTITLE",
  BODY = "BODY",
  IMAGE = "IMAGE",
  IMAGENAME = "IMAMGENAME",
  IMAGEDESC = "IMAGEDESC",
  CLEAR = "CLEAR",
}

interface Action {
  type: ActionType;
  payload?: any;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.BODY:
      return { ...state, body: action.payload };
    case ActionType.IMAGE:
      return { ...state, image: action.payload };
    case ActionType.IMAGENAME:
      return { ...state, imageName: action.payload };
    case ActionType.IMAGEDESC:
      return { ...state, imageDesc: action.payload };
    case ActionType.TITLE:
      return { ...state, title: action.payload };
    case ActionType.TIME:
      return { ...state, time: action.payload };
    case ActionType.SUBTITLE:
      return { ...state, subtitle: action.payload };
    case ActionType.CLEAR:
      return initialState;
    default:
      return state;
  }
}

const AddNew = ({ id, propState = initialState }: Props) => {
  const [state, dispatch] = useReducer(reducer, propState);
  const currentUser = useCurrentUser();
  const uploadImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      dispatch({ type: ActionType.IMAGE, payload: i });
    }
  };

  const inputs: InputProps[] = [
    {
      placeholder: "Titulo",
      value: state.title,
      setter: (t: string) => dispatch({ type: ActionType.TITLE, payload: t }),
    },
    {
      placeholder: "Subtitulo",
      value: state.subtitle,
      setter: (r: string) =>
        dispatch({ type: ActionType.SUBTITLE, payload: r }),
    },
    {
      placeholder: "Cuerpo",
      value: state.body,
      setter: (r: string) => dispatch({ type: ActionType.BODY, payload: r }),
      type: "textarea",
    },
    {
      placeholder: "Fecha",
      value: state.time,
      setter: (r: string) => dispatch({ type: ActionType.TIME, payload: r }),
      type: "datetime-local",
    },
    {
      placeholder: "Imagen",
      value: state.image,
      setter: (e: any) => uploadImage(e),
      type: "file",
    },
    {
      placeholder: "Nombre de la imagen",
      value: state.imageName,
      setter: (r: string) =>
        dispatch({ type: ActionType.IMAGENAME, payload: r }),
    },
    {
      placeholder: "Descripcion de la imagen",
      value: state.imageDesc,
      setter: (r: string) =>
        dispatch({ type: ActionType.IMAGEDESC, payload: r }),
    },
  ];

  const send = async (e: any) => {
    e.preventDefault();
    try {
      const { image, title, subtitle, body, time, imageDesc, imageName } =
        state;
      console.log("state en send: ", state);

      const auxTime = time.replace("T", " ") + ":00.000";
      console.log(auxTime);
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
        res = await fetch(BASE_API_URL + "news/" + id, {
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + currentUser?.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        });
      } else {
        res = await fetch(BASE_API_URL + "news", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + currentUser?.token,
          },
          body: bodyToSend,
        });
      }
      const data = await res.json();
      console.log("NEW RES DATA: ", data);
      dispatch({ type: ActionType.CLEAR });
      return data;
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  return <AddComponent inputs={inputs} submit={send} />;
};

export default AddNew;
