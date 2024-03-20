const defaultState = {
  currentState: "",
};
export const burgerMenuToggleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, currentState: action.payload };
    case "CLOSE_MENU":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};
