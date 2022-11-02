export class ContaCorrente {
    agencia;
    cliente;

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

    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}