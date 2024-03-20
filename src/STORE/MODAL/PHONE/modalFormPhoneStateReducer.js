const defaultState = {
  currentState: "",
};
export const modalFormPhoneStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_PHONE_STATE":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
