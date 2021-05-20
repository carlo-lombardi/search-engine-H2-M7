import { createStore } from "redux";
import jobReducer from "../reducers";

export const jobState = {
  favouritesJob: {
    favourites: [],
  },
};

const initialJobState = createStore(
  jobReducer,
  jobState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default initialJobState;
