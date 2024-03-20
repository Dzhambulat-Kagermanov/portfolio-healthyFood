const defaultState = {
  currentState: "",
};
export const modalFormNameStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_NAME_STATE":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
