const express = require('express')
const db = require('../data/helpers/actionModel')
const router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {
    db.get()
    .then(array => {
        res.send(array)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/:id', (req, res) => {
    db.get(req.params.id)
    .then(act => {
        res.send(act)
    })
    .catch(() => {
        res.send({message: "error"})
    })
})

router.post('/', (req, res) => {
    db.insert(req.body)
    .then(act => {
        res.send(act)
    })
    .catch(() => {
        res.send({message: "error"})
    })
})

router.put('/:id', (req, res) => {
    db.update(req.params.id)
    .then(act => {
        res.send(act)
    })
    .catch(() => {
        res.send({message: "error"})
    })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(del => {
        res.send({message: `Deleted ${del} actions`})
    })
})








module.exports = router;