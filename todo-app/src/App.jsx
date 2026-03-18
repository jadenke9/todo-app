import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Add a new task
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, taskToDelete]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task
  const editTask = (id) => {
    const newText = prompt("Edit note:");
    if (!newText) return;
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <span className="icon">📝</span>
        <h1>Notes</h1>
        <div className="toggleContainer">
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </header>

      <div className="inputContainer">
        <input
          type="text"
          placeholder="New note..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="taskList">
        {tasks.map((task) => (
          <li key={task.id} className="taskItem">
            <span
              onClick={() => toggleComplete(task.id)}
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </span>
            <div>
              <button className="smallButton" onClick={() => editTask(task.id)}>
                Edit
              </button>
              <button
                className="smallButton delete"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {deletedTasks.length > 0 && (
        <>
          <h2>Deleted Notes</h2>
          <ul className="taskList">
            {deletedTasks.map((task) => (
              <li key={task.id} className="taskItem deleted">
                {task.text}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}