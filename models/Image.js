const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Image', ImageSchema)