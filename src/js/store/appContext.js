import React, { createContext, useReducer } from "react";
import flux from "./Flux";

export const Context = createContext();

const initialState = {
  favorites: [],
  people: [],
  vehicles: [],
  planets: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return { ...state, people: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AppContextProvider;
