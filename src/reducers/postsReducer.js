export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }

  // return original state if action type is not the
  // type it is designed to handle
  return state;
};
