import { useState } from 'react';

function TodoApp() {
  // State to store the current input value
  const [task, setTask] = useState('');
  
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim() === '') return; // Don't add empty tasks
    setTasks([...tasks, task]); // Add the new task to the tasks array
    setTask(''); // Clear the input after adding
  };

  // Function to delete a task by its index
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filter out the task at the given index
    setTasks(newTasks);
  };

  return (
    <div className='min-h-screen bg-slate-200 p-6 flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-6'>Todo List</h1>

      <div className='flex space-x-4'>
        <input
          type="text"
          className='p-2 border border-gray-400 rounded'
          placeholder='Add a new task...'
          value={task} // Bind input value to `task` state
          onChange={(e) => setTask(e.target.value)} // Update the `task` state when typing
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <ul className='mt-6 w-full max-w-md'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className='flex justify-between items-center bg-white p-4 mb-2 shadow rounded'
          >
            {task}
            <button
              className='bg-red-500 text-white px-2 py-1 rounded'
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
