const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    imageUrl: String,
    summary: String,
    link: String
});

module.exports = mongoose.model('Card', cardSchema);