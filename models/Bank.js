const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
    nameBank: {
        type: String,
        required: true
    },
    nomorRekening: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Bank', BankSchema)