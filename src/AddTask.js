import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from './redux/taskSlice';

function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    name: '',
    isCompleted: false,
    term: '',
    assigneeName: '',
    assigneeSurname: '',
    additionalInfo: '',
  });

  const addTaskHandler = () => {
    dispatch(addTask(newTask));
    navigate('/');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        required
      />
      <button type="button" onClick={addTaskHandler}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
