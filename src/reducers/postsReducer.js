export default (state = [], action) => {
  if (action.type === "") {
    return action.payload;
  }
};
