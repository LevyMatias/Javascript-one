import DeleteButton from "./components/deleteTask.js";
import CheckButton from "./components/finishTask.js";
	
	const createTask = (evento) => {
	evento.preventDefault();
	const input = document.querySelector('[data-form-input]');
	const list = document.querySelector('[data-list]'); // ul
	const valor = input.value;
	
	if(valor === "") {
		alert("Deve escrever uma tarefa!");
	} else {

		const content = `<p class="content">${valor}</p>`;
		const task = document.createElement('li'); // cria elemento li
		task.classList.add('task'); // pega a class task com css
		task.innerHTML = content; // coloca o content na li
	
	
		task.appendChild(CheckButton()); 
		task.appendChild(DeleteButton());
	
		list.appendChild(task); // elemento com o conteudo e passa para ul
		list.insertBefore(task, list.children[0]); // insere elemento li(task) antes do primeiro filho do elemento pai
	
		input.value = "";
	}
}
const taskBtn = document.querySelector('[data-form-button]');
taskBtn.addEventListener('click', createTask);