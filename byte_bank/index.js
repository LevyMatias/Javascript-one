import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente_1 = new Cliente();
cliente_1.nome = "Carlos";
cliente_1.cpf = 468978421;
cliente_1.rg = 2521015289;

const contaCarlos = new ContaCorrente();
contaCarlos.agencia = 4002;
contaCarlos.cliente = cliente_1;
contaCarlos.depositar(250);

const cliente_2 = new Cliente();
cliente_2.nome = "Rodrigo";
cliente_2.cpf = 9574956159;
cliente_2.rg = 1568793629;


const contaRodrigo = new ContaCorrente();
contaRodrigo.agencia = 4004;
contaRodrigo.cliente = cliente_2;

contaCarlos.transferir(150, contaRodrigo);

console.log(contaCarlos);
console.log(contaRodrigo);