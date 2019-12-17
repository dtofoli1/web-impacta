import React, { Component } from 'react'
import axios from 'axios'
import { FormCurso } from './form'
import { ListCurso } from './list'

const URL = 'http://localhost:3200/api/cursos'



export class CadastroCurso extends Component {
    initialState = {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }
    
    state = {...this.initialState, cursos: []}

    limpar(){
        this.setState(this.initialState)
    }

    constructor(props){
        super(props)
        this.listar()
    }

    /* listar = async () => {
        try{
            const response = await axios.get(URL)
            this.setState({cursos: response.data})
    } catch(erro){
        console.log(erro)
    }
} */

    listar(){
        axios.get(URL).then(response => {
            this.setState({cursos : response.data})
        }).catch(error => {
            console.log(error)
        })
    
    }

    codigoChange(e){
        this.setState({codigo: e.target.value})
    }

    descricaoChange(e){
        this.setState({descricao: e.target.value})
    }

    cargaChange(e){
        this.setState({cargaHoraria: e.target.value})
    }
    
    precoChange(e){
        this.setState({preco: e.target.value})
    }

    categoriaChange(e){
        this.setState({categoria: e.target.value})
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso 
                    codigo={this.state.codigo}
                    codigoChange={this.codigoChange.bind(this)}
                    descricao={this.state.descricao}
                    descricaoChange={this.descricaoChange.bind(this)}
                    carga={this.state.cargaHoraria}
                    cargaChange={this.cargaChange.bind(this)}
                    preco={this.state.preco}
                    precoChange={this.precoChange.bind(this)}
                    categoria={this.state.categoria}
                    categoriaChange={this.categoriaChange.bind(this)}/>
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos}/>
                </div>
            </div>
        )
    }
}