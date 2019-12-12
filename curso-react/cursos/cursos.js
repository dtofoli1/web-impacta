const restful = require('./node_modules/node-restful')
const mongoose = restful.mongoose

const cursoSchema = new mongoose.Schema({
    codigo: { type: Number, require: true},
    descricao: {type: String, require: true},
    cargaHoraria: {type: Number, require: true, min: 4},
    preco: {type: Number, min: 0},
    categoria: {type: String, uppercase: true, enum:['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']}
})

module.exports = restful.model(`curso`, cursoSchema)