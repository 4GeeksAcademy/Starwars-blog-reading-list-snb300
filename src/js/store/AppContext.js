import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      /**
       * EDIT THIS!
       * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
       * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
       * store, instead use actions, like this:
       *
       * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
       *
       **/
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;

//---------------------------------
// import React, { createContext, useReducer } from "react";
// import flux from "./Flux";

// export const Context = createContext();

// const initialState = {
//   favorites: [],
//   people: [],
//   vehicles: [],
//   planets: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_PEOPLE":
//       return { ...state, people: action.payload };
//     case "SET_VEHICLES":
//       return { ...state, vehicles: action.payload };
//     case "SET_PLANETS":
//       return { ...state, planets: action.payload };
//     case "ADD_FAVORITE":
//       return { ...state, favorites: [...state.favorites, action.payload] };
//     case "REMOVE_FAVORITE":
//       return {
//         ...state,
//         favorites: state.favorites.filter(
//           (item) => item.id !== action.payload.id
//         ),
//       };
//     default:
//       return state;
//   }
// };

// const appContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const value = { state, dispatch };
//   return <Context.Provider value={value}>{children}</Context.Provider>;
// };

// export default appContextProvider;
