import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;

    #cliente;
    #saldo = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.#cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    // acessadores das propriedades
    set cliente(valor) {
        if(valor instanceof Cliente) {
            this.#cliente = valor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    // métodos
    sacar(valor) {
        if(this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        } 
    }

    depositar(valor) {
        if(valor <= 0) return;
        this.#saldo += valor;
    }

    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}