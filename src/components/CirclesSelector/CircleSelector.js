import React from 'react'
import './CircleSelector.css'

class CircleSelector extends React.Component {
    constructor() {
        super()
        this.state = {
            circle: 0,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(circle) {
        this.setState({ circle: circle })
    }

    render() {
        return (
            <div className="CircleSelector">
                <button onClick={this.handleChange} type="Circle Selector">
                    Select Circle 1
                </button>
                <button onClick={this.handleChange} type="Circle Selector">
                    Select Circle 2
                </button>
                <button onClick={this.handleChange} type="Circle Selector">
                    Select Circle 3
                </button>
                <button onClick={this.handleChange} type="Circle Selector">
                    Select Circle 4
                </button>
            </div>
        )
    }
}
export default CircleSelector
