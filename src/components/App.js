import TaskList from './TaskList';
import '../App.css';
import TaskListContextProvider from '../context/TaskListContext';
import TaskForm from './TaskForm';
import Header from './Header';

function App() {
	return (
		<TaskListContextProvider>
			<div className='container'>
				<div className='app-wrapper'>
					<Header />
					<div className='main'>
						<TaskForm />
						<TaskList />
					</div>
				</div>
			</div>
		</TaskListContextProvider>
	);
}

export default App;
