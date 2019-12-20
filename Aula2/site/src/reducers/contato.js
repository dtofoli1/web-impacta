const INITIAL_STATE = {
    data : '',
    nome : '',
    email : '',
    telefone : 559999999,
    assunto : ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZAR_DATA' : return {...state, data : action.value}
        case 'ATUALIZAR_NOME' : return {...state, nome : action.value}
        case 'ATUALIZAR_TEL' : return {...state, telefone : action.value}
        case 'ATUALIZAR_EMAIL' : return {...state, email : action.value}
        case 'ATUALIZAR_ASSUNTO' : return {...state, assunto : action.value}
        case 'LIMPAR' : return INITIAL_STATE
    default : return state
    }
}