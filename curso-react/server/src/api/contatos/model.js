const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const contatoSchema = new Schema({
    data: {type: Date, required: true},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: Number},
    assunto: {type: String}
})

module.exports = restful.model('contato', contatoSchema)