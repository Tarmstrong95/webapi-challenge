const express = require('express')
const actionRoute = require('./Routes/actionRoute')
const projectRoute = require('./Routes/projectRoute')

const server = express();

server.use('/actions', actionRoute)
server.use('/projects', projectRoute)

const port = process.env.PORT || 3000


server.get('/', (req, res) => {
    console.log("Server up and running...")
    res.send(`
    <div>
    <h1>Good to go!</h1>
    <h2>Add these to url</h2>
    <p>/actions</p>
    <p>/actions/:id</p>
    <p>/projects</p>
    <p>/projects/:id</p>
    <p>/projects/:id/actions</p>
    </div>
    `)
})














server.listen(port, () => {
    console.log(`Listening on PORT:${port}`)
})