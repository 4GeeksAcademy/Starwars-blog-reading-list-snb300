const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;

//-------------------------------------------------
// import axios from "axios";

// const flux = {
//   loadPeople: async (dispatch) => {
//     const response = await axios.get("https://www.swapi.tech/api/people");
//     dispatch({ type: "SET_PEOPLE", payload: response.data.results });
//   },
//   loadVehicles: async (dispatch) => {
//     const response = await axios.get("https://www.swapi.tech/api/vehicles");
//     dispatch({ type: "SET_VEHICLES", payload: response.data.results });
//   },
//   loadPlanets: async (dispatch) => {
//     const response = await axios.get("https://www.swapi.tech/api/planets");
//     dispatch({ type: "SET_PLANETS", payload: response.data.results });
//   },
// };

// export default flux;
