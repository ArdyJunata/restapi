const mongoose = require('mongoose');

const schema = new mongoose.schema({
    tittle : {
        type: String,
        required: true,
    },
    body : {
        type: String,
        required: true,
    },
}, {
    collection: 'contents',
    timestramps: true,
});

module.exports = mongoose.model('Contens', schema);