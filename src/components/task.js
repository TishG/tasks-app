import React, { Component } from 'react';

class Task extends Component {
  constructor(){
  super();
    this.state = {

    };
}

  render() {
    const { description, task } = this.props;
    return (
            <React.Fragment>
              <li>
              <input
              type="checkbox"
              checked={ this.props.isCompleted }
              />
              <span
              style={{ color: "green"}}
              >
              { description }
              </span>
              </li>
            </React.Fragment>
    );
  }
}

export default Task;
