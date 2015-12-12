import React from 'react'
import Helmet from 'react-helmet'

class ExamplePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="example">
                <Helmet title="Example" />

                <h2>Example Page</h2>
            </div>
        )
    }
}

export default ExamplePage
