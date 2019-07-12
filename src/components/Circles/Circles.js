import React from 'react'
import './Circles.css'

const Circles = props => {
    return (
        <div className="Circles">
            {props.circle.map(circle => (
                <div
                    key={circle.id}
                    name={circle.id}
                    onClick={() => props.handleClick(circle.id)}
                    className={circle.id === props.selected ? 'selected' : ''}
                >
                    {circle.id}{' '}
                </div>
            ))}
        </div>
    )
}

export default Circles
