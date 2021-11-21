import mongoose, { model } from 'mongoose';
const {Schema} = mongoose

const dataSchema = new Schema({
    name: String,
    regNo: String,
    marks: String
});

export default model('data', dataSchema, 'dataSchema');