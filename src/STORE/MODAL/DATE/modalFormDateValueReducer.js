const defaultState = {
  currentState: "",
};
export const modalFormDateValueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_DATE_VALUE":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
