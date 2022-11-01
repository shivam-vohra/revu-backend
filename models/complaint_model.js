const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    diningHall: {
        required: true,
        type: String
    },
    urgency: {
        required: true,
        type: Number
    },
    contact: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String,
    },
    timestamp: {
        required: true,
        type: Number
    },
});

module.exports = mongoose.model('complaints', dataSchema)