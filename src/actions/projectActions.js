export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const getProjects = () => {
  return dispatch => {
    return fetch("https://robert-chen-backend.herokuapp.com/api/v1/projects")
      .then(res => res.json())
      .then(projects => {
        dispatch({
          type: LOAD_PROJECTS,
          payload: projects
        });
      })
      .catch(console.error);
  };
};
