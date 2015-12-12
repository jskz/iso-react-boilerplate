import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import { createHistory } from 'history';
import routes from './routes'

const history = createHistory()

window.addEventListener('load', function load(e) {
    ReactDOM.render(<Router routes={routes} history={history} />, document.getElementById('origin'))
    window.removeEventListener('load', load, false)
}, false)
