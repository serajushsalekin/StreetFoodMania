const express = require('express')
const stallRouter = express.Router()
const cors = require('./cors')

const Stall = require('../models/Stall')

stallRouter.route('/')
.options(cors.cors, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, (req, res, next) => {
    const option = {
        location: {
            $geoWithin: {
                $centerSphere: [
                    [175.926385,-38.53851],
                    1.25 /3963.2
                ]
            }
        }
    }

    Stall.find(option, (err, stall)=> {
        if (err) return res.status(400).json({message: err})
        return res.status(200).json(stall)
    })


})
.post((req, res, next) => {
    Stall.create(req.body).then(stall=> {
        res.status(201).json(stall)
    }, err => next(err)).catch(err => next(err))
})

module.exports = stallRouter