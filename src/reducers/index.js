import initialJobState from "../store";

const jobReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favouritesJob: {
          ...state.favouritesJob,
          favourites: state.favouritesJob.favourites.concat(action.payload),
        },
      };
    case "DELETE_FAVOURITE":
      return {
        ...state,
        favouritesJob: {
          ...state.favouritesJob,
          favourites: state.favouritesJob.favourites.filter(
            (e, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
export default jobReducer;
