import axios from "axios";

const flux = {
  loadPeople: async (dispatch) => {
    const response = await axios.get("https://www.swapi.tech/api/people");
    dispatch({ type: "SET_PEOPLE", payload: response.data.results });
  },
  loadVehicles: async (dispatch) => {
    const response = await axios.get("https://www.swapi.tech/api/vehicles");
    dispatch({ type: "SET_VEHICLES", payload: response.data.results });
  },
  loadPlanets: async (dispatch) => {
    const response = await axios.get("https://www.swapi.tech/api/planets");
    dispatch({ type: "SET_PLANETS", payload: response.data.results });
  },
};

export default flux;
