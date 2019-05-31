const express = require('express')
const db = require('../data/helpers/projectModel')
const router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {
    db.get()
    .then(array => {
        res.send(array)
    })
    .catch((err) => {
        res.status(500).json({error: "Issue retrieving data from the server"})
    })
})

router.get('/:id', (req, res) => {
    db.get(req.params.id) 
    .then(proj => {
        res.send(proj)
    })
    .catch(() => {
        res.status(500).json({error: "Issue retrieving data from the server"})
    })
})

router.post('/', (req, res) => {
    db.insert(req.body)
    .then(proj => {
        res.send(proj)
    })
    .catch(() => {
        res.status(500).json({error: "Issue posting data to the server"})
    })
})

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .then(proj => {
        res.send(proj)
    })
    .catch(() => {
        res.status(500).json({error: "Issue updating data on the server"})
    })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(del => {
        res.send({message: `deleted ${del} projects`})
    })
    .catch(() => {
        res.status(500).json({error: "Issue deleting data from the server"})
    })
})

router.get('/:id/actions', (req, res) => {
    db.getProjectActions(req.body.project_id)
    .then(list => {
        res.send(list)
    })
    .catch(() => {
        res.status(500).json({error: "Issue retrieving data from the server"})
    })
})






module.exports = router;