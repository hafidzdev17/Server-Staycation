const mongoose = require('mongoose');
const ActiviySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean
    }

});

module.exports = mongoose.model('Activity', ActiviySchema)