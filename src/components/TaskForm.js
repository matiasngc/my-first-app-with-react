import React, { Component } from 'react'

export default class TaskForm extends Component {
    
    submit = event => {
        this.props.nuevaTarea(this.state.title, this.state.description)
        event.preventDefault()
        // console.log(this.state)
    }

    methodOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }

    state = {
        title: '',
        description: ''
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Write a Task'
                    onChange={this.methodOnChange}
                    value={this.state.title}
                />
                <br></br>
                <br />
                <textarea
                    name='description'
                    placeholder='Write a Description'
                    onChange={this.methodOnChange} 
                    value={this.state.description}
                />
                {/* <input type='submit' /> */}
                <button type='submit'>
                    Save a Task
                </button>
            </form>
        )
    }
}