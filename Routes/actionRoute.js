const express = require('express')
const db = require('../data/helpers/actionModel')
const projects_Db = require('../data/helpers/projectModel')
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
    .then(act => {
        res.send(act)
    })
    .catch(() => {
        res.status(500).json({error: "Issue retrieving data from the server"})
    })
})

router.post('/', (req, res) => {
    projects_Db.get(req.body.project_id)
    .then(proj => {
        if(proj){
            db.insert(req.body)
            .then(act => {
                res.status(201).json(act)
            })
            .catch(() => {
                res.status(500).json({error: "Issue posting data to the server"})
            })
        }else{
            res.status(404).json({message: "Please send a valid project ID"})
        }
    })
    .catch(() => {
        res.status(500).json({error: "Issue retrieving data from the server"})
    })
    
})

router.put('/:id', (req, res) => {
    db.update(req.params.id)
    .then(act => {
        res.status(201).json(act)
    })
    .catch(() => {
        res.status(500).json({error: "Issue updating data on the server"})
    })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(del => {
        res.send(del)
    })
    .catch(() => {
        res.status(500).json({error: "Issue deleting data from the server"})
    })
})








module.exports = router;