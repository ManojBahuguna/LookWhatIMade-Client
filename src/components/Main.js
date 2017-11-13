import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProjectsManager from './ProjectsManager'

class Main extends Component {
  render(){
    return(
      <main className="Main">
        <Route exact path="/" component={ProjectsManager}/>
      </main>
    );
  }
}

export default Main;