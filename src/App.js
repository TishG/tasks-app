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
            ],
      newTask: " "
    }
  }

  // componentWillMount() {
  //   localStorage.getItem("tasks") && this.setState({
  //     tasks: JSON.parse(localStorage.getItem("tasks"))
  //   })
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("tasks", JSON.stringify(nextState.tasks));
  //
  // }

  handleNewTask(e) {
    this.setState({ newTask: e.target.value});
  }

  handleDelete(selectedTask) {
    const { tasks } = this.state;
    let newTasks = tasks.filter(task => task !== selectedTask );
    this.setState({ tasks : newTasks });
  }

  render() {
    const { tasks, newTask } = this.state;
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
              tasks={ tasks }
              handleDelete={() => this.handleDelete(task)}

            /> )
          }
        </ul>
        <section className="new-task">
          <input
          type="text"
          value={ newTask }
          onChange={(e) => this.handleNewTask(e)}
          />
          <input
          type="button"
          value="Add"

          />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
