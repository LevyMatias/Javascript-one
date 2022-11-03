export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoDeInput,input);
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome está vazio!'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio!',
        typeMismatch: 'O email digitado está inválido!'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio!',
        patternMismatch: 'A senha deve ter no máximo 6 carateres e ter pelo menos um número e uma letra!!'
    },
    dataNascimento: {
        valueMissing: 'Data de nascimento incompleto!',
        customError: 'Somente maiores de 18 anos podem se cadastrar!'
    },

}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

function mostraMensagemErro(tipoInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoInput][erro];
        }
    })
    return mensagem;
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maiorDe18(dataRecebida)){
        mensagem = 'Somente maiores de 18 anos podem se cadastrar!';
    }
    input.setCustomValidity(mensagem);

}

function maiorDe18(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date
    (
        data.getUTCFullYear() + 18, 
        data.getUTCMonth(), 
        data.getUTCDate()
    );

    return (dataMais18 <= dataAtual);
}