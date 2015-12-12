import React from 'react'
import { Router, Route, Link } from 'react-router'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/example'>Example Page</Link></li>
            </ul>
        )
    }
}

export default Navigation
