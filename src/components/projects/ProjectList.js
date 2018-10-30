import React from 'react'
import ProjecSummary from './ProjectSummary' 
const ProjectList = ({projects}) => {
  console.log('this.props', projects)
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <ProjecSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList