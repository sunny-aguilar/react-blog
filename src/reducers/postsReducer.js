export default (state = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }

  // return original state if action type is not the
  // type it is designed to handle
  return state;
};
