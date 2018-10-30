import {CREATE_PROJECT, EDIT_PROJECT } from "../actions/actionTypes";

const initState = {
  project:[]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case CREATE_PROJECT:
      return {...state, project: [...state.project, ...action.project]}
    case EDIT_PROJECT:
      return {...state, project: action.newProject}
    default: 
      return state
  }
}

export default projectReducer