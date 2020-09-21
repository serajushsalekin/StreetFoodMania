const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stallSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photos: [
        {
            img: {
                type: String
            }
        }
    ],
    reviews : [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                min: 1,
                max: 5,
                required: true
            },
            review: {
                type: String,
                required: true
            }
        }
    ],
    loc_: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
            required: true
        }
    }
}, { timestamps: true})

module.exports = mongoose.model('Stall', stallSchema)