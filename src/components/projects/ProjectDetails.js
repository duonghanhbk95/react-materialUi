import React from 'react'

const ProjectDetails = (props) => {
  console.log(props)
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>Lorem ipsum dolor sit</p>
        </div>      
        <div className="card-action grey-text gret lighten-4">
          <div>Post by Me</div>
          <div>26th Today</div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails