import React from 'react'
import Helmet from 'react-helmet'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home">
                <Helmet title="Home" />
                
                <h2>Home</h2>
            </div>
        )
    }
}

export default Home
