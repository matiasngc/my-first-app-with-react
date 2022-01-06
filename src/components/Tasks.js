import React, { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

class Tasks extends Component {
    render() {
        return this.props.tareasDelJson.map(e =>
        <Task
            tareita={e}
            key={e.id}
            deleteTask={this.props.eliminarTarea}
            checked={this.props.check}
        />)
        // return <h1>holaaaaa {this.props.numeroDiez}</h1>
    }
}

Tasks.propTypes = {
    tareasDelJson: PropTypes.array.isRequired
}

export default Tasks