import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente_1 = new Cliente("Carlos", 468978421, 2521015289);

const contaCarlos = new ContaCorrente(4002, cliente_1);
contaCarlos.depositar(250);

const cliente_2 = new Cliente("Rodrigo", 9574956159, 1568793629);

const contaRodrigo = new ContaCorrente(4004, cliente_2);

contaCarlos.transferir(150, contaRodrigo);

console.log(contaCarlos);
console.log(contaRodrigo);
console.log(ContaCorrente.numeroDeContas);