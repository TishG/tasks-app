import React, { Component } from 'react';
import Task from './components/task.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
              { description: "Walk the dog", isCompleted: true},
              { description: "Clean my room", isCompleted: false },
              { description: "Study for my assessment", isCompleted: false}
            ]
    }
  }

  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <h1>Conquer your Tasks</h1>
        <p className="app-instructions"> Add atleast three things to complete when you wake up. </p>
        <p className="app-instructions"> Complete and check off those tasks by the end of the day. </p>
        <ul>
          { tasks.map((task, index) =>
            <Task
              key={ index }
              description={ task.description }
              isCompleted={ task.isCompleted }
            /> )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
