import React from 'react'
import Helmet from 'react-helmet'
import Navigation from './navigation'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <Helmet
                    title="App Name"
                    titleTemplate="App - %s"
                    onChangeClientState={(newState) => console.log(newState)}
                    script={[
                        {"src": "/bundle.js", "type": "text/javascript"}
                    ]} />

                <h1>App Name</h1>
                <Navigation />

                <hr />

                {this.props.children}
            </div>
        )
    }
}

export default App
