import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './AddTask';
import EditTask from './EditTask';
import TasksList from './TasksList';
import { toggleDarkMode } from './redux/taskSlice';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.tasks.darkMode);

  return (
    <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <h1>TODO App</h1>
      <button type="button" onClick={() => dispatch(toggleDarkMode())}>
        Toggle Dark Mode
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Task</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/" element={<TasksList />} />
      </Routes>
    </div>
  );
}

export default App;
