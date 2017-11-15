import ProjectItem from './ProjectItem';
import React, {Component} from 'react';
import axios from 'axios';
const config = require('../config.json');

class ProjectsManager extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    };
  }

  getProjects(){
    axios.get(config.API_URL + config.PROJECTS_API)
    .then(res => {
      this.setState({
        projects: res.data
      });
    })
    .catch(err => {
      console.error(err);
    });
  }

  componentDidMount(){
    this.getProjects();
  }

  render(){
    let projects = this.state.projects.map(project => {
      return(
        <ProjectItem key={project._id} title={project.title} info={project.info} link={project.link} />
      );
    });

    return(
      <div className="ProjectsManager">
        <ol className="ProjectsList List">
          {projects}
        </ol>
      </div>
    );
  }

}

export default ProjectsManager;