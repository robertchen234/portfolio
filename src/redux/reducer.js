import { LOAD_PROJECTS } from '../actions/projectActions';
import { UPDATE_PROJECT } from '../actions/projectActions';

const initialState = { projects: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_PROJECTS: {
			return { ...state, projects: action.payload };
		}
		case UPDATE_PROJECT: {
			const updatedProjects = [...state.projects].map((project) => (project.id === action.payload.id ? (project = action.payload) : project));
			console.log(updatedProjects);
			return { ...state, projects: updatedProjects };
		}
		default:
			return state;
	}
};

export default reducer;
