const defaultState = {
  currentState: "",
};
export const modalFormNameValueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_NAME_VALUE":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
