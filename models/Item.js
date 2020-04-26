const mongoose = require('mongoose');
const {
    ObjectId
} = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        default: 'Indonesia',
    },
    city: {
        type: Number,
        required: true,
    },
    isPopular: {
        type: Boolean,

    },
    description: {
        type: String,
        required: true,
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureId: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    activityId: [{
        type: ObjectId,
        ref: 'Activity'
    }],

});

module.exports = mongoose.model('Item', ItemSchema)