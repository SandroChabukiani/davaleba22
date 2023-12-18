import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask, markAsCompleted } from './redux/taskSlice';

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const deleteTaskHandler = async (id) => {
    await dispatch(deleteTask(id));
  };

  const markAsCompletedHandler = async (id) => {
    await dispatch(markAsCompleted(id));
  };

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - Completed: {task.isCompleted ? 'Yes' : 'No'}
            <button type="button" onClick={() => markAsCompletedHandler(task.id)}>
              Mark as Completed
            </button>
            <Link to={`/edit/${task.id}`}>Edit</Link>
            <button type="button" onClick={() => deleteTaskHandler(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
