import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CgClose } from 'react-icons/cg';

function TodoList() {
	const [tasks, setTasks] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (event.target.task.value) {
			const newTask = [event.target.task.value, uuidv4()];
			setTasks([...tasks, newTask]);
			event.target.task.value = '';
		}
	};

	const handleRemove = (taskToRemove) => {
		setTasks(tasks.filter((task) => task !== taskToRemove));
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="task" placeholder="e.g. Buy eggs for dinner" />
				<button type="submit">Add task</button>
			</form>
			<ul>
				{tasks.map((task) => (
					<li key={task[1]}>
						{task[0]}
						<button onClick={() => handleRemove(task)}>
							<CgClose />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
