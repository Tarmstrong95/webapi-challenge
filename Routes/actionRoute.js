const express = require('express')
const db = require('../data/helpers/actionModel')
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
    .then(array => {
        res.send(array)
    })
    .catch((err) => {
        res.send(err)
    })
})







module.exports = router;