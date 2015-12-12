import React from 'react'
import Navigation from './navigation'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <h1>App Name</h1>
                <Navigation />

                <hr />

                {this.props.children}
            </div>
        )
    }
}

export default App
