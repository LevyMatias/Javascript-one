// Componente para deletar tarefa
const DeleteButton = () => {
	const buttonDelete = document.createElement('button');
	buttonDelete.innerText = "Deletar";
	buttonDelete.classList.add('delete-button');

	buttonDelete.addEventListener('click', deleteTask);

	return buttonDelete;
}

// função pra deletar tarefa
const deleteTask = (event) => {
	const buttonDelete = event.target;
	const taskCompleted = buttonDelete.parentElement;

	taskCompleted.remove();

	return buttonDelete;
}

export default DeleteButton;