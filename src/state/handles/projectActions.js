import { acCreateProject, acEditProject } from '../actions/actions'

export const createProject = (project) => (dispatch) => {
dispatch(acCreateProject(project))
}

export const editProject = (newProject) => (dispatch) => {
  dispatch(acEditProject(newProject))
}