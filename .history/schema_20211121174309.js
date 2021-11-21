const mongoose = require('mongoose')
const {Schema} = mongoose

const dataSchema = new Schema({
    name: String,
    regNo: String,
    marks: String
});

module.exports = mongoose.model('data', dataSchema, 'dataSchema');