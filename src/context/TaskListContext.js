import React, { createContext, useState, useEffect } from 'react';
import { v4 } from 'uuid';

export const TaskContext = createContext();

const TaskListContextProvider = props => {
	const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

	const [tasks, setTasks] = useState(initialState);

	const [editItem, setEditItem] = useState('');

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const addTask = title => {
		setTasks([...tasks, { title, id: v4() }]);
	};

	const removeTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const clearList = () => {
		setTasks([]);
	};

	const findItem = id => {
		const item = tasks.find(task => task.id === id);
		setEditItem(item);
	};

	const editTask = (title, id) => {
		const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));
		setTasks(newTasks);
		setEditItem(null);
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
			{props.children}
		</TaskContext.Provider>
	);
};
export default TaskListContextProvider;

// uuid instalowanie pakietu do generowania id
