import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './components/home'
import ExamplePage from './components/example'

export default (
    <Route path="/" component={App}>
        <IndexRoute name="home" component={Home} />

        <Route name="example" path="/example" component={ExamplePage} />
    </Route>
)
