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
        } 
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(this._saldo);
        }
    }
}

const cliente_1 = new Cliente();
cliente_1.nome = "Carlos";
cliente_1.cpf = 468978421;
cliente_1.rg = 2521015289;

const contaCarlos = new ContaCorrente();
contaCarlos.agencia = 4002;

console.log("Saldo do cliente: " + contaCarlos.saldo);
console.log("Agencia do cliente: " + contaCarlos.agencia);

contaCarlos.sacar(50);
contaCarlos.depositar(100);

console.log(contaCarlos);
console.log("Saldo atual é: " + contaCarlos._saldo);