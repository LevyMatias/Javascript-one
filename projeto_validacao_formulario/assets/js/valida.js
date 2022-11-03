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
    cpf: {
        valueMissing: 'O campo CPF não pode estar vazio!',
        customError: 'O CPF digitado não é válido!'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input)
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

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = '';

    if(!checarCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = 'O CPF digitado não é válido!';
    }

    input.setCustomValidity(mensagem);
}

function checarCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true;

    valoresRepetidos.forEach(valor => {
        if(valor === cpf) {
            cpfValido = false;
        }
    })

    return cpfValido;
}

function checaEstruturaCPF(cpf) {
    const multiplicador = 10;
    return checaDigitoVerificador(cpf, multiplicador);
}

function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador >= 12) {
        return true;
    }

    let multiplicadorInicial = multiplicador;
    let soma = 0;
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
    const digitoVerificador = cpf.charAt(multiplicador - 1);

    for(let i = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[i] * multiplicadorInicial;
        i++;
    }

    if((digitoVerificador == confirmaDigito(soma) || (digitoVerificador == 0 && confirmaDigito(soma) == 10))) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false;
}

function confirmaDigito(soma) {
    let restoDaDivisao = 11 - (soma % 11);
    if (restoDaDivisao === 10 || restoDaDivisao === 11) restoDaDivisao = 0;
    return restoDaDivisao;
}