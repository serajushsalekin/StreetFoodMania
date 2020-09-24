const express = require('express')
const stallRouter = express.Router()
const cors = require('./cors')

const Stall = require('../models/Stall')

stallRouter.route('/')
.options(cors.cors, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, (req, res, next) => {
    const option = {
        loc_: {
            $geoWithin: {
                $centerSphere: [
                    [90.41473388671876, 23.84627791811337],
                    1.25 /3963.2
                ]
            }
        }
    }

    Stall.find({}, (err, stall)=> {
        if (err) return res.status(400).json({message: err})
        return res.status(200).json(stall)
    })


})
.post(cors.corsWithOptions, (req, res, next) => {
    Stall.create(req.body).then(stall=> {
        res.status(201).json(stall)
    }, err => next(err)).catch(err => next(err))
})


stallRouter.route('/:id')
.options(cors.cors, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, (req, res, next) => {
    const id = req.params.id
    Stall.findOne({_id: id}).then(stall=> {
        return res.status(200).json(stall)
    }).catch(err => next(err))
})
.put(cors.corsWithOptions, (req, res, next) => {
    const id = req.params.id
    Stall.findByIdAndUpdate(id, { $set: req.body}, {new: true}).then(stall => {
        return res.status(200).json(stall)
    }, err=> next(err)).catch(err => next(err))
})
.delete(cors.corsWithOptions, (req, res, next) => {
    Stall.findByIdAndRemove(req.params.id).then(resp => {
        res.statusCode = 200
        res.setHeader('Content-Type', "application/json")
        res.json(resp)
    }, err => next(err))
        .catch(err => next(err))
})


module.exports = stallRouter