// componente de concluir tarefa
const CheckButton = () => {
	const buttonCheck = document.createElement("button");

	buttonCheck.classList.add('check-button');
	buttonCheck.innerText = 'Concluir'
	buttonCheck.addEventListener('click', finishedTask);

	return buttonCheck;
}

// funcão de concluir tarefa
const finishedTask = (event) => {
	const buttonCheck = event.target;
	const taskCompleted = buttonCheck.parentElement;
	taskCompleted.classList.toggle('done');
}

export default CheckButton;