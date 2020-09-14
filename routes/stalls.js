const express = require('express')
const stallRouter = express.Router()

const Stall = require('../models/Stall')
stallRouter.use(express.json())

stallRouter.route('/')
.get((req, res, next) => {
    Stall.find({}, (err, stall)=> {
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