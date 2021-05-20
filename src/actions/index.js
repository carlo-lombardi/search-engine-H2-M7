export const addToFavouriteList = (favourite) => ({
  type: "ADD_TO_FAVOURITE",
  payload: favourite,
});

export const removeFromList = (index) => ({
  type: "DELETE_FAVOURITE",
  payload: index,
});
