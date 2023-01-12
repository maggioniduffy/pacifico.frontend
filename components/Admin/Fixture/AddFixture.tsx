import React, { useReducer } from "react";
import { Category } from "../../../utils/api";
import AddComponent from "../AddComponent";
import { AddMatchType, InputProps } from "./interfaces";

const initialState: AddMatchType = {
  rival_name: "",
  field: "",
  time: "",
  condition: "Local",
  gender: "M",
  category: Category.FIRST_TEAM,
  played: false,
  tournament: "",
  stats_link: undefined,
  transmission_link: undefined,
  our_score: undefined,
  rival_score: undefined,
  rival_icon: null,
};

enum ActionType {
  RIVALNAME = "RIVALNAME",
  FIELD = "FIELD",
  TIME = "TIME",
  CONDITION = "CONDITION",
  GENDER = "GENDER",
  CATEGORY = "CATEGORY",
  PLAYED = "PLAYED",
  TOURNAMENT = "TOURNAMENT",
  STATS = "STATS",
  TV = "TV",
  OURSCORE = "OURSCORE",
  RIVALSCORE = "RIVALSCORE",
  RIVALICON = "RIVALICON",
}

interface Action {
  type: ActionType;
  payload: any;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.CATEGORY:
      return { ...state, category: action.payload };
    case ActionType.RIVALNAME:
      return { ...state, rival_name: action.payload };
    case ActionType.FIELD:
      return { ...state, field: action.payload };
    case ActionType.TIME:
      return { ...state, time: action.payload };
    case ActionType.CONDITION:
      return { ...state, condition: action.payload };
    case ActionType.GENDER:
      return { ...state, gender: action.payload };
    case ActionType.PLAYED:
      return { ...state, played: action.payload };
    case ActionType.TOURNAMENT:
      return { ...state, tournament: action.payload };
    case ActionType.STATS:
      return { ...state, stats_link: action.payload };
    case ActionType.TV:
      return { ...state, transmission_link: action.payload };
    case ActionType.OURSCORE:
      return { ...state, our_score: action.payload };
    case ActionType.RIVALSCORE:
      return { ...state, rival_score: action.payload };
    case ActionType.RIVALICON:
      return { ...state, rival_icon: action.payload };
    default:
      return state;
  }
}

const AddFixture = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      dispatch({ type: ActionType.RIVALICON, payload: i });
    }
  };

  const inputs: InputProps[] = [
    {
      placeholder: "Categoria",
      value: state.category,
      setter: (c: string) =>
        dispatch({ type: ActionType.CATEGORY, payload: c }),
      options: [
        {
          label: Category.U13,
          value: Category.U13,
        },
        {
          label: Category.U15,
          value: Category.U15,
        },
        {
          label: Category.U17,
          value: Category.U17,
        },
        {
          label: Category.U19,
          value: Category.U19,
        },
        {
          label: Category.FIRST_TEAM,
          value: Category.FIRST_TEAM,
        },
      ],
    },
    {
      placeholder: "Equipo rival",
      value: state.rival_name,
      setter: (r: string) =>
        dispatch({ type: ActionType.RIVALNAME, payload: r }),
    },
    {
      placeholder: "Cancha",
      value: state.field,
      setter: (r: string) => dispatch({ type: ActionType.FIELD, payload: r }),
    },
    {
      placeholder: "Condicion",
      value: state.condition,
      setter: (c: string) =>
        dispatch({ type: ActionType.CONDITION, payload: c }),
      options: [
        {
          label: "Local",
          value: "Local",
        },
        {
          label: "Visita",
          value: "Visita",
        },
      ],
    },
    {
      placeholder: "Genero",
      value: state.gender,
      setter: (c: string) => dispatch({ type: ActionType.GENDER, payload: c }),
      options: [
        {
          label: "Masculino",
          value: "M",
        },
        {
          label: "Femenino",
          value: "F",
        },
      ],
    },
    {
      placeholder: "Ya fue jugado?",
      value: state.played,
      setter: (c: boolean) => dispatch({ type: ActionType.PLAYED, payload: c }),
      options: [
        {
          label: "Ya se jugo",
          value: true,
        },
        {
          label: "No se jugo todavia",
          value: false,
        },
      ],
    },
    {
      placeholder: "Torneo",
      value: state.tournament,
      setter: (r: string) =>
        dispatch({ type: ActionType.TOURNAMENT, payload: r }),
    },
    {
      placeholder: "Nuestro goleo",
      value: state.our_score,
      setter: (r: string) =>
        dispatch({ type: ActionType.OURSCORE, payload: r }),
      type: "number",
    },
    {
      placeholder: "Goleo rival",
      value: state.rival_score,
      setter: (r: string) =>
        dispatch({ type: ActionType.RIVALSCORE, payload: r }),
      type: "number",
    },
    {
      placeholder: "Link a estadisticas",
      value: state.stats_link,
      setter: (r: string) => dispatch({ type: ActionType.STATS, payload: r }),
    },
    {
      placeholder: "Link a transmision",
      value: state.transmission_link,
      setter: (r: string) => dispatch({ type: ActionType.TV, payload: r }),
    },
    {
      placeholder: "Escudo rival",
      value: state.rival_icon,
      setter: (r: string) =>
        dispatch({ type: ActionType.RIVALICON, payload: r }),
      type: "file",
    },
  ];

  const send = (e: any) => {
    e.preventDefault();
    try {
      const body = new FormData();
      body.append("file", state.rival_icon);
    } catch (error) {}
  };

  return (
    <AddComponent
      submit={(e) => {
        e.preventDefault();
      }}
      inputs={inputs}
    />
  );
};

export default AddFixture;
