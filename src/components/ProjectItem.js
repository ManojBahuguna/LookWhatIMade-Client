import React, { Component } from 'react';

class ProjectItem extends Component {

  render () {
    return (
      <li className="ProjectItem">
        <h2 className="ProjectTitle">
          <a href={this.props.link} className="ProjectTitle">{this.props.title}</a>
        </h2>
        <p className="ProjectInfo">{this.props.info}</p>
        {/* <ul className="TagsList List">
          <li class="TagItem">TagItem</li>
          <li class="TagItem">TagItem</li>
        </ul>
        <div className="Options">
          <button class="Button">Edit</button>
          <button class="Button">Delete</button>
        </div> */}
      </li>
    );
  }
}

export default ProjectItem;
