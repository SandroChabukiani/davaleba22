import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTask, fetchTasks } from './redux/taskSlice';

const selectTaskById = (state, id) => state.tasks.items.find((task) => task.id === id);

function EditTask() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector((state) => selectTaskById(state, id)) || {
    name: '',
    isCompleted: false,
    term: '',
    assigneeName: '',
    assigneeSurname: '',
    additionalInfo: '',
  };

  const [updatedTask, setUpdatedTask] = useState({ ...task });

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const updateTaskHandler = () => {
    dispatch(updateTask({ id, task: updatedTask }));
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={updatedTask.name}
        onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
        required
      />
      <button type="button" onClick={updateTaskHandler}>
        Update Task
      </button>
    </div>
  );
}

export default EditTask;
