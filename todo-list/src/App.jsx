
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        console.log("Task list updated:", tasks);
    }, [tasks]);

    const addTask = () => {
        if (task.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex].text = task;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([
                ...tasks,
                { text: task, completed: false }
            ]);
        }

        setTask("");
    };

    const editTask = (index) => {
        setTask(tasks[index].text);
        setEditIndex(index);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));

        if (editIndex === index) {
            setTask("");
            setEditIndex(null);
        } else if (editIndex !== null && editIndex > index) {
            setEditIndex(editIndex - 1);
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((item, i) =>
            i === index
                ? { ...item, completed: !item.completed }
                : item
        );

        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>
                    {editIndex !== null ? "Save" : "Add Task"}
                </button>
            </div>

            {tasks.length === 0 ? (
                <p className="empty">No tasks yet. Add your first task!</p>
            ) : (
                <ul>
                    {tasks.map((item, index) => (
                        <li key={index} className="task">
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleTask(index)}
                            />

                            <span
                                className={
                                    item.completed ? "completed" : ""
                                }
                            >
                                {item.text}
                            </span>

                            <button
                                className="edit-btn"
                                onClick={() => editTask(index)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;