const defaultState = {
  currentState: "",
};
export const modalToggleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, currentState: action.payload };
    case "CLOSE_MODAL":
      return { ...state, currentState: "" };
    default:
      return state;
  }
};
