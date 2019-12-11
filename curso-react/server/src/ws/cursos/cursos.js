const restful = require('node-restful')
const mongoose = restful.mongoose

const cursoSchema = new mongoose.Schema({
    codigo: { type: Number, require: true},
    descricao: {type: String, require: true}
})