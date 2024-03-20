const defaultState = {
  currentState: "",
};
export const modalFormPhoneValueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_PHONE_VALUE":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
