import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
export class ContatoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="Entre em contato conosco" />
            </div>
        )
    }
}