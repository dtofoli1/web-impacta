import axios from 'axios'

const URL = 'http://localhost:3200/api/contatos'

export const dataOnChange = function(e){
    return {
        type: 'ATUALIZAR_DATA',
        value: e.target.value
    }
}

export const nomeOnChange = function(e){
    return {
        type: 'ATUALIZAR_NOME',
        value: e.target.value
    }
}

export const emailOnChange = function(e){
    return {
        type: 'ATUALIZAR_EMAIL',
        value: e.target.value
    }
}

export const telOnChange = function(e){
    return {
        type: 'ATUALIZAR_TEL',
        value: e.target.value
    }
}

export const assuntoOnChange = function(e){
    return {
        type: 'ATUALIZAR_ASSUNTO',
        value: e.target.value
    }
}

export const limpar = function(){
    return{
        type: 'LIMPAR'
    }
}

export const adicionar = function(data, nome, email, tel, assunto){
    return(dispatch) => {
        return axios.post(URL, {
            data, 
            nome, 
            email, 
            tel, 
            assunto}).then(_ => {
                alert('Contato enviado')
                dispatch(limpar())
            }).catch(error => {
                console.log(error)
                alert('Erro ao salvar contato')
            })
    }
}