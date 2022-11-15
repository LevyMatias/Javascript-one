import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js"

const cliente_1 = new Cliente("Carlos", 468978421, 2521015289);

const contaCarlos = new Conta(0, cliente_1, 4002);
contaCarlos.depositar(250);

const contaPoupanca = new Conta(100, cliente_1, 4004);

console.log(contaCarlos.cliente_1);
console.log(contaPoupanca);