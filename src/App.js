import React, { Component } from 'react'
import './App.css'
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CirclesSelector/CircleSelector'

class App extends Component {
    state = {
        circle: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        selected: 1,
    }

    handleClick = id => {
        this.setState({ selected: id })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
                <main>
                    <CircleSelector
                        handleClick={this.handleClick}
                        circle={this.state.circle}
                        selected={this.state.selected}
                    />
                    <Circles
                        handleClick={this.handleClick}
                        circle={this.state.circle}
                        selected={this.state.selected}
                    />
                </main>
            </div>
        )
    }
}

export default App
