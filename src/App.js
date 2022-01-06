import React, { Component } from 'react';
import './App.css';
import tasksJson from './sample/tasks.json'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'

class App extends Component {
  state = {
    tareas: tasksJson,
    numero: 5 + 5
  }

  addTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: this.state.tareas.length
    }
    this.setState({
      tareas: [...this.state.tareas, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tareas.filter(task => task.id !== id)
    this.setState({tareas: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tareas.map(cadaTarea => {
      if (cadaTarea.id === id) {
        cadaTarea.done = !cadaTarea.done  
      }
      return cadaTarea
    })
    this.setState({
      tareas: newTasks
    })
  }

  render() {
    return <div>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/posts'>Posts</Link>
        <br></br>
        <Link to='/addtask'>Add Task</Link>
      <Routes>
        <Route path='/'
          element={<Tasks
            tareasDelJson={this.state.tareas}
            eliminarTarea={this.deleteTask} 
            check={this.checkDone}
          />}
        />
        <Route path='/posts' element={<Posts />} />
        <Route path='/addtask'
          element={<TaskForm
            nuevaTarea={this.addTask}
          />}
        />
      </Routes>
      </BrowserRouter>
        {/* <Tasks numeroDiez={this.state.numero} /> */}
    </div>
  }
}

export default App