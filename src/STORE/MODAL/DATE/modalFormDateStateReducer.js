const defaultState = {
  currentState: "",
};
export const modalFormDateStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_DATE_STATE":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
