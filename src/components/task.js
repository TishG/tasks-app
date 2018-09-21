import React, { Component } from 'react';

class Task extends Component {
  constructor(){
  super();
    this.state = {
      color: "green"
    };
}

  render() {
    const { description, tasks, isCompleted, handleDelete, handleToggle } = this.props;
    const { color } = this.state;
    return (
            <React.Fragment>
              <li>
              <input
              type="checkbox"
              defaultChecked= { isCompleted }
              onChange={ handleToggle }

              />
              <span style={tasks.length < 3 ? { color: "red" } : { color: color }}>
              { description }
              </span>
              <button onClick={ handleDelete }> Delete </button>
              </li>
            </React.Fragment>
    );
  }
}

export default Task;
