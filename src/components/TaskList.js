import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
	const { tasks } = useContext(TaskContext);
	// nazwa naszego objektu z useState'a, który zawiera zmienne task i id
	return (
		<>
			{tasks.length ? (
				<ul className='list'>
					{tasks.map(task => (
						<Task key={task.id} task={ task } />
					))}
				</ul>
			) : (
				<div className='no-tasks'>No tasks on list</div>
			)}
		</>
	);
};

export default TaskList;
