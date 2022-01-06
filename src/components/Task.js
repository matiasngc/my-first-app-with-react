import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Task extends Component {
    
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.tareita.done ? 'green' : 'black',
            textDecoration: this.props.tareita.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { tareita } = this.props
        // const style = {background: 'gray'}
        return <p style={this.StyleCompleted()}>
            {tareita.title} -
            {tareita.description} -
            {tareita.done} -
            {tareita.id}
            <input type='checkbox' onChange={this.props.checked.bind(this, tareita.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, tareita.id)}>
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    tareita: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task