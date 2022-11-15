export class Conta {
    #agencia;
    #cliente;
    #saldoInicial;
    constructor(saldoInicial, cliente, agencia) {
        this.#saldoInicial = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
    }
    
    // métodos
    sacar(valor) {
        taxa = 1.1 * valor;
        if(this.#saldoInicial >= valor) {
            this.#saldoInicial -= valor;
            return valor;
        } 
    }

    depositar(valor) {
        if(valor <= 0) return;
        this.#saldoInicial += valor;
    }

    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}