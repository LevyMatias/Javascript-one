export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
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