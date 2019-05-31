const express = require('express')
const actionRoute = require('./Routes/actionRoute')
const projectRoute = require('./Routes/projectRoute')

const server = express();

server.use('/actions', actionRoute)
server.use('/projects', projectRoute)

const port = process.env.PORT || 3000


server.get('/', (req, res) => {
    console.log("Server up and running...")
    res.send("<h1>Good to go!</h1>")
})














server.listen(port, () => {
    console.log(`Listening on PORT:${port}`)
})