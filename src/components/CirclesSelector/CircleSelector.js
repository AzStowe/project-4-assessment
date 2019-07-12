import React from 'react'
import './CircleSelector.css'

const CircleSelector = props => {
    return (
        <div className="CircleSelector">
            {props.circle.map(circle => (
                <button
                    key={circle.id}
                    name={circle.id}
                    onClick={() => props.handleClick(circle.id)}
                    className={circle.id === props.selected ? ' selected' : ''}
                >
                    Select Circle {circle.id}{' '}
                </button>
            ))}
        </div>
    )
}

export default CircleSelector
