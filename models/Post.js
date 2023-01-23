const {Schema, model} = require('mongoose')

const schema = new Schema({
    descr: {type: String, required: true}

})
module.exports = model('Posts', schema)