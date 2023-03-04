import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from '../context/TaskListContext';

const TaskForm = () => {
	const { addTask, clearList, editItem, editTask } = useContext(TaskContext);

	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!editItem) {
			addTask(title);
			setTitle('');
		} else {
			editTask(title, editItem.id);
		}
	};

	const handleChange = e => {
		setTitle(e.target.value);
	};

	useEffect(() => {
		editItem !== null ? setTitle(editItem.title) : setTitle('');
	}, [editItem]);

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input type='text' className='task-input' placeholder='Add Task' onChange={handleChange} value={title} required />
			<div>
				<button type='submit' className='btn add-task-btn'>
					{editItem ? 'Edit Task' : 'Add Task'}
				</button>
				<button type='submit' onClick={() => clearList()} className='btn clear-btn'>
					Clear
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
