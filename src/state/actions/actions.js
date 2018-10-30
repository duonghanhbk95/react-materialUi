import * as actions from './actionTypes'

export const acCreateProject = (project) => {
  return {
    type: actions.CREATE_PROJECT,
    project
  }
}
export const acEditProject = (newProject) => {
  return {
    type: actions.EDIT_PROJECT,
    newProject
  }
} 