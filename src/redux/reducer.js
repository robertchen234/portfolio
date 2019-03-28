import { LOAD_PROJECTS } from "../actions/projectActions";

const initialState = { projects: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
