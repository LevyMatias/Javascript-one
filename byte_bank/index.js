class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } 
    }

    depositar(valor) {
        if(valor <= 0) return;
        console.log("Valor Depositado: " + (this._saldo += valor));
    }
}

const cliente_1 = new Cliente();
cliente_1.nome = "Carlos";
cliente_1.cpf = 468978421;
cliente_1.rg = 2521015289;

const contaCarlos = new ContaCorrente();
contaCarlos.agencia = 4002;

console.log("Saldo do cliente: " + contaCarlos._saldo);
console.log("Agencia do cliente: " + contaCarlos.agencia);

contaCarlos.depositar(100);

const valorSacado = contaCarlos.sacar(50);
console.log("Valor Sacado: " + valorSacado);

console.log(contaCarlos);
console.log("Saldo atual é: " + contaCarlos._saldo);