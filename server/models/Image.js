const {Schema, model} = require('mongoose');

const imageSchema= new Schema({
    fileName: String,
    path: {type: String},
    originalName: {type: String},
    mimeType: {type: String},
    size: { type: Number},
    createdAt: {type: Date, default: Date.now()}
})

module.exports = model('Image', imageSchema)