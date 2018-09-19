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

  componentWillMount() {
    localStorage.getItem("tasks") && this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks"))
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tasks", JSON.stringify(nextState.tasks));

  }

  addTask(e) {
    e.preventDefault();
    const { tasks, newTask } = this.state;
    if (!this.state.newTask) { return }
    const newTasks = { description: newTask, isCompleted: false };
    this.setState({ tasks: [...tasks, newTasks], newTask: " " });
  }

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
        <form
        className="new-task"
        onSubmit={(e) => this.addTask(e)}>
          <input
          type="text"
          value={ newTask }
          onChange={(e) => this.handleNewTask(e)}
          />
          <input
          type="submit"
          value="Add"
          />
        </form>
        <p>{tasks.length} tasks </p>
        <p> # tasks completed </p>
      </React.Fragment>
    );
  }
}

export default App;
