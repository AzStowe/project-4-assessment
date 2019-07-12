import React, { Component } from 'react'
import './App.css'
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CirclesSelector/CircleSelector'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
                <main>
                    <CircleSelector handleChange={this.handleClick} />
                    <Circles />
                </main>
            </div>
        )
    }
}

export default App
