//criando o schema
const restful = require('node-restful');
//const {mongoose} = require('node-restful');
const Schema = restful.mongoose.Schema;

//definindo o schema curso
const cursoSchema = new Schema({
    codigo: { type: Number, required: true, unique: true},
    descricao: { type: String, required: true},
    cargaHoraria: { type: Number, required: true, min: 4},
    preco: { type: Number, min: 0},
    categoria: { type: String, uppercase:true, enum:['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']}     
});

module.exports = restful.model(`curso`, cursoSchema);