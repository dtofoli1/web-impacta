import React from 'react'

export class Cabecalho extends React.Component {
    render() {

        const {titulo, subtitulo} = this.props;

        return (
            <header className="pb-4 mt-6 mb-4 border-bottom">
                <h2><strong>{titulo}</strong> -
                <small style={{marginLeft:10}}>{subtitulo}</small></h2>
            </header>
        )
    }
}