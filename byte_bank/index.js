class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente_1 = new Cliente();
const cliente_2 = new Cliente();

cliente_1.nome = "Carlos";
cliente_1.cpf = 468978421;
cliente_1.agencia = 2005;
cliente_1.saldo = 0;
cliente_1.rg = 2521015289;

cliente_2.nome = "Marcos";
cliente_2.cpf = 761988471;
cliente_2.agencia = 2005;
cliente_2.saldo = 0;
cliente_2.rg = 59684712893;

console.log(cliente_1);
console.log(cliente_2);