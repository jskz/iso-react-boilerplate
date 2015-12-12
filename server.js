import express from 'express'
import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import createMemoryHistory from 'history/lib/createMemoryHistory'
import Helmet from 'react-helmet'
import routes from './routes'

let server = http.createServer()
let app = new express({server: server})

app.use(express.static('static'))
app.use((req, res) => {
    const location = createLocation(req.path)
    const history = createMemoryHistory()

    match({routes, location}, (err, redirectionLocation, renderProps) => {
        if(redirectionLocation) {
            res.redirect(301, redirectionLocation.pathname + redirectionLocation.search)
        } else if(err) {
            console.log('Error: ' + err)
            res.status(500).send('Server error.')
        } else if(!renderProps) {
            console.log('No render.')
            res.status(404).send('Not found.')
        }

        let rendered = renderToString(<RoutingContext {...renderProps} />)
        let head = Helmet.rewind()
        let bootstrapMarkup = `
        <!DOCTYPE html>
        <html>
        <head>
            ${head.title.toString()}
            ${head.meta.toString()}
            ${head.link.toString()}
            ${head.script.toString()}
        </head>

        <body>
            <div id="origin">
            ${rendered}
            </div>
        </body>
        </html>`

        res.send(bootstrapMarkup)
    })
})

server.on('request', app)
server.listen(8080, () => console.log('Listening on port 8080.'))
