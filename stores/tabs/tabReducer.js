import * as tabActions from "./tabActions";

const initialState = {
  selectedTab: "",
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActions.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTabe,
      };
    default:
      return state;
  }
};

export default tabReducer;
