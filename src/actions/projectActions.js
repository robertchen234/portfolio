export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

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

export const addClap = project => {
  return dispatch => {
    return fetch(
      `https://robert-chen-backend.herokuapp.com/api/v1/projects/${project.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          claps: project.claps + 1
        })
      }
    )
      .then(res => res.json())
      .then(project => {
        dispatch({
          type: UPDATE_PROJECT,
          payload: project
        });
      })
      .catch(console.error);
  };
};
